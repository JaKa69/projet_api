import { Component } from '@angular/core';
import { ComponentService } from '../../service/component.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent {
  public components: any[] = []; 

  constructor(
    public componentService: ComponentService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.components = await this.componentService.getComponents();
  }

  goToAdd() {
    this.router.navigate(['/components/add']);
  }

  goToEdit(id: string) {
    this.router.navigate(['/components', id]);
  }
}
