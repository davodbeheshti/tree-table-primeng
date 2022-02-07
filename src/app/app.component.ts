import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import * as uuid from 'uuid';
import { AddNodeComponent } from './add-node/add-node.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    MessageService,
    DialogService
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  files: any;
  ref: DynamicDialogRef;
  cols: any[];
  dataTableReloader: boolean = true;
  items: MenuItem[];

  constructor(private messageService: MessageService, private dialogService: DialogService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.items = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          this.EditChild(this.rowData , this.rowNode)
        }
      },
      {
        icon: 'pi pi-plus',
        command: () => {
          // this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
          this.addChild(this.rowData , this.rowNode);
        }
      },
      {
        icon: 'pi pi-trash',
        command: () => {
          // this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
          this.deleteChild(this.rowData , this.rowNode)
        }
      },
    ];
    this.files =
      [
        {
          "data": {
            "nameCar": "Documents",
            "price": "75kb",
            "country": "Folder",
            id: uuid.v4(),
          },
          "children": [
            {
              "data": {
                "nameCar": "Work",
                "price": "55kb",
                "country": "Folder",
                id: uuid.v4(),
              },
              "children": [
                {
                  "data": {
                    "nameCar": "Expenses.doc",
                    "price": "30kb",
                    "country": "Document",
                    id: uuid.v4(),
                  }
                },
                {
                  "data": {
                    "nameCar": "Resume.doc",
                    "price": "25kb",
                    "country": "Resume",
                    id: uuid.v4(),
                  }
                }
              ]
            },
            {
              "data": {
                "nameCar": "Home",
                "price": "20kb",
                "country": "Folder",
                id: uuid.v4(),
              },
              "children": [
                {
                  "data": {
                    "nameCar": "Invoices",
                    "price": "20kb",
                    "country": "Text",
                    id: uuid.v4(),
                  }
                }
              ]
            }
          ]
        },
        {
          "data": {
            "nameCar": "Pictures",
            "price": "150kb",
            "country": "Folder",
            id: uuid.v4()
          },
          "children": [
            {
              "data": {
                "nameCar": "barcelona.jpg",
                "price": "90kb",
                "country": "Picture",
                id: uuid.v4()
              }
            },
            {
              "data": {
                "nameCar": "primeui.png",
                "price": "30kb",
                "country": "Picture",
                id: uuid.v4()
              }
            },
            {
              "data": {
                "nameCar": "optimus.jpg",
                "price": "30kb",
                "country": "Picture",
                id: uuid.v4()
              }
            }
          ]
        }
      ]
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' }
    ];
  }

  rowData;
  rowNode;

  hideOperation() {
    // this.rowData = '';
  }
  showOperation(rowData , rowNode) {
    this.rowData = rowData;
    this.rowNode = rowNode;
  }

  addChild(rowData , rowNode) {
    this.ref = this.dialogService.open(AddNodeComponent, {
      header: 'add favorid car',
      width: '50%'
    })
    this.ref.onClose.subscribe(x => {
      if (x) {
        // rowNode.children.unshift({ data: { nameCar: x.nameCar, price: x.price, country: x.country, id: uuid.v4() }, children: [] }) // angular primeng 11
        rowNode.node.children.unshift({ data: { nameCar: x.nameCar, price: x.price, country: x.country, id: uuid.v4() }, children: [] }) // angular primeng 12++
        this.messageService.add({ severity: 'success', summary: 'add', detail: 'Adding Success Full' })
        rowNode = null;
      }
    })
  }

  EditChild(rowData , rowNode) {
    this.ref = this.dialogService.open(AddNodeComponent, {
      header: 'add favorid car',
      width: '50%',
      data: rowData
    })
    this.ref.onClose.subscribe(x => {
      if (x) {
        // rowNode.data.nameCar = x.nameCar; // angular primeng 11
        rowNode.node.data.nameCar = x.nameCar;  // angular primeng 12++
        rowNode.node.data.price = x.price;
        rowNode.node.data.country = x.country;
        this.messageService.add({ severity: 'warn', summary: 'Edit', detail: 'Edit Success Full' });
      }
    })
  }

  deleteChild(rowData , rowNode) {
    setTimeout(() => {
      // if(rowNode.parent === null) { // angualr primeng version 11
      if (rowNode.node.parent === null) { // angualr primeng version 12 ++
        const index = this.files.findIndex(x => x.data.id === rowData.id);
        this.files.splice(index, 1);
        this.dataTableReloader = false;
        setTimeout(() => this.dataTableReloader = true, 0);
        this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Deleted Success Full' })
      } else {
        const index = rowNode.node.parent.children.findIndex(x => x.data.id === rowData.id);
        // rowNode.parent.children.splice(index, 1); // angualr primeng version 11
        rowNode.node.parent.children.splice(index, 1); // angualr primeng version 12 ++
        this.dataTableReloader = false;
        setTimeout(() => this.dataTableReloader = true, 0);
        this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Deleted Success Full' })
      }
    }, 0);
  }

}