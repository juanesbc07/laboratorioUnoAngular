import { Component} from '@angular/core';
import {VideojuegosService} from "../../services/videojuegos.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent {

  videojuego: any = {};
  constructor( private _videojuegosService: VideojuegosService,
               private activatedRoute: ActivatedRoute){

                    this.activatedRoute.params.subscribe( params => {
                      this.videojuego = this._videojuegosService.getVideojuego
                      (params['id']);
                    });
    }
}
