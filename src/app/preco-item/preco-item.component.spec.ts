import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecoItemComponent } from './preco-item.component';

describe('PrecoItemComponent', () => {
  let component: PrecoItemComponent;
  let fixture: ComponentFixture<PrecoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
