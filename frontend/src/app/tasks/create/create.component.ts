import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

 createForm: FormGroup;

 constructor(private issueService: IssueService, private fb: FormBuilder, private router: Router) {
   this.createForm = this.fb.group({
     name: ['', Validators.required],
     due_date: '',
     status: '',
     priority: ''
   });
 }

 addTask(name: string, due_date: string, status: string, priority: string) {
   this.issueService.addTask(name, due_date, status, priority).subscribe(() => {
     this.router.navigate(['/list']);
   });
 }
  ngOnInit() {
  }

}
