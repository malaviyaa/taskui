import { Component, Input, OnInit } from '@angular/core';

import { Task } from '../model/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  @Input() description: string;

  public tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTaskList();
  }

  getTaskList() {

    this.taskService.getAllTasks().subscribe((inputTaskList: Task[]) => {
      this.tasks = inputTaskList;
    });

  }

  addTask() {
    const taskSave = new Task();
    taskSave.description = this.description;
    taskSave.userid = 1;
    this.taskService.addTask(taskSave);
    this.getTaskList();
  }

  removeTask(taskid: any) {
    console.log("remove from taskList " + taskid);
    this.taskService.removeTask(taskid);
    this.getTaskList();
  }

}
