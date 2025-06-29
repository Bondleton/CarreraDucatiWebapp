import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego-terminado-screen',
  templateUrl: './juego-terminado-screen.component.html',
  styleUrls: ['./juego-terminado-screen.component.scss']
})
export class JuegoTerminadoScreenComponent {
  public isLoading: boolean = false;

  constructor(
    private router: Router
  ){}

  public irInicio(){
    this.router.navigate(['home']);
  }


  public isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)) {
      return "interior-mobile";
    } else {
      return "interior-normal";
    }
  }



}
