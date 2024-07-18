import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-user';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[HeaderComponent,UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'my-third-project';

  users=DUMMY_USERS;
  selecteUserId?:string;

  get selectedUser(){
    return this.users.find((user)=>user.id===this.selecteUserId);
  }

  onSelectUser(id:string){
    this.selecteUserId=id;
  }


}
