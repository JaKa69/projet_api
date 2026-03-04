import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  authService = inject(AuthService);
  router = inject(Router);
  menuItems = [
    { label: 'Catégories', path: '/categories' },
    { label: 'Composants', path: '/components' },
    { label: 'Utilisateurs', path: '/users' },
    { label: 'Marchands', path: '/merchants' },
    { label: 'Configurations', path: '/configurations' },
  ];

  get connectedName(): string {
    return this.authService.getConnectedName();
  }
  navigate(path: string) {
    this.router.navigate([path]);
  }

  logout() {
    this.authService.logout();
    this.navigate('/login');
  }
}
