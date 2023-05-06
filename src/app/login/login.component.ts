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

  login(a:any,b:any){
    // console.log(a.value,b.value);
    
    this.uname=a.value
    this.psw=b.value
    console.log(this.uname,this.psw);
    
    alert("login button clicked")
  }
  

}
