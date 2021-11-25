import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {

  }
  showAlert() {
    alert("congratulation!")
  }

  login( username: any,password:any) {
       console.log(username,password);
      this.router.navigateByUrl('dashbord')

  }

  ngOnInit(): void { let obj={
    name: "neetu",
    age: 20,
  
  };
  // for(let key in obj){
  //   console.log(obj[key]);
  // }
  const user={
    name:"neet",
    age:1,
  };
  console.log(Object.keys(user));
  console.log(Object.values(user));

console.log(Object.entries(user));}



}
