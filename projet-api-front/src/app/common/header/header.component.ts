import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
menuItems = [
    { label: 'Catégories', path: '/categories' },
    { label: 'Composants', path: '/components' },
    { label: 'Utilisateurs', path: '/users' },
    { label: 'Marchands', path: '/merchants' },
    { label: 'Configurations', path: '/configurations' },
  ];

  constructor(
    private router: Router,
    public authService: AuthService,
    private usersService: UsersService
  ) {}
  get isLoggedIn(): boolean {
    return !!this.authService.user();
  }
  navigate(path: string) {
    this.router.navigate([path]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
