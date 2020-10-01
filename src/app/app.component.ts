import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CYRIL JOY';
  firstNumber = 0;
  secondNumber = 0;
  total = 0;
  submitbutton () {
    this.title = 'JIJO';
    console.log('this.firstNumber' + this.firstNumber);
    console.log('this.secondNumber' + this.secondNumber);
    console.log('this.total' + this.total);
   this.total = this.firstNumber + this.secondNumber;
   console.log('this.total' + this.total);
}

}
