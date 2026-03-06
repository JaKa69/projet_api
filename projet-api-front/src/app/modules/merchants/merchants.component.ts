import { Component, inject } from '@angular/core';
import { MerchantService } from '../../service/merchant-service';
import { MERCHANT_CONFIG } from '../../model/generic-interface';
import { GenericListComponent } from '../../common/generic-list-component/generic-list-component';

@Component({
  selector: 'app-merchants',
  imports: [GenericListComponent],
  templateUrl: './merchants.component.html',
  styleUrl: './merchants.component.scss',
})
export class MerchantsComponent {
  config = MERCHANT_CONFIG;
  service = inject(MerchantService)
}
