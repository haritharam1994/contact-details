import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {
  allusers:any[]=[]

  constructor(private Api:ApiService){

  }
  ngOnInit(): void {
    this.Api.getAlldetails().subscribe((data:any)=>{
      console.log(data);
      this.allusers=data.users;
    })
    
  }

}
