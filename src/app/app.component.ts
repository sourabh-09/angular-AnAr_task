import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  tasks: any[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchTasks();
  }

  fetchTasks() {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe((tasks) => {
        this.tasks = tasks;
      });
  }
  updateTask(task: any) {
    this.http
      .put('https://jsonplaceholder.typicode.com/todos/' + task.id, task)
      .subscribe();
  }
}
