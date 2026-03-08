import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Card} from './components/card/card'
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Card], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('ng-crud-card');
}
