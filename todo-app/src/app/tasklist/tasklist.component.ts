import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Task } from '../model/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  public tasks: Task[]; 
  @Input()
  public description: string;
  constructor(private taskService: TaskService) { 
    
  }

  ngOnInit(): void {
    this.getTaskList();
  }
  
  getTaskList() {
 
    this.taskService.getAllTasks().subscribe((customList: Task[]) => {
    this.tasks = customList;
    this.tasks.map(t => {console.log(t.description)});
   
    });
   
  }

  addTask(){
    const taskSave = new Task();
    taskSave.description = this.description;
    taskSave.userid = 1;
    this.taskService.addTask(taskSave);
    console.log("Add task to taskList "+this.description);
  }

  removeTask(){
    console.log("remove from taskList");
  }

}
