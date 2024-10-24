import { Component } from '@angular/core';
import { DestinationsService } from './destinations.service'; //Me marca el error aquí en ./destinationsService


@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent {
  imageUrl: string = '';

  constructor(private destinationsService: DestinationsService) {} // Y Aquí también en destinationsService

  fetchImage(destination: string) {
    this.destinationsService.getImage(destination).subscribe(
      (response: any) => {
        this.imageUrl = response.results[0]?.urls?.regular || '';
      },
      (error: any) => { // Asegúrate de que 'error' esté entre paréntesis
        console.error('Error fetching image:', error);
        this.imageUrl = ''; // Limpiar la imagen si hay un error
      }
    );
  }
}


