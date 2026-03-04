import { Component, inject } from '@angular/core';
import { ComponentService } from '../../../../service/component.service';
import { COMPONENT_CONFIG } from '../../../../model/generic-interface';
import { GenericDetailComponent } from '../../../../common/generic-detail-component/generic-detail-component';

@Component({
  selector: 'app-component-detail',
  imports: [GenericDetailComponent],
  templateUrl: './component-detail.component.html',
  styleUrl: './component-detail.component.scss',
})
export class ComponentDetailComponent {
  config = COMPONENT_CONFIG;
  service = inject(ComponentService)
}
