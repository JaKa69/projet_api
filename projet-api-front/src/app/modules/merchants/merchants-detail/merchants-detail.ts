import { Component, inject } from '@angular/core';
import { GenericDetailComponent } from '../../../common/generic-detail-component/generic-detail-component';

@Component({
  selector: 'app-merchants-detail',
  imports: [GenericDetailComponent],
  templateUrl: './merchants-detail.html',
  styleUrl: './merchants-detail.scss',
})
export class MerchantsDetail {
  // config = MERCHANT_CONFIG;
  // service = inject(MerchantService)
}
