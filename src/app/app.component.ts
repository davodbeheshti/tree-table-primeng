import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
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
  ]
})
export class AppComponent implements OnInit {

  files: any;
  selectedNode;
  ref: DynamicDialogRef;
  cols: any[];
  constructor(private messageService: MessageService, private dialogService: DialogService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
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
  nodeSelect(e) {
    this.selectedNode = e;
  }
  nodeUnselect(e) {
    this.selectedNode = e;
  }
  addNode(rowData) {
    this.ref = this.dialogService.open(AddNodeComponent, {
      header: 'add favorid car',
      width: '50%'
    })
    this.ref.onClose.subscribe(x => {
      if (x) {

      }
    })
    console.log(rowData);
  }
  EditNode(rowData) {
    console.log(rowData);
    this.ref = this.dialogService.open(AddNodeComponent, {
      header: 'add favorid car',
      width: '50%',
      data: rowData
    })
    this.ref.onClose.subscribe(x => {
      if (x) {

      }
    })
  }

  deleteNode(rowData) {
    setTimeout(() => {
      console.log(this.selectedNode);
    }, 0);
    console.log(rowData);
  }

}