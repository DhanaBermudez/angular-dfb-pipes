import { Component, VERSION } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipe-react';
  presentDate = new Date();
  todayO$ = new Observable<Date>((observer) => {
    setInterval(() => {
      observer.next(new Date());
    }, 1000);
  });
  price: number = 2000;
  Fruits = ['Apple', 'Orange', 'Grapes', 'Mango', 'Kiwi', 'Pomegranate'];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
}
