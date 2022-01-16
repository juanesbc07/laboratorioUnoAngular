import { Component, OnInit } from '@angular/core';
import {VideojuegosService, VideoJuego} from '../../services/videojuegos.service';
import {Router} from '@angular/router';
//import {VideoJuego} from "../../models/videojuego.model";

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html'
})

export class VideojuegosComponent implements OnInit {

  videojuegos: VideoJuego[] = [];

  constructor(private _videojuegosService: VideojuegosService, private router: Router) { }

  ngOnInit(): void {

    this.videojuegos = this._videojuegosService.getVideojuegos();
  }

  verVideojuego( idx: number){
    this.router.navigate(['/videojuego/',idx]);
  }

}
