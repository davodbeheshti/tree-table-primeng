import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import * as uuid from 'uuid';


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

  constructor(private messageService: MessageService, private dialogService: DialogService) { }

  ref: DynamicDialogRef;
  cols: any[];

  ngOnInit(): void {
    this.files =
      [
        {
          "data": {
            "name": "Documents",
            "size": "75kb",
            "type": "Folder",
            id: uuid.v4(),
          },
          "children": [
            {
              "data": {
                "name": "Work",
                "size": "55kb",
                "type": "Folder",
                id: uuid.v4(),
              },
              "children": [
                {
                  "data": {
                    "name": "Expenses.doc",
                    "size": "30kb",
                    "type": "Document",
                    id: uuid.v4(),
                  }
                },
                {
                  "data": {
                    "name": "Resume.doc",
                    "size": "25kb",
                    "type": "Resume",
                    id: uuid.v4(),
                  }
                }
              ]
            },
            {
              "data": {
                "name": "Home",
                "size": "20kb",
                "type": "Folder",
                id: uuid.v4(),
              },
              "children": [
                {
                  "data": {
                    "name": "Invoices",
                    "size": "20kb",
                    "type": "Text",
                    id: uuid.v4(),
                  }
                }
              ]
            }
          ]
        },
        {
          "data": {
            "name": "Pictures",
            "size": "150kb",
            "type": "Folder",
            id: uuid.v4()
          },
          "children": [
            {
              "data": {
                "name": "barcelona.jpg",
                "size": "90kb",
                "type": "Picture",
                id: uuid.v4()
              }
            },
            {
              "data": {
                "name": "primeui.png",
                "size": "30kb",
                "type": "Picture",
                id: uuid.v4()
              }
            },
            {
              "data": {
                "name": "optimus.jpg",
                "size": "30kb",
                "type": "Picture",
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
    console.log("select", e);
    this.selectedNode = e;
  }
  nodeUnselect(e) {
    console.log("Unselect", e);
    this.selectedNode = e;
  }

  selectedNode;
  test() {
    console.log(this.selectedNode);
  }

  addNode(rowData) {
    setTimeout(() => {
      console.log(this.selectedNode);
    }, 0);
    console.log(rowData);
  }
  EditNode(rowData) {
    setTimeout(() => {
      console.log(this.selectedNode);
    }, 0);
    console.log(rowData);
  }
  deleteNode(rowData) {
    setTimeout(() => {
      console.log(this.selectedNode);
    }, 0);
    console.log(rowData);
  }

}