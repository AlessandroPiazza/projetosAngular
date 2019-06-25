import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DataFormComponent } from './data-form.component';
import { TemplateFormModule } from '../template-form/template-form.module';
import { SharedModule } from '../shared/shared.module';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    DataFormComponent

  ],
  imports: [
    CommonModule,
    TemplateFormModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonsModule.forRoot(),
    SharedModule,
    HttpClientModule,
    AlertModule.forRoot()
  ]
})
export class DataFormModule { }
