import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtAccountLayoutComponent } from './ft-account-layout.component';

describe('FtAccountLayoutComponent', () => {
  let component: FtAccountLayoutComponent;
  let fixture: ComponentFixture<FtAccountLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtAccountLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtAccountLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
