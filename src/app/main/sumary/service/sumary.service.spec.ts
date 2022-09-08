import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

import {HttpClient} from "@angular/common/http";
import { SumaryService } from './sumary.service';


describe('Sumary Service', () => {
  let sumaryService: SumaryService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
      const spy = jasmine.createSpyObj('Summary Service', ['listarSummary'])

      await TestBed.configureTestingModule({
          imports: [HttpClientTestingModule, RouterTestingModule],
          providers: [{provide: sumaryService, useValue: spy}],
      });

      sumaryService = TestBed.inject(SumaryService);
      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
      // After every test, assert that there are no more pending requests.
      httpTestingController.verify();
  });

  it('should be created FUNCIONANDO', () => {
    expect(sumaryService).toBeTruthy();
  });

});