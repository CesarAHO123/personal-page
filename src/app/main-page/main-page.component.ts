import { Component, HostListener } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  myPhoto="assets/A001.png"
  windowSize$: Observable<Event> = fromEvent(window, 'resize');

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // Actualiza el valor cuando cambia el tamaño de la pantalla
    this.updatePhoto();
  }
  updatePhoto(): void {
    // Aquí puedes cambiar el valor según tus necesidades
    if (window.innerWidth < 768) {
      this.myPhoto = "assets/A003.jpg";
    } else {
      this.myPhoto = "assets/A001.png";
    }
  }
  ngOnInit(): void {
    this.updatePhoto();
  }

}
