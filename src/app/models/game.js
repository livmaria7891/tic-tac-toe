import Backbone from 'backbone';

import Board from './board.js';
import Player from './player.js';

const Game = Backbone.Model.extend ({

  initialize: function(options){
    console.log('game initialized')
    this.active = false;
    this.numberOfPlays = 0;
    this.board = new Board();
    this.gameBoard = this.board.gameBoard;
    this.player1 = new Player();
    this.player2 = new Player();
    this.activePlayer = null;
  },

  chooseFirstPlayer: function(){
    let player1 = this.player1
    let player2 = this.player2
    if(Math.floor(Math.random()*2)){
      player1.setCharacter('x')
      player2.setCharacter('o');
      this.activePlayer = player1
      return player1
    }else{
      player2.setCharacter('x');
      player1.setCharacter('o');
      this.activePlayer = player2
      return player2
    }
  },
  // getActivePlayer: function(){
  //   if(this.player1.active){
  //     return this.player1
  //   }else{
  //     return this.player2
  //   }
  // },

  newPlay: function(space_id,char){
  
    this.board.writeToBoard(space_id,char)
    console.log(this.gameBoard);
    this.numberOfPlays += 1;
    if(this.numberOfPlays >= 9 && !this.board.checkForWinner(char,space_id)){
      console.log('tie')
      return 'tie'
    }
    this.changeActivePlayer();

  },

  changeActivePlayer:function(){
    if(this.activePlayer == this.player1){
      this.activePlayer = this.player2
    }else{
      this.activePlayer = this.player1
    }
  }

});


export default Game;

// var Game = require('game').default;
// var game = new Game();
