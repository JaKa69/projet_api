import { Component, inject } from '@angular/core';
import { GenericListComponent } from '../../common/generic-list-component/generic-list-component';
import { CONFIGURATION_CONFIG } from '../../model/generic-interface';
import { ConfigurationService } from '../../service/configuration-service';

@Component({
  selector: 'app-configurations',
  imports: [GenericListComponent],
  templateUrl: './configurations.component.html',
  styleUrl: './configurations.component.scss',
})
export class ConfigurationsComponent {
  config = CONFIGURATION_CONFIG;
  service = inject(ConfigurationService);
}
