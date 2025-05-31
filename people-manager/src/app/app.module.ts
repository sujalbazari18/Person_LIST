import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonListComponent } from './people-list/people-list.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonDeleteComponent } from './person-delete/person-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonEditComponent,
    PersonDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
