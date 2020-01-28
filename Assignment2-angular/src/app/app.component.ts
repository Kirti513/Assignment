import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment2-angular';

  storedPosts = [];

  onPostAdded(item) {
    this.storedPosts.push(item);
  }
}
