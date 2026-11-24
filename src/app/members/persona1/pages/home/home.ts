import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { inject, PLATFORM_ID } from '@angular/core';

import { DataService } from '../../../../core/services/data.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home implements OnInit {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    if (!this.isBrowser) {
      return;
    }

    this.dataService.get('movie/popular', { language: 'es-ES', page: 1 }).subscribe({
      next: (response) => console.log('Películas populares:', response),
      error: (error: unknown) =>
        console.error('No se pudieron cargar las películas populares:', error),
    });
  }
}
