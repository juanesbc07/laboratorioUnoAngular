import {Injectable} from "@angular/core";
//import {VideoJuego} from "../models/videojuego.model";


@Injectable()
export class VideojuegosService{

  private videojuegos: VideoJuego[] = [
    {
      nombre: 'Fortnite',
      descripcion: 'Fortnite es un juego del 2017 desarrollado por la empresa Epic Games' +
        'Lanzado como diferentes paquetes de software que presentan diferentes modos de juego, pero' +
        'que comparten el mismo motor general de juego y las mecanicas. Fue anunciado en los spike Video Game'+
        'Awards en 2011',
      img: '../assets/fortnite.jpg',
      lanzamiento: '2017',
      consola: 'PS4'
    }
  ];

  constructor() {
    console.log('Servicio listo para usarse');
  }

  getVideojuegos(): VideoJuego[]{
    return this.videojuegos;
  }

  getVideojuego(idx: number){
    return this.videojuegos[idx];
  }

  buscarVideojuegos(termino: string): VideoJuego[]{

    let videojuegosArr: VideoJuego[] = [];

    termino = termino.toLowerCase();

    for (let videojuego of this.videojuegos){
      let nombre = videojuego.nombre.toLowerCase();
      if (nombre.indexOf(termino)>=0){
        videojuegosArr.push(videojuego);
      }
    }
    return videojuegosArr;
  }
}

export interface VideoJuego{
  nombre: string;
  descripcion: string;
  img: string;
  lanzamiento: string;
  consola: string;
}
