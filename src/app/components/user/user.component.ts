
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log('UserComponent: Init.');
    const name = 'octocat';
    this.getUser(name);
  }

  getUser(name: string){
    this.userService.getUser(name).subscribe((user: User) => {
      this.user = user;
    });
  }

}
