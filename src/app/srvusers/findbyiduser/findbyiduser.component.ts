import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-findbyiduser',
  templateUrl: './findbyiduser.component.html',
  styleUrls: ['./findbyiduser.component.css']
})
export class FindbyiduserComponent implements OnInit {

  user: User = new User();

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("usr"));
  }

}
