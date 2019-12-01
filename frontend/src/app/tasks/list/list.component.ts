import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Task } from '../../issue.model';
import { IssueService } from '../../issue.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tasks: Task[];
  displayedColumns = ['name', 'due_date', 'status', 'priority', 'actions'];
  //constructor() { }
  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
    this.fetchTasks();
  }

  fetchTasks(){
    this.issueService
    .getTasks()
    .subscribe((data: Task[]) => {
      this.tasks = data;
      console.log('Data requested ... ');
      console.log(this.tasks);
    });
  }
  editTask(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteTask(id) {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.fetchTasks();
    });
  }

}
