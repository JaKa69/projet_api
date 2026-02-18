import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentService } from '../../../../service/component.service';

@Component({
  selector: 'app-component-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './component-detail.component.html',
  styleUrl: './component-detail.component.scss',
})
export class ComponentDetailComponent {
component: any = {};
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private componentService: ComponentService
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.component = await this.componentService.getComponent(id);
    }
  }

  async save() {
    if (this.isEdit) {
      await this.componentService.updateComponent(this.component.id, this.component);
    } else {
      await this.componentService.createComponent(this.component);
    }
    this.router.navigate(['/components']);
  }

  cancel() {
    this.router.navigate(['/components']);
  }
}
