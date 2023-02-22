import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-score',
  templateUrl: './top-score.component.html',
  styleUrls: ['./top-score.component.css']
})
export class TopScoreComponent {
  @Input() equipoLocal: any;
  @Input() equipoVisitante: any;
  jugadores: any = [];

  ngOnInit(): void{
    this.jugadores = [...this.equipoLocal.jugadores, ...this.equipoVisitante.jugadores]
  }

  ngAfterContentChecked(){
    this.sortJugadores();
  }

  sortJugadores(){
    this.jugadores.sort((a: any, b: any) =>{
      return (b.puntos - a.puntos);
    })
  }

}
