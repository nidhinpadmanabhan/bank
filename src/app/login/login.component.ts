import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data="YOUR PERFECT BANKING PARTNER"

  placeHolderData="Enter account number"

  uname:any
  psw:any
  
  consructor(){ }
  ngOnInit(): void {

  }

  login(){
  console.log(this.uname,this.psw);
  
  }
  

}
