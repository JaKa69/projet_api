import { Component, inject } from '@angular/core';
import { ComponentService } from '../../service/component.service';
import { COMPONENT_CONFIG } from '../../model/generic-interface';
import { GenericListComponent } from '../../common/generic-list-component/generic-list-component';

@Component({
  selector: 'app-components',
  imports: [GenericListComponent],
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent {
  config = COMPONENT_CONFIG;
  service = inject(ComponentService);
}
