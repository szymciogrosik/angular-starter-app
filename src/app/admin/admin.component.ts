import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void { }

}
