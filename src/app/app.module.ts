import { TodoDataService } from './todo-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    TodoDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
