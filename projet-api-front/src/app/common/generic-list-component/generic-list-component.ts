import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { EntityConfig, ITableColumn } from '../../model/generic-interface';
import { Router } from '@angular/router';
import { PDFService } from '../../service/pdfservice';

@Component({
  selector: 'app-generic-list',
  imports: [CommonModule],
  templateUrl: './generic-list-component.html',
  styleUrl: './generic-list-component.scss',
})
export class GenericListComponent {
  @Input() config!: EntityConfig;
  @Input() service!: any;
  @Input() isUpload: boolean = false;
  loading = signal(true);
  items = signal<any[]>([]);
  constructor(private pdfService: PDFService) {}
  private router = inject(Router);
  
  async ngOnInit() {
    const data = await this.service.getAll();

    this.items.set(data);
    this.loading.set(false);
  }

  add() {
    this.router.navigate([this.config.routes.create]);
  }

  edit(id: string) {
    this.router.navigate([`${this.config.routes.edit}/${id}`]);
  }
  
  upload(id: string) {
    this.pdfService.savePdf(id, "TestBed.pdf" );
  }

  async delete(id: string) {
    if (!confirm('Supprimer ?')) return;

    await this.service.delete(id);
    this.items.update(list =>
      list.filter(i => i._id !== id)
    );
  }
}
