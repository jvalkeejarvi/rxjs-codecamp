import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public readonly searchString = new FormControl('jeejee');

  public constructor() {
    this.searchString.valueChanges
      .pipe(
        // TODO: Use debounce, distinct and filter operators
      )
      .subscribe(value => {
        console.log(value);
      });
  }

  public click() {
    // TODO: Do something
  }
}
