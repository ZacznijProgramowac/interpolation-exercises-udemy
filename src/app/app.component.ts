import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ćwiczenia';
  num1 = 40;
  num2 = '4';
  falsity = false;

  dog = {
    name: 'Blacky',
    age: 4,
    color: 'czarny',
  };

  // pól private nie wyświetlamy, jest to pole do gettera randomBoolean
  private booleans = [true, false];

  quotation1(): string {
    return 'Życia nie można wybrać, ale można z niego coś zrobić. - Peter Lippert';
  }

  get quotation2(): string {
    return 'Bądź dobrej myśli, bo po co być złej. - Stanisław Lem';
  }

  // losuje true lub false z pola booleans
  get randomBoolean(): boolean {
    return this.booleans[Math.round(Math.random())];
  }

  divider() {
    return 3;
  }
}
