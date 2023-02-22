import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent {
  @Input() equipo: any;
  @Output() canasta: EventEmitter<any>= new EventEmitter;

  setCanasta(puntos: number, nombreJugador: string): void {
    this.canasta.emit({
      puntos, nombreJugador
    })
  }
}
