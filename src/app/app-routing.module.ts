import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewNoteComponent } from './new-note/new-note.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'new-task', component: NewTaskComponent},
  {path:'new-note', component: NewNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
