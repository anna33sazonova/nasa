import { Component, OnInit } from '@angular/core';
import { ImageOfTheDay } from './common/imageOfTheDay.model';
import { NasaService } from './common/nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

// on déclare la variable imageOfTheDay ou on va stocker les images du jour

imageOfTheDay: ImageOfTheDay | undefined

  //1) on rajoute le constructeur pour récuperer NasaService

  constructor(private nasaService: NasaService) {

  }
 // 2 ) au moment d'initialisation des données, il va demander à nasaService de récuperer l'image du jour
  // 4) dans le mèthode onInit on va declancher notre observable avec le méthode subscribe 

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe(
    
      //on récupère la répose est l'objet imageOfTheDay, c'est une autre variable que imageOfTheDay plus haut, de type ImageOfTheDay
      (imageOfTheDay:ImageOfTheDay) => {
        this.imageOfTheDay = imageOfTheDay
      }

    )
  }

  title = 'nasa';
}
