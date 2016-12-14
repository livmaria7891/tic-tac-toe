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
    xit('returns all values that equal null', function() {
      var testBoard = new Board();
      testBoard.writeToBoard('9','o');
      testBoard.writeToBoard('1','x');

      expect(testBoard.readBoard()).toEqual(["2","3","4","5","6","7","8"]);
    });

  });
});
