import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Task } from '../model/task.model';

@Injectable()
export class TaskService {
  constructor(private http: HttpClient) { }
  
  private taskUrl = "http://localhost:8080/todo/";
  
  public getAllTasks(): Observable<Task[]> {
   
    return this.http.get<Task[]>(this.taskUrl);
        
      
  }
}