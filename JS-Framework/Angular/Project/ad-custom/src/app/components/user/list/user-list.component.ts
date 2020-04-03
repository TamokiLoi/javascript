import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(
      private _userService: UserService
  ) { }

  ngOnInit() {
      this.getList();
  }

  getList() {
      this._userService.getList().subscribe((res) => {
        //   console.log(res)
      })
  }

}
