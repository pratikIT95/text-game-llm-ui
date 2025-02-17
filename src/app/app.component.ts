import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameViewComponent } from "./game-view/game-view.component";
import * as uuid from 'uuid';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GameViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    sessionStorage.removeItem('sessionUuid');
  }
  ngOnInit(): void {
    sessionStorage.setItem('sessionUuid', uuid.v4());
  }
}
