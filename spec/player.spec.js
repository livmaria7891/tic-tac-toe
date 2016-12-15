import Player from "player";

describe('Player', function(){
  describe('setName',function(){
    it('sets the name variable to argument', function(){
      var testPlayer = new Player();
      testPlayer.setName("Olivia")
      expect(testPlayer.name).toEqual("Olivia");
    });

    it('throws error if argument is not string', function(){
      var testPlayer = new Player();
      expect(function(){testPlayer.setName(88)}).toThrow();

      expect(function(){testPlayer.setName(null)}).toThrow();

      expect(function(){testPlayer.setName([])}).toThrow();

      expect(function(){testPlayer.setName(true)}).toThrow();
    });
  });

  describe('setCharacter',function(){
    it('sets the char to argument', function(){
      var testPlayer = new Player();
      testPlayer.setCharacter("x")
      expect(testPlayer.char).toEqual("x");

      testPlayer.setCharacter("o")
      expect(testPlayer.char).toEqual("o");
    });

    it('throws and error if not passed x or o', function(){
      var testPlayer = new Player();

      expect(function(){testPlayer.setCharacter(true)}).toThrow();

      expect(function(){testPlayer.setCharacter('j')}).toThrow();

      expect(function(){testPlayer.setCharacter([])}).toThrow();

      expect(function(){testPlayer.setCharacter('X')}).toThrow();

      expect(function(){testPlayer.setCharacter('O')}).toThrow();
    });
  });

  describe('setStatus',function(){
    it('sets the active variable to argument', function(){
      var testPlayer = new Player();
      testPlayer.setStatus(true)
      expect(testPlayer.active).toEqual(true);
    });

    it('throws and error if not passed a boolean', function(){
      var testPlayer = new Player();

      expect(function(){testPlayer.setStatus('true')}).toThrow();

      expect(function(){testPlayer.setStatus([])}).toThrow();

      expect(function(){testPlayer.setStatus(null)}).toThrow();

      expect(function(){testPlayer.setStatus('x')}).toThrow();
    });
  });

  describe('toggleStatus',function(){
    it('toggles active status between true and false', function(){
      var testPlayer = new Player();
      testPlayer.setStatus(true);
      testPlayer.toggleActive();
      expect(testPlayer.active).toEqual(false);


      testPlayer.toggleActive();
      expect(testPlayer.active).toEqual(true);
    });
  })


});
