import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetalhesComponent } from './item-detalhes.component';

describe('ItemDetalhesComponent', () => {
  let component: ItemDetalhesComponent;
  let fixture: ComponentFixture<ItemDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
