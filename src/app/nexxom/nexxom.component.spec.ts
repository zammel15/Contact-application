import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NexxomComponent } from './nexxom.component';

describe('NexxomComponent', () => {
  let component: NexxomComponent;
  let fixture: ComponentFixture<NexxomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NexxomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NexxomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
