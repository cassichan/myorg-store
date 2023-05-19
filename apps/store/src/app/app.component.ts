import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { NxWelcomeComponent } from './nx-welcome.component';
import { exampleProducts } from '@myorg/products';

@Component({
  standalone: true,
  // imports: [NxWelcomeComponent, RouterModule],
  selector: 'myorg-root',
  template: `<myorg-banner title="Welcome to the store!"></myorg-banner>
    <ul>
      <li *ngFor="let product of products">
        <strong>{{ product.name }}</strong> Price: {{ product.price }}
      </li>
    </ul> `,
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products = exampleProducts;
}
