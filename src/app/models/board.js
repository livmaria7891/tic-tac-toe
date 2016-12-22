import Backbone from 'backbone';

import Game from './game.js';
import Player from './player.js';

const Board = Backbone.Model.extend ({

  initialize: function(){
    this.gameBoard = {
      one: null,
      two: null,
      three: null,
      four: null,
      five: null,
      six: null,
      seven: null,
      eight: null,
      nine: null,
      clearBoard: function(){
        this.one = null;
        this.two= null;
        this.three= null;
        this.four= null;
        this.five= null;
        this.six= null;
        this.seven= null;
        this.eight= null;
        this.nine= null;
      }
    }
  },


    writeToBoard:function(num,char){
      //num is key on board, char is x or o
      var board = this.gameBoard;
      if(board[num] != null){
        throw "This space is not available";
      }
      if((char != "x" || char != "o") && !(num in board)){
          throw "Error, invalid input"
      }
      board[num] = char;
    },

    //return array of and prints all spaces on board equal to null
    readBoard:function(){
      var emptySpots = [];
      var board = this.gameBoard
      for(var spot in board){
        if(board[spot] == null && typeof board[spot] != 'function'){
          emptySpots.push(spot);
        }
      }
      return emptySpots;
    },


    checkForWinner:function(userInput, char){
      console.log(userInput);
      console.log(char);

      let board = this.gameBoard
      switch(userInput){
        case 'one':

          if ((board.two == char  && board.three == char)||
              (board.four == char  && board.seven == char)||
              (board.five == char  && board.nine == char)){

            return true;
          };
        break;
        case 'two':

          if ((board.one == char  && board.three == char)||
              (board.five == char  && board.eight == char)){
            return true;
          };
        break;
        case 'three':

          if ((board.one == char  && board.two == char)||
              (board.six == char  && board.nine == char)||
              (board.five == char  && board.seven == char)){
            return true;
          };
        break;
        case 'four':

          if ((board.five == char  && board.six == char)||
              (board.one == char  && board.seven == char)){
            return true;
          };
        break;
        case 'five':

          if ((board.four == char  && board.six == char)||
              (board.two == char  && board.eight == char)||
              (board.one == char  && board.nine == char)||
              (board.three == char  && board.seven == char)){
            return true;
          };
        break;
        case 'six':

          if ((board.four == char  && board.five == char)||
              (board.two == char  && board.eight == char)||
              (board.three == char  && board.nine == char)){
            return true;
          };
        break;
        case 'seven':

          if ((board.eight == char  && board.nine == char)||
              (board.one == char  && board.four == char)||
              (board.three == char  && board.five == char)){
            return true;
          };
          break;
        case 'eight':

          if ((board.two == char  && board.five == char)||
              (board.seven == char  && board.nine == char)){
            return true;
          };
        break;
        case 'nine':

          if ((board.seven == char  && board.eight == char)||
              (board.three == char  && board.six == char)||
              (board.one == char  && board.five == char)){
            return true;
          };
        break;
        default:
          return false;
      }

    }

});
// var Board = require('board').default;
// var board = new Board();
export default Board;
