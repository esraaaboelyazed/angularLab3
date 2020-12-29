import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BooksService} from '../service/books.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
data:any;
currentVal:string ="";
  constructor(private router: Router, private BooksService: BooksService) { }

  ngOnInit(): void {
    this.BooksService.getBooksList().subscribe({
      next: (data) => {
           console.log('success: ', data);
           this.data = data.items;
         console.log(this.data = data.items);
  },
  error : (msg) => {
    console.log('error:',msg);
  },
    });
    
  
}
getbook(){
  if(this.currentVal != ""){
    this.data = this.data.filter(result=>{
      return result.volumInfo.title.toLocaleLowerCase().match(this.currentVal.toLocaleLowerCase());
    })
  }
}
}