import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/services/auth.service';
import { AccessorizeListComponent } from './accessorize-list.component';

class MockUserService {
  isLoggedIn = true;
  user = { email: 'hi@gmail.com', password: 'merhaba'};
}

describe('AccessorizeListComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessorizeListComponent],
      providers: [
        AccessorizeListComponent,
        { provide: AuthService, useClass: MockUserService }
      ],

    });
    
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(AccessorizeListComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })

  it('should use the user name from the authservice', () => {
    let fixture = TestBed.createComponent(AccessorizeListComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })
});