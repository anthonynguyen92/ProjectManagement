import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtApplicationLayoutComponent } from './ft-application-layout.component';

describe('FtApplicationLayoutComponent', () => {
  let component: FtApplicationLayoutComponent;
  let fixture: ComponentFixture<FtApplicationLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtApplicationLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtApplicationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
