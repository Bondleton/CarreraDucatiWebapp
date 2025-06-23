import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-app',
  standalone: false,
  templateUrl: './footer-app.component.html',
  styleUrls: ['./footer-app.component.scss']
})
export class FooterAppComponent implements OnInit {
  @Input() pantalla: string = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  public terminosCondiciones() {
    this.router.navigate(["terminos"]);

  }

  public avisoPrivacidad() {
    this.router.navigate(["politica"]);

  }

}
