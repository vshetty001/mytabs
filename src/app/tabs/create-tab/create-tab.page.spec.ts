import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateTabPage } from './create-tab.page';

describe('CreateTabPage', () => {
  let component: CreateTabPage;
  let fixture: ComponentFixture<CreateTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
