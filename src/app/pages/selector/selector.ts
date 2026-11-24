import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  selector: 'app-selector',
  styleUrl: './selector.scss',
  templateUrl: './selector.html',
})
export class Selector {}
