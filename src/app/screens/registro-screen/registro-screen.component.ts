import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var $: any;

@Component({
  selector: 'app-registro-screen',
  standalone: false,
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss']
})
export class RegistroScreenComponent implements OnInit {
  public user: any = {};
  public errors: any = {};

  //Para contraseña
  public hide_1: boolean = false;
  public inputType_1: string = 'password';

  //Para las edades
  public selectedValue: string = "";
  public edades: any[] = [];

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.usuariosService.esquemaUser();
    this.llenarArrayEdades();

    console.log("Datos usuario: ", this.user);

  }

  public llenarArrayEdades() {
    for (let i = 18; i <= 80; i++) {
      this.edades.push({ value: i });
    }
  }

  // public registrar() {
  //   //Validar
  //   this.errors = [];

  //   this.errors = this.usuariosService.validarUsuario(this.user);
  //   if (!$.isEmptyObject(this.errors)) {
  //     return false;
  //   }
  //   console.log("Pasó la validación");

  //   //Aquí va a registrar
  //   if (this.user.terminos_condiciones) {
  //     alert("Puedes registrar un usuario");
  //   } else {
  //     alert("Debes aceptar los términos y condiciones");
  //   }
  // }

  public registrar(): false | true {
    this.errors = [];

    this.errors = this.usuariosService.validarUsuario(this.user);
    if (!$.isEmptyObject(this.errors)) {
      return false;
    }

    console.log("Pasó la validación");

    if (this.user.terminos_condiciones) {
      alert("Puedes registrar un usuario");
      return true;
    } else {
      alert("Debes aceptar los términos y condiciones");
      return false;
    }
  }


  public goLogin() {
    this.router.navigate(["/"]);
  }

  public terminosCondiciones() {
    this.router.navigate(["terminos"]);

  }

  showPassword() {
    if (this.inputType_1 == 'password') {
      this.inputType_1 = 'text';
      this.hide_1 = true;
    }
    else {
      this.inputType_1 = 'password';
      this.hide_1 = false;
    }
  }

  public soloLetras(event: KeyboardEvent) {
    const charCode = event.key.charCodeAt(0);
    // Permitir solo letras (mayúsculas y minúsculas) y espacio
    if (
      !(charCode >= 65 && charCode <= 90) &&  // Letras mayúsculas
      !(charCode >= 97 && charCode <= 122) && // Letras minúsculas
      charCode !== 32                         // Espacio
    ) {
      event.preventDefault();
    }
  }

  public isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)) {
      return true;
    } else {
      return false;
    }
  }


}
