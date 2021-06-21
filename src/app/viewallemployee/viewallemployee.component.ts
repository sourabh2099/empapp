import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-viewallemployee',
  templateUrl: './viewallemployee.component.html',
  styleUrls: ['./viewallemployee.component.css']
})
export class ViewallemployeeComponent implements OnInit {
emp:Emp[] = [];
msg:string;
  constructor(private empService:EmpService) { }

  ngOnInit() {
    this.empService.viewAll().subscribe(data=>this.emp = data);
    console.log("inside");
  }

}
