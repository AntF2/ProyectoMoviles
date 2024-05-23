import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoproductosComponent } from './infoproductos.component';

describe('InfoproductosComponent', () => {
  let component: InfoproductosComponent;
  let fixture: ComponentFixture<InfoproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoproductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
