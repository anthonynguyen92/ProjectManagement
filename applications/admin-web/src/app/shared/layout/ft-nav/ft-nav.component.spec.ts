import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtNavComponent } from './ft-nav.component';

describe('FtNavComponent', () => {
  let component: FtNavComponent;
  let fixture: ComponentFixture<FtNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
