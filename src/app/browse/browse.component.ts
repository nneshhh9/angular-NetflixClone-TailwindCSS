import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent {
  auth = inject(AuthService);
  nameUser = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  emailUser = JSON.parse(sessionStorage.getItem("loggedInUser")!).email;
  profileUserImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;

  signOut() {
    sessionStorage.removeItem("loggedInUser");
    this.auth.singOut();
  }
}
