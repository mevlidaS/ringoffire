import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialog,
  MatDialogContent,
} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GameInfoComponent } from '../game-info/game-info.component';
import { MatCardTitle } from '@angular/material/card';



@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule,MatIconModule, MatDialogContent, MatFormFieldModule, GameInfoComponent, MatCardTitle],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent implements OnInit {

  pickCardAnimation = false;
  currentCard: string = '';
  game!: Game;
 


  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if(!this.pickCardAnimation){
      this.currentCard = this.game.stack.pop()!;
      console.log(this.currentCard);
      this.pickCardAnimation = true;
     

      console.log( 'new card: ' + this.currentCard);
      console.log( 'game is ', this.game);

      this.game.currentPlayer = (this.game.currentPlayer + 1) % this.game.players.length;

      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false; 
      }, 1000);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if ( name &&name.length > 0){
      this.game.players.push(name);
      }
    });
  }

}
