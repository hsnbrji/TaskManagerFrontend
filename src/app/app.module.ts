import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UrlInterceptor} from './shared/services/http/interceptors/url-interceptor';
import {TasksService} from './shared/services/http/data/tasks/tasks.service';
import {ParamReplacePipe} from './shared/pipes/param-replace.pipe';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatNativeDateModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormTasksComponent} from './tasks/form/form-tasks.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    FormTasksComponent,
    ParamReplacePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true },
    TasksService,
    ParamReplacePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
