import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void { let arr=[2,4,5,6]
   arr.forEach(element => {
     console.log(arr);
     
   });
  }
nextPage(){
  this.router.navigateByUrl("nextPage");
}
dashbord(){
  this.router.navigateByUrl("dashbord");
}
}
