import { Component, OnInit } from '@angular/core';
import { ITask } from '../shared/models/task';
import { TasksService } from '../shared/services/tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public tasks: ITask[];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void { 
    this.tasksService.loadAllTasks(); 
    this.getTasks()
  }ß

  addSecondTask(){

  }


  getTasks(){
    this.tasksService.getTasks()
    .subscribe(res => {
      this.tasks = res;
      console.log(this.tasks)
    })
  }
}
