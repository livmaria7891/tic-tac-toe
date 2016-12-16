import Game from 'game.js';
import Player from 'player.js';

var Board = function(){

    this.gameBoard = {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": null,
      clearBoard: function(){
        this["1"] = null;
        this["2"]= null;
        this["3"]= null;
        this["4"]= null;
        this["5"]= null;
        this["6"]= null;
        this["7"]= null;
        this["8"]= null;
        this["9"]= null;
      }
    };

    this.writeToBoard = function(num,char){
      //num is key on board, char is x or o
      var board = this.gameBoard;
      if(board[num] != null){
        throw "This space is not available";
      }
      if((char != "x" || char != "o") && !(num in board)){
          throw "Error, invalid input"
      }
      board[num] = char;
    };

    //return array of and prints all spaces on board equal to null
    this.readBoard = function(){
      var emptySpots = [];
      var board = this.gameBoard
      for(var spot in board){
        if(board[spot] == null && typeof board[spot] != 'function'){
          emptySpots.push(spot);
        }
      }
      return emptySpots;
    }

    //user is prompted to pick available coordinate
    //should this go in Game?
    //will do later, may not need it for wave 2
    this.pickSpot = function(){

    };


    this.checkForWinner = function(userInput, char){
      var board = this.gameBoard
      switch(userInput){
        case '1':
          if ((board['2'] == char  && board['3'] == char)||
              (board['4'] == char  && board['7'] == char)||
              (board['5'] == char  && board['9'] == char)){
            return true;
          };
        break;
        case '2':
        if ((board['1'] == char  && board['3'] == char)||
            (board['5'] == char  && board['8'] == char)){
          return true;
        };
        break;
        case '3':
        if ((board['1'] == char  && board['2'] == char)||
            (board['6'] == char  && board['9'] == char)||
            (board['5'] == char  && board['7'] == char)){
          return true;
        };
        break;
        case '4':
        if ((board['5'] == char  && board['6'] == char)||
            (board['1'] == char  && board['7'] == char)){
          return true;
        };
        break;
        case '5':
        if ((board['4'] == char  && board['6'] == char)||
            (board['2'] == char  && board['8'] == char)||
            (board['1'] == char  && board['9'] == char)||
            (board['3'] == char  && board['7'] == char)){
          return true;
        };
        break;
        case '6':
        if ((board['4'] == char  && board['5'] == char)||
            (board['2'] == char  && board['8'] == char)||
            (board['3'] == char  && board['9'] == char)){
          return true;
        };
        break;
        case '7':
        if ((board['8'] == char  && board['9'] == char)||
            (board['1'] == char  && board['4'] == char)||
            (board['3'] == char  && board['5'] == char)){
          return true;
        };
        break;
        case '8':
        if ((board['2'] == char  && board['5'] == char)||
            (board['7'] == char  && board['9'] == char)){
          return true;
        };
        break;
        case '9':
        if ((board['7'] == char  && board['8'] == char)||
            (board['3'] == char  && board['6'] == char)||
            (board['1'] == char  && board['5'] == char)){
          return true;
        };
        break;
      }

    }

};
// var Board = require('board').default;
// var board = new Board();
export default Board;
