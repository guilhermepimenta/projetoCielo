import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { SumaryComponent } from './sumary.component';

describe('SumaryComponent', () => {
  let component: SumaryComponent;
  let fixture: ComponentFixture<SumaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumaryComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create FUNCIONANDO', () => {
    expect(SumaryComponent).toBeTruthy();
  });
});
