import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from '../home/home';

@Component({
  imports: [CommonModule, Home],
  selector: 'app-prueba',
  styleUrl: './prueba.scss',
  templateUrl: './prueba.html',
})
export class Prueba {}
