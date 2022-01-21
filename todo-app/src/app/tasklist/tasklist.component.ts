import { Component, OnInit } from '@angular/core';
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
 
  constructor(private taskService: TaskService) { 
    
  }

  ngOnInit(): void {
    this.getTaskList();
  }
  
  getTaskList() {
 
   this.taskService.getAllTasks().subscribe((customList: Task[]) => {
    this.tasks = customList;
    this.tasks.map(t => {console.log(t.description)});
    // todo: determine the selected configuration
   
});
   
  }

}
