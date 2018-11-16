import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { RouterModule, Routes, Router} from '@angular/router';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { UserReactiveFormComponent } from './user-reactive-form/user-reactive-form.component';

import {HttpClientModule} from '@angular/common/http';

// primeNG
import {AccordionModule} from 'primeng/accordion';
import {PasswordModule} from 'primeng/password';
import {InputMaskModule} from 'primeng/inputmask';
import {TabMenuModule} from 'primeng/tabmenu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const route: Routes = 
[
  {path: 'addUser', component: UserReactiveFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route),
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    AccordionModule,
    PasswordModule,
    InputMaskModule,
    TabMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
