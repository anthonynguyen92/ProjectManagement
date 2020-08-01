import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtEmptyLayoutComponent } from './ft-empty-layout.component';

describe('FtEmptyLayoutComponent', () => {
  let component: FtEmptyLayoutComponent;
  let fixture: ComponentFixture<FtEmptyLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtEmptyLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtEmptyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
