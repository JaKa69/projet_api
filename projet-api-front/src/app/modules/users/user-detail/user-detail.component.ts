import { Component, inject } from '@angular/core';
import { USER_CONFIG } from '../../../model/generic-interface';
import { GenericDetailComponent } from '../../../common/generic-detail-component/generic-detail-component';
import { UsersService } from '../../../service/users.service';

@Component({
  selector: 'app-user-detail',
  imports: [GenericDetailComponent],
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent {
  config = USER_CONFIG;
  service = inject(UsersService)
}
