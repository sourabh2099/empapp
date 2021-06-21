import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-viewempbyid',
  templateUrl: './viewempbyid.component.html',
  styleUrls: ['./viewempbyid.component.css']
})
export class ViewempbyidComponent implements OnInit {
emp:Emp = null;
eid:number;
msg:string;

  constructor(private empService:EmpService) { }

  ngOnInit() {
  }
  searchById(){
    this.empService.viewById(this.eid).subscribe(data=>{this.emp = data,this.msg = undefined},
                                                 error=>{console.log(error);this.msg = error.error.message;this.emp = null});
  }
}
