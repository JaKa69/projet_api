import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  loading = false;

  constructor(private auth: AuthService, private router: Router) {}

  async onSubmit() {
    this.error = '';
    this.loading = true;

    try {
      const user = await this.auth.login(this.email, this.password);

      if (user.role === 'admin') {
        this.router.navigate(['/users']);
      } else {
        this.router.navigate(['/configurations']);
      }

    } catch (err: any) {
      this.error = err?.error?.message || 'Erreur de connexion';
    } finally {
      this.loading = false;
    }
  }
}