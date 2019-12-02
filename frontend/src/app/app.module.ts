import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './tasks/list/list.component';
import { CreateComponent } from './tasks/create/create.component';
import { EditComponent } from './tasks/edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatOptionModule, 
  MatSelectModule, 
  MatIconModule, 
  MatButtonModule, 
  MatCardModule, 
  MatTableModule, 
  MatDividerModule, 
  MatSnackBarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { IssueService } from './issue.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', component: SignInComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  //{ path: '', redirectTo: '/list', pathMatch: 'full'},
  { path: 'create', component: CreateComponent, canActivate: [AuthGuardService] },
  { path: 'edit/:id', component: EditComponent, canActivate: [AuthGuardService] },
  { path: 'list', component: ListComponent, canActivate: [AuthGuardService] },
  
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    SignInComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    IssueService,
    AuthenticationService, 
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
