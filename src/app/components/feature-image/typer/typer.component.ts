import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typer',
  templateUrl: './typer.component.html',
  styleUrls: ['./typer.component.scss']
})
export class TyperComponent implements OnInit{
  ngOnInit(): void {
    const target = document.querySelector('.typing');
    const Typewriter = require('t-writer.js');
    const writer1 = new Typewriter(target, {
      typeSpeed: 60,
      deleteSpeed: 10,
      typeColor: 'white',
      cursorColor:"white"
    })
    const writer2 = new Typewriter(target, {
      typeSpeed:60,
      deleteSpeed:10,
      typeColor: 'white',
      cursorColor:"white"
    })
    writer1
      .strings(2000,
        "Avec une économie en constante évolution, Madagascar offre des opportunités d'investissement inédites",
        "Investir à Madagascar, c'est s'engager dans une économie en plein essor avec un potentiel énorme.",
        "Découvrez les avantages fiscaux et les incitations pour les investisseurs à Madagascar.",
        "MADAGASCAR"
      )
      .removeCursor()
      .then(writer2.start.bind(writer2))
      .start()
    writer2
    .strings(2000,
      ' une destination attractive pour les investissements rentables en Afrique.',
      ' le pays des possibilités infinies pour les investisseurs ambitieux.',
      ' un lieu stratégique pour investir et étendre vos activités',
      ' un environnement propice aux affaires et à l\'investissement dans un cadre unique.',
      ' un marché émergent dynamique.'
      )
      .clear()
      .removeCursor()
      .then(writer1.start.bind(writer1))
  }
}
