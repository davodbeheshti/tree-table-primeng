import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-node',
  templateUrl: './add-node.component.html',
  styleUrls: ['./add-node.component.scss']
})
export class AddNodeComponent implements OnInit {

  constructor(private dialogConfig: DynamicDialogConfig, private ref: DynamicDialogRef) { }

  form: FormGroup;

  ngOnInit(): void {
    debugger
    this.form = new FormGroup({
      nameCar: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      country: new FormControl('')
    })
    if (this.dialogConfig.data) {
      const { nameCar, price, country } = this.dialogConfig.data
      this.form.patchValue({
        nameCar,
        price,
        country
      })
    }
  }

  public applyChanges = () => {
    this.ref.close(this.form.value);
  }

}
