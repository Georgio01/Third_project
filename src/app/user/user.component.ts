import { Component, computed, input, Input, Output,EventEmitter, output } from '@angular/core';
import {type  User } from './user.model';
import { CardComponent } from '../shared/card/card.component';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.less'
})

export class UserComponent {
  //get imagePath(){
    //return  this.selectedUser.avatar;
  //}

  @Input({required:true}) user!:User;
  @Input({required:true})selected!:boolean;
  @Output()select=new EventEmitter<string>();

  /*@Input({required:true}) id!:string
  @Input({required:true}) avatar!:string ;
  @Input({required:true}) name!:string;*/
  //select=output<string>();

  get imagePath(){
    return this.user.avatar;
  }
  onSelectedUser(){
   this.select.emit(this.user.id);
  }



  //avatar=input.required<string>();
  //name=input.required<string>();

  /*imagePath=computed(()=>{
    return this.avatar;
  });*/

  

}
