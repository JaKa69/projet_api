import { Component, inject } from '@angular/core';
import { CONFIGURATION_CONFIG } from '../../../model/generic-interface';
import { ConfigurationService } from '../../../service/configuration-service';
import { GenericDetailComponent } from '../../../common/generic-detail-component/generic-detail-component';

@Component({
  selector: 'app-configuration-detail',
  imports: [GenericDetailComponent],
  templateUrl: './configuration-detail.html',
  styleUrl: './configuration-detail.scss',
})
export class ConfigurationDetail {
  config = CONFIGURATION_CONFIG;
  service = inject(ConfigurationService)
}
