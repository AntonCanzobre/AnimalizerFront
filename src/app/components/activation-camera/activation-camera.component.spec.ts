import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ActivationCameraComponent } from './activation-camera.component';

describe('ActivationCameraComponent', () => {
  let component: ActivationCameraComponent;
  let fixture: ComponentFixture<ActivationCameraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ActivationCameraComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActivationCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
