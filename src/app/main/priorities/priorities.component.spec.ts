import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioritiesComponent } from './priorities.component';

describe('ProfileComponent', () => {
    let component: PrioritiesComponent;
    let fixture: ComponentFixture<PrioritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [PrioritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(PrioritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
