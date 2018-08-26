import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Super Post';
  posts: Array<any> = [
    {
      title: 'Premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
      ' Proin bibendum ac ante sed dapibus. Sed turpis diam, hendrerit quis enim sit amet, aliquam elementum dolor.',
      loveIts: 5,
      created_at: new Date()
    },
    {
      title: 'Deuxième post',
      content: 'Nullam viverra interdum turpis. ' +
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Troisième post',
      content: 'Curabitur ultrices, ex sit amet ullamcorper efficitur, diam justo semper ex, vel bibendum quam felis a erat.',
      loveIts: -2,
      created_at: new Date()
    }];
}
