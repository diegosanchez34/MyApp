import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = '';
  clave = '';

  constructor(private alertController: AlertController, private router: Router) { }

  async Alerta() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Nombre de usuario invalido',
      buttons: ['Cerrar'],
    });

    await alert.present();
  }

  verificar(){
    if (this.usuario.length >= 3 && this.usuario.length  <= 25) {
      this.enviarDatos();
      this.irHome();
    }
    else {
      this.Alerta();
    }    
  }

  irHome(){
    this.router.navigate(['/home']);
  }

  enviarDatos(){
    localStorage.setItem("user", this.usuario);
  }

  ngOnInit() {
    console.log('Se cargó el ngOnInit');
  }

  ionViewWillEnter(){
    console.log('Se cargó ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('Se cargó ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('Se cargó ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('Se cargó ionViewDidLeave');
  }

  ngOnDestroy(){
    console.log('Se cargó ngOnDestroy');
  }
}
