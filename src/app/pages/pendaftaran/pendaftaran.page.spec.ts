import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendaftaranPage } from './pendaftaran.page';

describe('PendaftaranPage', () => {
  let component: PendaftaranPage;
  let fixture: ComponentFixture<PendaftaranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendaftaranPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendaftaranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
