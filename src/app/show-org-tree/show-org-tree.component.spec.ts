import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOrgTreeComponent } from './show-org-tree.component';

describe('ShowOrgTreeComponent', () => {
  let component: ShowOrgTreeComponent;
  let fixture: ComponentFixture<ShowOrgTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOrgTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowOrgTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
