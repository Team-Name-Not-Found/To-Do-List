import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
// export class AuthenticationService {
//   private token: string;

//   constructor(private http: HttpClient, private router: Router) {}

//   private saveToken(token: string): void {
//     localStorage.setItem('mean-token', token);
//     this.token = token;
//   }

//   private getToken(): string {
//     if (!this.token) {
//       this.token = localStorage.getItem('mean-token');
//     }
//     return this.token;
//   }

//   public logout(): void {
//     this.token = '';
//     window.localStorage.removeItem('mean-token');
//     this.router.navigateByUrl('/');
//   }
// }
export class IssueService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {
  }

  addTask(name: string, due_date: string, status: string, priority: string) {
    const task = {
      name: name,
      due_date: due_date,
      status: status,
      priority: priority
    };
    return this.http.post(`${this.uri}/tasks/add`, task);
  }

  getTasks() {
    return this.http.get(`${this.uri}/tasks`);
  }

  getTaskById(id) {
    return this.http.get(`${this.uri}/tasks/${id}`);
  }

  updateTask(id, name, due_date, status, priority) {
    const task = {
      name: name,
      due_date: due_date,
      status: status,
      priority: priority
    };
    return this.http.post(`${this.uri}/tasks/update/${id}`, task);
  }

  deleteIssue(id) {
    return this.http.get(`${this.uri}/tasks/delete/${id}`);
  }
}

