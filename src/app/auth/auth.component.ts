import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authSattus: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authSattus = this.authService.isAuth;
  }
  onSignOn(){
    this.authService.singnIn().then(
      () => {
        console.log('Connexion reussie !');
        this.authSattus =this.authService.isAuth;
        this.router.navigate(['appareils']);
      }
    );
  }

  onSignOut(){
    this.authService.signOut();
    this.authSattus =this.authService.isAuth;

  }
}
