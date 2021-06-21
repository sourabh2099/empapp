import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddempComponent } from './addemp/addemp.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { ViewbydeptComponent } from './viewbydept/viewbydept.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { ViewempbyidComponent } from './viewempbyid/viewempbyid.component';
import { ViewallemployeeComponent } from './viewallemployee/viewallemployee.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddempComponent,
    EditemployeeComponent,
    ViewbydeptComponent,
    ViewempComponent,
    ViewempbyidComponent,
    ViewallemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
