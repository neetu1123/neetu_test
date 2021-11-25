import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.css']
})
export class NextPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    let arr=[2,3,4,5] 
      arr.forEach(element => {
        console.log(element);
        function isOdd(x:any){
          return x%2;
        }
        function isEven(x:any){
          return x%2==0;
        }
        const out=arr.filter(isEven);
        const output=arr.filter(isOdd);
        console.log(output);
        console.log(out);
        const oup=arr.reduce(function(acc,curre){
          acc=acc+curre;
          return acc;
        },0);
        console.log(oup);
        function double(x:any){
          return x*2;
        } const ou=arr.map(double);
                console.log(ou);
          })
        };

      
    
  
about(){
  this.router.navigateByUrl("about");
}
}
