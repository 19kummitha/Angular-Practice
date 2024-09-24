import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { classbindingComponent } from './classbinding/classbinding.component';
import { databindingComponent } from './databinding/databinding.component';
import { employeeComponent } from './employee/employee.component';
import { stylebinding } from './stylebinding/stylebinding.component';

@NgModule({
  declarations: [
    AppComponent,
    employeeComponent,
    databindingComponent,
    classbindingComponent,
    stylebinding
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
