import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoituresComponent } from './voitures.component';

describe('VoituresComponent', () => {
  let component: VoituresComponent;
  let fixture: ComponentFixture<VoituresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoituresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
