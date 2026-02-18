import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  public users:any[] = []; 
  constructor(
    public usersService: UsersService
  ) {}

  async ngOnInit() {
    this.users = await this.usersService.getUsers();
  }
}
