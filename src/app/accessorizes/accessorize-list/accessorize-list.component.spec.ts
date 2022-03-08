import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessorizeListComponent } from './accessorize-list.component';

describe('AccessorizeListComponent', () => {
  let component: AccessorizeListComponent;
  let fixture: ComponentFixture<AccessorizeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessorizeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessorizeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
