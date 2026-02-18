import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantsComponent } from './merchants.component';

describe('MerchantsComponent', () => {
  let component: MerchantsComponent;
  let fixture: ComponentFixture<MerchantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
