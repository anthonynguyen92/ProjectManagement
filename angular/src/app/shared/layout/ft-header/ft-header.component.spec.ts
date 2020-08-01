import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtHeaderComponent } from './ft-header.component';

describe('FtHeaderComponent', () => {
  let component: FtHeaderComponent;
  let fixture: ComponentFixture<FtHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
