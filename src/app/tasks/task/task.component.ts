import { Component, Input, inject } from '@angular/core';
import { type Task } from './task.model';
import { TasksService } from '../tasks.service';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-task',
  standalone:true,
  imports:[CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.less'
})
export class TaskComponent {

  @Input({required:true})task!:Task;
  private tasksService=inject(TasksService);

  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }
}
