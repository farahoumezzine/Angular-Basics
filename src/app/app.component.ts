import { Component } from '@angular/core';
import { PersoDirective } from './perso.directive';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My Angular App';
  message = 'Welcome to Angular!';

  getCurrentYear() {
    return new Date().getFullYear();
  }


  ImageURL="https://miro.medium.com/v2/resize:fit:1200/1*lhfGTouqSQ-fx7PRXaFI-Q.png"
  titleStyle="color:red";


  clickCount = 0;

  incrementCount() {
    this.clickCount++;
  }

  resetCount() {
    this.clickCount = 0;
  }

  userInput: string = '';

  onInputChange() {
    console.log('User input changed:', this.userInput);
  }


  listItems: string[] = ['Item 1', 'Item 2', 'Item 3'];

  otherinput : string = "";

  term: string = '';
}

  
