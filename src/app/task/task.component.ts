import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  tasks: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.get('/api/tasks', httpOptions).subscribe(data => {
      this.tasks = data;
      console.log(this.tasks);
    }, err => {
      if(err.status === 401) {
        this.router.navigate(['login']);
      }
    });
  }
  
  logout() {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['login']);
  }
}
