import { Component, OnInit } from '@angular/core';
import { Dept } from '../dept';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-viewbydept',
  templateUrl: './viewbydept.component.html',
  styleUrls: ['./viewbydept.component.css']
})
export class ViewbydeptComponent implements OnInit {
  dept: string;
  deptObj: Dept[] = [];
  msg: string;

  constructor(private empSevice: EmpService) {

  }

  ngOnInit() {
    this.empSevice.viewDepts().subscribe(data => { console.log(data); this.deptObj = data });
  }
  viewbydept() {
    this.empSevice.viewByDept(this.dept).subscribe(data => { console.log(data); this.deptObj = data },
      error => console.log(error));
  }
}
