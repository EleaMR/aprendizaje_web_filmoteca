import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DataService } from '../../../../core/services/data.service';
import { Home } from './home';
import { vi } from 'vitest';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;
  let get: ReturnType<typeof vi.fn>;

  beforeEach(async () => {
    get = vi.fn().mockReturnValue(of({ results: [] }));

    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [{ provide: DataService, useValue: { get } }],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should request popular movies in Spanish', () => {
    expect(get).toHaveBeenCalledWith('movie/popular', {
      language: 'es-ES',
      page: 1,
    });
  });
});
