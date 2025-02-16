import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import { StoryService } from '../story.service';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-game-view',
  imports: [MatCardModule,MatChipsModule,MatProgressBarModule,MatCardModule,MatIconModule,MatProgressSpinnerModule],
  templateUrl: './game-view.component.html',
  styleUrl: './game-view.component.scss',
  providers: [StoryService],
})
export class GameViewComponent {
  userId: string = 'user123'; // Replace with actual user ID or get it dynamically
  storyResponse: any;
  choices: string[] = [];
  isStoryStarted: boolean = false;
  isStoryEnded: boolean = false;
  isLoading : boolean = false;

  constructor(private storyService: StoryService) { }

  startGame() {
    this.isLoading = true;
    this.storyService.startGame(this.userId).subscribe(response => {
      this.isStoryStarted = true;
      this.storyResponse = response;
      this.choices = response.choices; // Assuming the response has a 'choices' field
      this.isStoryEnded = response.isEnding;
      this.isLoading = false;
    });
    
  }

  makeChoice(choice: string) {
    this.isLoading = true;
    this.storyService.continueGame(this.userId, choice).subscribe(response => {
      this.storyResponse = response;
      this.choices = response.choices;
      this.isStoryStarted = !response.isEnding;
      if (response.isEnding) {
        this.choices = []; // Clear choices if the story has ended
      }
      this.isStoryEnded = response.isEnding;
      this.isLoading = false;
    });
  }
}
