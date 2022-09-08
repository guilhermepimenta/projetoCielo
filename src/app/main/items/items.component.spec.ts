import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { ItemsComponent } from './items.component';

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create FUNCIONANDO', () => {
    expect(component).toBeTruthy();
  });

});


