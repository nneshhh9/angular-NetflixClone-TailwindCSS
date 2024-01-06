declare var google: any;
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private router = inject(Router);

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '109116864397-g3vsgok6o2ed4ep4k17enrelovtqlbv6.apps.googleusercontent.com',
      callback: (resp: any) => this.handleLogin(resp)
    });

    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350
    });
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split(".")[1]));
  }

  handleLogin(response: any) {
    if (response) {
      //decode the token
      const payLoad = this.decodeToken(response.credential);

      //store in session
      sessionStorage.setItem("loggedInUser", JSON.stringify(payLoad));

      //navigate to home/browse
      this.router.navigate(['browse']);
    }
  }
}
