import { Component, OnInit } from '@angular/core';
import * as uuid from 'uuid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  files: any;

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
  }

  addNode(rowData) {
    console.log(rowData);
  }
  deleteNode(rowData) {
    console.log(rowData);
  }

}