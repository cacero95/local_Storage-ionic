import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  slideOpts = {
    effect: 'flip'
  };

  slides:any[] = [
    {
      title: "Bienvenido!!!",
      description: "Esta <b>aplicación</b> nos ayudará a comprender muchos temas interesantes en ionic!",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "¿Qué es ionic?",
      description: "<b>Ionic Framework</b> es un SDK abierto que le permite a los desarrolladores crear aplicaciones móviles de alta calidad con el conocimiento de JavaScript, CSS y HTML.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "¿Que hace esta app?",
      description: "Esta aplicación nos ayudará a conocer más sobre el ciclo de vida de un componente y el storage!",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];
  
  numero:number = 0;
  constructor() { }
  items:Observable<number>;
  ngOnInit() {
    this.items = new Observable(observer => {
      observer.next(this.numero);
  });
  
  }
  cambiar_numero(number){
    this.numero = Math.random();
    this.items.subscribe((data)=>{
      console.log(data);
    })
    
  }

}
