  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {TaskComponent} from './task/task.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes =
[
  {
    path:'tasks',
    component: TaskComponent,
    data:{title: 'Task List'}
  },
  {
    path:'login',
    component: LoginComponent,
    data:{title: 'Login'}
  },
  {
    path:'signup',
    component: SignupComponent,
    data: {title: 'Sign Up'}
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
