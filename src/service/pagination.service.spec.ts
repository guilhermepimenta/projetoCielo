import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

import {HttpClient} from "@angular/common/http";
import { PaginationService } from './pagination.service';

describe('Pagination Service', () => {
  let paginationService: PaginationService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
      const spy = jasmine.createSpyObj('Pagination Service', ['listarPagination'])

      await TestBed.configureTestingModule({
          imports: [HttpClientTestingModule, RouterTestingModule],
          providers: [{provide: paginationService, useValue: spy}],
      });

      paginationService = TestBed.inject(PaginationService);
      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
      // After every test, assert that there are no more pending requests.
      httpTestingController.verify();
  });

  it('should be created FUNCIONANDO', () => {
    expect(paginationService).toBeTruthy();
  });

});
