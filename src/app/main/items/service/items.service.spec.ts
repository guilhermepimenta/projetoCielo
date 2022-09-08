import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

import {HttpClient} from "@angular/common/http";
import { ItemsService } from './items.service';

describe('ItemsService', () => {
  let itemsService: ItemsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
      const spy = jasmine.createSpyObj('ItemsService', ['listarItems'])

      await TestBed.configureTestingModule({
          imports: [HttpClientTestingModule, RouterTestingModule],
          providers: [{provide: ItemsService, useValue: spy}],
      });

      itemsService = TestBed.inject(ItemsService);
      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
      // After every test, assert that there are no more pending requests.
      httpTestingController.verify();
  });

  it('should be created FUNCIONANDO', () => {
    expect(itemsService).toBeTruthy();
  });

});