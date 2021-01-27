import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let service: TasksService;
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
    service = TestBed.inject(TasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
