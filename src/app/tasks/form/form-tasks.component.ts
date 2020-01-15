import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TasksService} from '../../shared/services/http/data/tasks/tasks.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Task} from '../../shared/models/task/task';

@Component({
  selector: 'app-form-tasks',
  templateUrl: './form-tasks.component.html',
  styleUrls: ['./form-tasks.component.css']
})
export class FormTasksComponent implements OnInit {

  task: Task;
  taskGroup: FormGroup;
  isEdit = false;

  constructor(private tasksService: TasksService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.taskGroup = this.formBuilder.group({
      name: ['', Validators.required],
      userId: ['', Validators.required],
      due: ['', Validators.required],
      notes: ['', Validators.required],
      status: ['', Validators.required],
      sectionId: ['', Validators.required],
      // sectionName: ['', Validators.required],
    });
    this.route.params.subscribe(params => {
      if (params.id) {
        this.isEdit = true;
        this.getTaskDetails(params.id);
      }
    });
  }

  getTaskDetails(id: string) {
    this.tasksService.getTaskDetails(id).subscribe(task => {
      this.task = task;
      this.taskGroup.patchValue(task);
    });
  }

  save() {
    if (this.isEdit) {
      this.tasksService.editTask(this.task.id, this.taskGroup.value).subscribe(() => {
        this.router.navigate(['tasks']);
      });
    } else {
      this.tasksService.createTask(this.taskGroup.value).subscribe(() => {
        this.router.navigate(['tasks']);
      });
    }
  }

}
