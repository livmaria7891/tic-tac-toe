import Board from "../src/app/models/board.js";
import Game from "../src/app/models/game.js";
import Player from "../src/app/models/player.js";


describe('Board', function() {
  describe('writeToBoard', function() {
    it('throw an Error if spot on board is unavailable', function() {
        var testBoard = new Board();
        testBoard.writeToBoard('one',"x")
        expect(function(){testBoard.writeToBoard('one','x')}).toThrow();

    });

    it('throw an error if user input is invalid', function() {
        var testBoard = new Board();
        expect(function(){testBoard.writeToBoard('15','x')}).toThrow();
    });

    it('adds correct character to correct key in Board', function() {
        var testBoard = new Board();
        testBoard.writeToBoard('one','x')
        expect(testBoard.gameBoard.one).toEqual('x');
    });

    it('adds correct character to correct key in Board', function() {
        var testBoard = new Board();
        testBoard.writeToBoard('nine','o');
        expect(testBoard.gameBoard.nine).toEqual('o');
    });
  });

  describe('checkForWinner',function(){
    it("top row match returns true", function() {
        var testBoard = new Board();
        var board = testBoard.gameBoard
        board.two = 'x';
        board.three = 'x';
        expect(testBoard.checkForWinner('one', 'x')).toEqual(true);
        board.clearBoard();

        board.one = 'o';
        board.three = 'o';
        expect(testBoard.checkForWinner('two', 'o')).toEqual(true);
        board.clearBoard();

        board.one = 'x';
        board.two = 'x';
        expect(testBoard.checkForWinner('three', 'x')).toEqual(true);

    });

    it("middle row match returns true", function() {
        var testBoard = new Board();
        var board = testBoard.gameBoard
        board.five = 'x';
        board.six = 'x';
        expect(testBoard.checkForWinner('four', 'x')).toEqual(true);
        board.clearBoard();

        board.four = 'o';
        board.six = 'o';
        expect(testBoard.checkForWinner('five', 'o')).toEqual(true);
        board.clearBoard();

        board.four = 'x';
        board.five = 'x';
        expect(testBoard.checkForWinner('six', 'x')).toEqual(true);

    });

    it("bottom row match returns true", function() {
        var testBoard = new Board();
        var board = testBoard.gameBoard
        board.eight = 'x';
        board.nine = 'x';
        expect(testBoard.checkForWinner('seven', 'x')).toEqual(true);
        board.clearBoard();

        board.seven = 'o';
        board.nine = 'o';
        expect(testBoard.checkForWinner('eight', 'o')).toEqual(true);
        board.clearBoard();

        board.seven = 'x';
        board.eight = 'x';
        expect(testBoard.checkForWinner('nine', 'x')).toEqual(true);

    });

    it("left column match returns true", function() {
        var testBoard = new Board();
        var board = testBoard.gameBoard
        board.four = 'x';
        board.seven = 'x';
        expect(testBoard.checkForWinner('one', 'x')).toEqual(true);
        board.clearBoard();

        board.one = 'o';
        board.seven = 'o';
        expect(testBoard.checkForWinner('four', 'o')).toEqual(true);
        board.clearBoard();

        board.one = 'x';
        board.four = 'x';
        expect(testBoard.checkForWinner('seven', 'x')).toEqual(true);

    });

    it("middle column match returns true", function() {
        var testBoard = new Board();
        var board = testBoard.gameBoard
        board.four = 'x';
        board.seven = 'x';
        expect(testBoard.checkForWinner('one', 'x')).toEqual(true);
        board.clearBoard();

        board.one = 'o';
        board.seven = 'o';
        expect(testBoard.checkForWinner('four', 'o')).toEqual(true);
        board.clearBoard();

        board.one = 'x';
        board.four = 'x';
        expect(testBoard.checkForWinner('seven', 'x')).toEqual(true);

    });

    it("right column match returns true", function() {
        var testBoard = new Board();
        var board = testBoard.gameBoard
        board.six = 'x';
        board.nine = 'x';
        expect(testBoard.checkForWinner('three', 'x')).toEqual(true);
        board.clearBoard();

        board.three = 'o';
        board.nine = 'o';
        expect(testBoard.checkForWinner('six', 'o')).toEqual(true);
        board.clearBoard();

        board.three = 'x';
        board.six = 'x';
        expect(testBoard.checkForWinner('nine', 'x')).toEqual(true);

    });

    it("left to right diagonal match returns true", function() {
        var testBoard = new Board();
        var board = testBoard.gameBoard
        board.five = 'x';
        board.nine = 'x';
        expect(testBoard.checkForWinner('one', 'x')).toEqual(true);
        board.clearBoard();

        board.one = 'o';
        board.nine = 'o';
        expect(testBoard.checkForWinner('five', 'o')).toEqual(true);
        board.clearBoard();

        board.one = 'x';
        board.five = 'x';
        expect(testBoard.checkForWinner('nine', 'x')).toEqual(true);

    });

    it("right to left diagonal match returns true", function() {
        var testBoard = new Board();
        var board = testBoard.gameBoard
        board.five = 'x';
        board.seven = 'x';
        expect(testBoard.checkForWinner('three', 'x')).toEqual(true);
        board.clearBoard();

        board.three = 'o';
        board.seven = 'o';
        expect(testBoard.checkForWinner('five', 'o')).toEqual(true);
        board.clearBoard();

        board.three = 'x';
        board.five = 'x';
        expect(testBoard.checkForWinner('seven', 'x')).toEqual(true);

    });
  });
});
