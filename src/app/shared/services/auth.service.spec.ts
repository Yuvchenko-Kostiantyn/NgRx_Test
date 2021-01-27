import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let initialState = {
    userData: {
        id: null,
        username: '',
        password: ''
    },
    tasks: [],
    users: [],
}

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({initialState})]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
