import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { reference } from '@angular/core/src/render3';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  value:string;
  para_mostrar:string;
  constructor(private nativeStorage: NativeStorage) { }

  ngOnInit() {
  }
  save(){
    this.value = this.value + " acero ";
    this.nativeStorage.setItem('myitem', {property: 'value', value: this.value})
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );
  }
  cargar(){
    this.nativeStorage.getItem('myitem')
  .then(
    data => this.para_mostrar = data,
    error => console.error(error)
  );
  }
}
