import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { SrvcrudusersService } from '../srvcrudusers.service';

@Component({
  selector: 'app-findallusers',
  templateUrl: './findallusers.component.html',
  styleUrls: ['./findallusers.component.css']
})
export class FindallusersComponent implements OnInit {

  MyList: Array<User>;

  constructor(private srv: SrvcrudusersService) { }

  ngOnInit(): void {
    this.srv.getInfos();
    this.MyList = JSON.parse(sessionStorage.getItem("lst"));
  }

}
