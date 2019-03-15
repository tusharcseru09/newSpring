import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formcontrol',
  templateUrl: './formcontrol.component.html',
  styleUrls: ['./formcontrol.component.css']
})
export class FormcontrolComponent implements OnInit {

  name = new FormControl('');
  constructor() {
  }
  ngOnInit() {
  }
  printText(val: any) {
    alert(val);
    console.log(this.name.value);
    console.log(this.name.status);
  }

}
