import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input({required:true}) userImg: string = '';
  @Input({required:true}) nameUser: string = '';
  
  navList = ["Home", "TV Shows", "News & Popular", "My List", "Browse by Language"];
}
