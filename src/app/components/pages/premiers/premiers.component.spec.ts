import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiersComponent } from './premiers.component';

describe('PremiersComponent', () => {
  let component: PremiersComponent;
  let fixture: ComponentFixture<PremiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
