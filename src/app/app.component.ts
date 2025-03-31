import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mindr';
  chosen:string = '';
  result:string = '';
  chosenNumber(event: any) {
    if(event.target.value <= 10) {
      this.chosen = 'You have chosen ' + event.target.value + '!';
      if(event.target.value == 1) {
        this.result = 'You are a leader';
      }
      else if(event.target.value == 2) {
        this.result = 'You are a follower';
      }
      else if(event.target.value == 3) {
        this.result = 'You are a thinker';
      }
      else if(event.target.value == 4) {
        this.result = 'You are a doer';
      }
      else if(event.target.value == 5) {
        this.result = 'You are a dreamer';
      }
      else if(event.target.value == 6) {
        this.result = 'You are a planner';
      }
      else if(event.target.value == 7) {
        this.result = 'You are a helper';
      }
      else if(event.target.value == 8) {
        this.result = 'You are a listener';
      }
      else if(event.target.value == 9) {
        this.result = 'You are a talker';
      }
      else if(event.target.value == 10) {
        this.result = 'You are a worker';
      }
    }
    else {
      alert('Please choose a number between 1 and 10');
      window.location.reload();
    }
  }

  restart(){
    window.location.reload();
  }
}
