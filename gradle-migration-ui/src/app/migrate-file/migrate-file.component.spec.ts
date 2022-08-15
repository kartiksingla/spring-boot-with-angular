import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrateFileComponent } from './migrate-file.component';

describe('MigrateFileComponent', () => {
  let component: MigrateFileComponent;
  let fixture: ComponentFixture<MigrateFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigrateFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MigrateFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
