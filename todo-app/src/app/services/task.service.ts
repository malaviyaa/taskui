import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Task } from '../model/task.model';

@Injectable()
export class TaskService {
  constructor(private http: HttpClient) { }
  
  private taskUrl = "http://localhost:8080/todo/";
  
  private addTaskUrl = "http://localhost:8080/todo/add";
  
  private removeTaskUrl = "http://localhost:8080/todo/remove/";
  

  public getAllTasks(): Observable<Task[]> {
   
    return this.http.get<Task[]>(this.taskUrl);
  }

  public addTask(task:Task) {
   console.log("inside save "+task.description);
    return this.http.post<Task>(this.addTaskUrl,task).subscribe();
  }

  public removeTask(taskid:any) {
      const removeurl= this.removeTaskUrl + taskid
      console.log("inside remove url "+ removeurl);
    return this.http.get(removeurl).subscribe();
  }
}