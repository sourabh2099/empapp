import { JsonpCallbackContext } from '@angular/common/http/src/jsonp';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Dept } from '../dept';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';
import { Empdto } from '../empdto';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  emp: Empdto = new Empdto();
  depts: Dept[] = [];
  msg: string;
  errorMsg: string;
  userName = this.empService.userName;
  errors: string[];

  @ViewChild("frm")
  form: NgForm
  constructor(private empService: EmpService) { }

  ngOnInit() {
    this.empService.viewDepts().subscribe(data => this.depts = data)
  }

  addEmp() {
    this.empService.addEmployee(this.emp).subscribe(data => {
      console.log("data ", data);
      this.msg = data; this.errorMsg = undefined;
      this.errors = undefined;
      this.emp = new Empdto(); this.form.reset()
    },
      error => {
        console.log(error);
        this.errorMsg = JSON.parse(error.error).message;
        this.msg = undefined;
        this.errors = JSON.parse(error.error).messages
      });
  }
}