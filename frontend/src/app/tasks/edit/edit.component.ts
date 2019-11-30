import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { IssueService } from '../../issue.service';
import { Task } from '../../issue.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  issue: any = {};
  updateForm: FormGroup;

  constructor(private issueService: IssueService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.issueService.getTaskById(this.id).subscribe(res => {
        this.issue = res;
        this.updateForm.get('name').setValue(this.issue.name);
        this.updateForm.get('due_date').setValue(this.issue.due_date);
        this.updateForm.get('status').setValue(this.issue.status);
        this.updateForm.get('priority').setValue(this.issue.priority);
        //this.updateForm.get('status').setValue(this.issue.status);
      });
    });
  }

  createForm() {
    this.updateForm = this.fb.group({
      name: ['', Validators.required ],
      due_date: '',
      status: '',
      priority: ''
    });
  }

  updateIssue(name, due_date, status, priority) {
    this.issueService.updateTask(this.id, name, due_date, status, priority).subscribe(() => {
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 3000,
      });
    });
  }

}
