import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarLibraryComponent } from './star-library.component';

describe('StarLibraryComponent', () => {
  let component: StarLibraryComponent;
  let fixture: ComponentFixture<StarLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
