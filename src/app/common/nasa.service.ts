import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageOfTheDay } from './imageOfTheDay.model';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  // on met le clè API appart, demo key dans l'url https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5

  keyAPI = "h320y44Ws21GddA6aeJ5yaOCz5sVyaOGgakjXHMl"

// on intègre le clè API dans l'url plus bas

  urlAPI = "https://api.nasa.gov/planetary/apod"

  constructor(private httpClient: HttpClient) { }

//on utilise le méthode getImageOfTheDay qui return une Observable
// 3) la fonction contient l'observable qui va renvoyer l'image du jour en suivant le lien, qui consiste de deux variable, urlAPI et  keyAPI

  getImageOfTheDay(): Observable<ImageOfTheDay> {
// pour récuperer l'image du jour on utilise httpClient et le méthode Get, on lui donne le paramètre de type any, pour l'instant, après ça va changer en ImageOfTheDay
//on prend urlAPI et passe en paramètre avec ? keyAPI
//quand on récupère une seule image, on récupère un objet de type ImageOfTheDay

return this.httpClient.get<ImageOfTheDay>(`${this.urlAPI}?api_key=${this.keyAPI}`)
  }
}
