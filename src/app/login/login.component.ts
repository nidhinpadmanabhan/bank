import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data="YOUR PERFECT BANKING PARTNER"

  placeHolderData="Enter account number"
  
  consructor(){ }
  ngOnInit(): void {

  }

  login(){
    alert("login button clicked")

  }
  unameChange(event:any){
    console.log(event.target.value);
    
  }
}
