import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantsDetail } from './merchants-detail';

describe('MerchantsDetail', () => {
  let component: MerchantsDetail;
  let fixture: ComponentFixture<MerchantsDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchantsDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantsDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
