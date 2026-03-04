import { Component, inject } from '@angular/core';
import { CATEGORY_CONFIG } from '../../model/generic-interface';
import { GenericListComponent } from '../../common/generic-list-component/generic-list-component';
import { CategoryService } from '../../service/category-service';

@Component({
  selector: 'app-category',
  imports: [GenericListComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  config = CATEGORY_CONFIG;
  service = inject(CategoryService);
}
