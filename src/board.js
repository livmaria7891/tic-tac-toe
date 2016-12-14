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

    //prints current board to terminal(and returns board)
    // this.printBoard = function(){
    //   var board = this.gameBoard;
    //   var printedBoard =
    //     board['1'] + board['2'] + board['3'] + "\n" +
    //     board['4'] + board['5'] + board['6'] + "\n" +
    //     board['7'] + board['8'] + board['9'] + "\n";
    //   var boardAsString = "";
    //   var rowCounter = 0;
    //   for(var spot in board){
    //     if(rowCounter)
    //       switch(board[spot]){
    //         case null:
    //           boardAsString.concat("_")
    //         break;
    //         case 'x':
    //           boardAsString.concat("X")
    //         break;
    //         case 'o':
    //           boardAsString.concat("O")
    //         break;
    //       }
    //     }
    //     rowCounter = 0
    //   }
    //
    //
    // }

};
// var Board = require('board').default;
// var board = new Board();
export default Board;
