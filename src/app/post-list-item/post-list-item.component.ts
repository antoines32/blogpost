import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent {
  @Input()
  post: any
  onLike() {
    this.post.loveIts ++;
  }
  onDislike() {
    this.post.loveIts --;
  }
  constructor() {
  }
}
