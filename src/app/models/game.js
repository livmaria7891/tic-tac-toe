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

  },

  chooseFirstPlayer: function(){
    let player1 = this.player1
    let player2 = this.player2
    if(Math.floor(Math.random()*2)){
      player1.setCharacter('x')
      player1.setStatus(true);
      player2.setCharacter('o');
      player2.setStatus(false);
      return player1
    }else{
      player2.setCharacter('x');
      player2.setStatus(true);
      player1.setCharacter('o');
      player1.setStatus(false);
      return player2
    }

  }

});


export default Game;

// var Game = require('game').default;
// var game = new Game();
