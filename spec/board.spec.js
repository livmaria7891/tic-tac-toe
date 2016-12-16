import Board from "board";

describe('Board', function() {
  describe('writeToBoard', function() {
    it('throw an Error if spot on board is unavailable', function() {
        var testBoard = new Board();
        testBoard.writeToBoard('1',"x")
        expect(function(){testBoard.writeToBoard('1','x')}).toThrow();

    });

    it('throw an error if user input is invalid', function() {
        var testBoard = new Board();
        expect(function(){testBoard.writeToBoard('15','x')}).toThrow();
    });

    it('adds correct character to correct key in Board', function() {
        var testBoard = new Board();
        testBoard.writeToBoard('1','x')
        expect(testBoard.gameBoard['1']).toEqual('x');
    });

    it('adds correct character to correct key in Board', function() {
        var testBoard = new Board();
        testBoard.writeToBoard('9','o');
        expect(testBoard.gameBoard['9']).toEqual('o');
    });
  });

  describe('readBoard', function() {
    it('returns all values that equal null', function() {
      var testBoard = new Board();
      testBoard.writeToBoard('9','o');
      testBoard.writeToBoard('1','x');

      expect(testBoard.readBoard()).toEqual(["2","3","4","5","6","7","8"]);
    });

    it('does not add clearBoard to array', function() {
      var testBoard = new Board();

      expect(testBoard.readBoard()).not.toEqual(["1","2","3","4","5","6","7","8","9", "clearBoard"]);
    });
  });

  describe('checkForWinner',function(){
    it("top row match returns true", function() {
        var testBoard = new Board();
        var board = testBoard.gameBoard
        board['2'] = 'x';
        board['3'] = 'x';
        expect(testBoard.checkForWinner('1', 'x')).toEqual(true);
        board.clearBoard();

        board['1'] = 'o';
        board['3'] = 'o';
        expect(testBoard.checkForWinner('2', 'o')).toEqual(true);
        board.clearBoard();

        board['1'] = 'x';
        board['2'] = 'x';
        expect(testBoard.checkForWinner('3', 'x')).toEqual(true);

    });

    it("middle row match returns true", function() {
        var testBoard = new Board();
        var board = testBoard.gameBoard
        board['5'] = 'x';
        board['6'] = 'x';
        expect(testBoard.checkForWinner('4', 'x')).toEqual(true);
        board.clearBoard();

        board['4'] = 'o';
        board['6'] = 'o';
        expect(testBoard.checkForWinner('5', 'o')).toEqual(true);
        board.clearBoard();

        board['4'] = 'x';
        board['5'] = 'x';
        expect(testBoard.checkForWinner('6', 'x')).toEqual(true);

    });

    it("bottom row match returns true", function() {
        var testBoard = new Board();
        var board = testBoard.gameBoard
        board['8'] = 'x';
        board['9'] = 'x';
        expect(testBoard.checkForWinner('7', 'x')).toEqual(true);
        board.clearBoard();

        board['7'] = 'o';
        board['9'] = 'o';
        expect(testBoard.checkForWinner('8', 'o')).toEqual(true);
        board.clearBoard();

        board['7'] = 'x';
        board['8'] = 'x';
        expect(testBoard.checkForWinner('9', 'x')).toEqual(true);

    });

    it("left column match returns true", function() {
        var testBoard = new Board();
        var board = testBoard.gameBoard
        board['4'] = 'x';
        board['7'] = 'x';
        expect(testBoard.checkForWinner('1', 'x')).toEqual(true);
        board.clearBoard();

        board['1'] = 'o';
        board['7'] = 'o';
        expect(testBoard.checkForWinner('4', 'o')).toEqual(true);
        board.clearBoard();

        board['1'] = 'x';
        board['4'] = 'x';
        expect(testBoard.checkForWinner('7', 'x')).toEqual(true);

    });

    it("middle column match returns true", function() {
        var testBoard = new Board();
        var board = testBoard.gameBoard
        board['4'] = 'x';
        board['7'] = 'x';
        expect(testBoard.checkForWinner('1', 'x')).toEqual(true);
        board.clearBoard();

        board['1'] = 'o';
        board['7'] = 'o';
        expect(testBoard.checkForWinner('4', 'o')).toEqual(true);
        board.clearBoard();

        board['1'] = 'x';
        board['4'] = 'x';
        expect(testBoard.checkForWinner('7', 'x')).toEqual(true);

    });

    it("right column match returns true", function() {
        var testBoard = new Board();
        var board = testBoard.gameBoard
        board['6'] = 'x';
        board['9'] = 'x';
        expect(testBoard.checkForWinner('3', 'x')).toEqual(true);
        board.clearBoard();

        board['3'] = 'o';
        board['9'] = 'o';
        expect(testBoard.checkForWinner('6', 'o')).toEqual(true);
        board.clearBoard();

        board['3'] = 'x';
        board['6'] = 'x';
        expect(testBoard.checkForWinner('9', 'x')).toEqual(true);

    });

    it("left to right diagonal match returns true", function() {
        var testBoard = new Board();
        var board = testBoard.gameBoard
        board['5'] = 'x';
        board['9'] = 'x';
        expect(testBoard.checkForWinner('1', 'x')).toEqual(true);
        board.clearBoard();

        board['1'] = 'o';
        board['9'] = 'o';
        expect(testBoard.checkForWinner('5', 'o')).toEqual(true);
        board.clearBoard();

        board['1'] = 'x';
        board['5'] = 'x';
        expect(testBoard.checkForWinner('9', 'x')).toEqual(true);

    });

    it("right to left diagonal match returns true", function() {
        var testBoard = new Board();
        var board = testBoard.gameBoard
        board['5'] = 'x';
        board['7'] = 'x';
        expect(testBoard.checkForWinner('3', 'x')).toEqual(true);
        board.clearBoard();

        board['3'] = 'o';
        board['7'] = 'o';
        expect(testBoard.checkForWinner('5', 'o')).toEqual(true);
        board.clearBoard();

        board['3'] = 'x';
        board['5'] = 'x';
        expect(testBoard.checkForWinner('7', 'x')).toEqual(true);

    });
  });
});
