import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameDTO } from 'src/app/model/game-dto';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  text:string ="";

  id: number = 0;
  gameSearched!: GameDTO;
  games: GameDTO[] = [];

  constructor(private route: ActivatedRoute) {
  
    this.games.push(new GameDTO(1, "Assasings creed", new Date("2018-10-10"), 10000, 10000, 0, "Jueguito", "Muchos", "+18", 0, true));
    this.games.push(new GameDTO(2, "Assasings creed 2", new Date("2018-10-10"), 10000, 10000, 0, "Jueguito", "Muchos", "+18", 0, true));
    this.games.push(new GameDTO(3, "Assasings creed 3", new Date("2018-10-10"), 10000, 10000, 0, "Jueguito", "Muchos", "+18", 0, true));

    this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    this.games.forEach((game) => {
      if (game.id === this.id) {
        this.gameSearched = game;
      }
    });
    
    console.log(this.gameSearched);

  }
  
}

