import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlurpmbPage } from './alurpmb.page';

describe('AlurpmbPage', () => {
  let component: AlurpmbPage;
  let fixture: ComponentFixture<AlurpmbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlurpmbPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlurpmbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
