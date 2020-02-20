import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odontograma',
  templateUrl: './odontograma.component.html',
})
export class OdontogramaComponent implements OnInit {
  public nombrePaciente = 'Miguel Robles Gonzalez';
  constructor() { }

  ngOnInit(): void {
  }

}
