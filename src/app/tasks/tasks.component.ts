import { Component, OnInit } from '@angular/core';
import {Task} from '../shared/models/task/task';
import {TasksService} from '../shared/services/http/data/tasks/tasks.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  displayedColumns: string[] = ['id', 'name', 'userId', 'due', 'actions'];

  constructor(private tasksService: TasksService,
              private router: Router) { }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.tasksService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  editTask(task: Task) {
    this.router.navigate(['tasks', task.id, 'edit']);
  }

  createTask() {
    this.router.navigate(['tasks', 'create']);
  }

}
