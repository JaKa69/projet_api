import { Component, inject } from '@angular/core';
import { GenericDetailComponent } from '../../../common/generic-detail-component/generic-detail-component';
import { CATEGORY_CONFIG } from '../../../model/generic-interface';
import { CategoryService } from '../../../service/category-service';

@Component({
  selector: 'app-category-detail',
  imports: [GenericDetailComponent],
  templateUrl: './category-detail.html',
  styleUrl: './category-detail.scss',
})
export class CategoryDetail {
  config = CATEGORY_CONFIG;
  service = inject(CategoryService)
}
