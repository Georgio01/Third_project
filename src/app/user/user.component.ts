import { Component, computed, input, Input, } from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.less'
})

export class UserComponent {
  //get imagePath(){
   // return  this.selectedUser.avatar;
  //}

  //@Input({required:true}) avatar!:string ;
  //@Input({required:true}) name!:string;

  avatar=input.required<string>();
  name=input.required<string>();

  imagePath=computed(()=>{
    return this.avatar()
  });

  /*get imagePath(){
    return this.avatar;
  }*/
  onSelectedUser(){
  }


}
