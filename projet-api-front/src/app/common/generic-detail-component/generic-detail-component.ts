import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-generic-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './generic-detail-component.html',
  styleUrl: './generic-detail-component.scss',
})
export class GenericDetailComponent {
  @Input() config!: any;
  @Input() service!: any;

  item: any = {};
  isNew = true;
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isNew = false;
      this.item = await this.service.getById(id);
    }
  }

  async save() {

    if (this.isNew)
      await this.service.create(this.item);
    else
      await this.service.update(this.item._id, this.item);

    this.router.navigate([this.config.routes.list]);
  }

  cancel() {
    this.router.navigate([this.config.routes.list]);
  }
}
