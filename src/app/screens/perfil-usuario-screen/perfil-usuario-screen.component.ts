import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil-usuario-screen',
  templateUrl: './perfil-usuario-screen.component.html',
  styleUrls: ['./perfil-usuario-screen.component.scss']
})
export class PerfilUsuarioScreenComponent implements OnInit {

  // editando: boolean = false;
  editando = false;

  perfil = {
    nombre: '',
    correo: '',
    telefono: '',
    ciudad: '',
    universidad: ''
  };

  constructor(

  ) { }

  ngOnInit(): void {
    const dataGuardada = localStorage.getItem('perfilUsuario');
    if (dataGuardada) {
      this.perfil = JSON.parse(dataGuardada);
    } else {
      // Datos por defecto
      this.perfil = {
        nombre: 'Scarlett Itzel Xochicale Flores',
        correo: 'itzelf182@gmail.com',
        telefono: '+52 22 26 52 17 52',
        ciudad: 'Puebla, México',
        universidad: 'BUAP'
      };
    }
  }

  toggleEdicion(): void {
    this.editando = !this.editando;

    // Si se acaba de desactivar la edición, guardamos
    if (!this.editando) {
      this.guardarPerfil();
    }
  }

  guardarPerfil(): void {
    localStorage.setItem('perfilUsuario', JSON.stringify(this.perfil));
  }

  public isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)) {
      return "interior-mobile";
    } else {
      return "interior-normal";
    }
  }

}
