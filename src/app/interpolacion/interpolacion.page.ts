import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.page.html',
  styleUrls: ['./interpolacion.page.scss'],
})
export class InterpolacionPage implements OnInit {
  
  constructor(private router: Router) { }

  direccion = 'Los Leones 739, Puerto Montt'
  nombre = 'Diego'
  apellido = 'Sanchez'

  persona ={
    direccion: 'Egaña #1234. Puerto Montt',
    nombre: 'Nicolas Carcamo'
  }

  sumar(n1:number, n2:number){
    return n1+n2;
  }

  duplicar(palabra:string){
    return palabra+' '+palabra;
  }  

  irLogin(){
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
