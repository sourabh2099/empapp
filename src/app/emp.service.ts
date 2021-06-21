import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empdto } from './empdto';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  userName:string;
  constructor(private http:HttpClient) { }

  public viewAll():Observable<any>{
    return this.http.get("http://localhost:8082/empapp/viewall");
  }

  public viewByDept(dname:string):Observable<any>{
    return this.http.get("http://localhost:8082/empapp/viewbydept");
  }

  public addEmployee(emp:Empdto):Observable<any>{
    return this.http.post("http://localhost:8082/empapp/addemployee",emp,{responseType:'text'});
  }

  public viewById(eid:number):Observable<any>{
    return this.http.get("http://localhost:8082/empapp/viewbyid/"+eid);
  }

  public viewDepts():Observable<any>{
    return this.http.get("http://localhost:8082/empapp/viewdepts");
  }

  public editEmployee(emp:Empdto):Observable<any>{
    return this.http.put("http://localhost:8082/empapp/editemployee",emp,{responseType :'text'});
  }

  public deleteEmployee(eid:number):Observable<any>{
    return this.http.delete("http://localhost:8082/empapp/removeemployee/"+eid,{responseType:'text'});
  }
}
