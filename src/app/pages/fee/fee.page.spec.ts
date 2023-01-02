import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeePage } from './fee.page';

describe('FeePage', () => {
  let component: FeePage;
  let fixture: ComponentFixture<FeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
