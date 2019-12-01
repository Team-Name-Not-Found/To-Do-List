import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
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

