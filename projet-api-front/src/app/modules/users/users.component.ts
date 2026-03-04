import { Component, inject } from '@angular/core';
import { USER_CONFIG } from '../../model/generic-interface';
import { GenericListComponent } from '../../common/generic-list-component/generic-list-component';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-users',
  imports: [GenericListComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  config = USER_CONFIG;
  service = inject(UsersService);
}
