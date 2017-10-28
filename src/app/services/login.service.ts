
import { Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Lesson} from '../models/lesson';
@Injectable()

export class LoginService{
  loggedIn: boolean;
  userName: string;
  name: string;
  userType: string;
  mode: number;
  userID: string;
  role: string[];
  chosenLesson: Lesson;
  constructor(private _router:Router){

  }
  getUserID(){
    return this.userID;
  }
  getUserName(){
    return this.userName;
  }
  getName(){
    return this.name;
  }
  getUserType(){
    return this.userType;
  }
  getMode(){
    return this.mode;
  }
  setUserID(id:string){
    this.userID=id;
  }
  setUserRole(role:string[]){
    this.role=role;
    console.log(role);
  }
  setUsername(username:string){
    this.userName=username;

  }
  setUserType(userType:string){
    this.userType=userType;

  }
  setMode(mode:number){
    this.mode=mode;
  }
  setChosenLesson(lesson:Lesson){
    this.chosenLesson=lesson;
  }
  getChosenLesson(){
    return this.chosenLesson;
  }
  checkLoggedIn(){
    if(!this.loggedIn){
      this._router.navigate(['./login']);
    };
  }
  isAdmin(){
    console.log(this.role);
    for (var i=0;i<this.role.length;i++)
      if (this.role[i]=="admin")
        return true;
      return false;
  }
}
