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
      emptySpots = [];
      return emptySpots;
    }

    //user is prompted to pick available coordinate
    this.pickSpot = function(){

    }

    //prints current board to terminal(and returns board)
    this.printBoard = function(){

    }

};
// var Board = require('board').default;
// var board = new Board();
export default Board;
