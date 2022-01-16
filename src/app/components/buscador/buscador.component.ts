import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {VideojuegosService} from "../../services/videojuegos.service";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  videojuegos: any [] = [];
  termino: string='';



  constructor( private activatedRoute: ActivatedRoute,
               private _videojuegosService: VideojuegosService,
                private router: Router) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params =>{
      this.termino = params['termino'];
      this.videojuegos = this._videojuegosService.buscarVideojuegos(
        params['termino']);
        console.log( this.videojuegos);
    });
  }

  verVideojuego( idx: number){
    this.router.navigate(['/videojuego/',idx]);
  }
}
