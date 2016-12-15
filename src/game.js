import Board from 'board.js';
import Player from 'board.js';

var Game = function(){

  var active = false;
  var numberOfPlays = 0;
  var board = new Board();
  var gameBoard = board.gameBoard;
  var player1 = new Player();
  var player2 = new Player();


  this.setPlayerInfo = function(){
    console.log(gameBoard);
  }

  this.play = function(){
    while(active){

    }
  }
};


export default Game;

// var Game = require('game').default;
// var game = new Game();
