import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, NgIf, RouterLink],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  titulo: string = 'Home';
  array: number[] = [1, 2, 3, 4, 5];
}
