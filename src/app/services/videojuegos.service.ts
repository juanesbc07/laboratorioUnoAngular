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
    },
    {
      nombre: 'God of war',
      descripcion: 'God of War es un videojuego de acción-aventura desarrollado por SCE Santa Monica Studio y publicado por Sony Interactive Entertainment.',
      img: '../assets/god.jpg',
      lanzamiento: '2018',
      consola: 'PS4'
    },
    {
      nombre: 'Gears of War',
      descripcion: 'Gears of War es una serie de videojuegos y de cómics del género shooter en tercera persona y acción-aventura, desarrollada por Epic Games y The Coalition',
      img: '../assets/gears.png',
      lanzamiento: '2006',
      consola: 'XBOX'

    },
    {
      nombre: 'Fifa 22',
      descripcion: 'FIFA 22 es un videojuego de fútbol desarrollado por EA Vancouver y EA Romania, siendo publicado por EA Sports. Está disponible para PlayStation 4, PlayStation 5, Xbox Series X/S, Xbox One, Microsoft Windows, Google Stadia y Nintendo Switch',
      img: '../assets/fifa.jpg',
      lanzamiento: '2021',
      consola: 'PS4'
    },
    {
      nombre: 'Spider-Man',
      descripcion: 'Marvel\'s Spider-Man es un videojuego de acción y aventura basado en el popular superhéroe hómonimo de la editorial Marvel Comics.​ Fue desarrollado por Insomniac Games y publicado por Sony Interactive Entertainment en exclusiva para la consola PlayStation 4',
      img: '../assets/spider.jpg',
      lanzamiento: '2018',
      consola: 'PS4'
    },
    {
      nombre: 'Minecraft',
      descripcion: 'Minecraft es un videojuego de construcción, de tipo «mundo abierto» o sandbox creado originalmente por el sueco Markus Persson, ​ y posteriormente desarrollado por su empresa, Mojang Studios',
      img: '../assets/mine.png',
      lanzamiento: '2011',
      consola: 'XBOX'
    },
    {
      nombre: 'Far cry 6',
      descripcion: 'Far Cry 6 es un videojuego de disparos en primera persona desarrollado por Ubisoft Toronto y publicado por Ubisoft. Es la sexta entrega principal de la serie Far Cry, fue lanzado el 7 de octubre del 2021 para las plataformas de Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S y Google Stadia',
      img: '../assets/far.jpg',
      lanzamiento: '2021',
      consola: 'PS4'
    },
    {
      nombre: 'Assassins Creed: Valhalla',
      descripcion: 'Assassin\'s Creed Valhalla es un videojuego desarrollado por Ubisoft Montreal y publicado por Ubisoft. Es el decimosegundo en importancia y el vigesimosegundo lanzado dentro de la saga de Assassin Creed, y sucesor al juego del 2018 Assassin\'s Creed Odyssey.',
      img: '../assets/asa.png',
      lanzamiento: '2020',
      consola: 'PS4'
    },
    {
      nombre: 'Mortal Kombat 11',
      descripcion: 'Mortal Kombat 11 es un videojuego de lucha desarrollado por NetherRealm Studios y publicado por Warner Bros. Interactive Entertainment. Se ejecuta en una versión muy modificada de Unreal Engine 3, ​ es la undécima entrega principal de la serie Mortal Kombat y una secuela de 2015 Mortal Kombat X',
      img: '../assets/mortal.png',
      lanzamiento: '2019',
      consola: 'PS4'
    },
    {
      nombre: 'Rocket League',
      descripcion: 'Rocket League es un videojuego que combina el fútbol con los vehículos. Fue desarrollado por Psyonix y lanzado el 7 de julio de 2015. Fue lanzado Free to play en septiembre de 2020. Se encuentra disponible en español, y tiene modos de juego cooperativo de un jugador y en línea.',
      img: '../assets/rocket.jpg',
      lanzamiento: '2015',
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
