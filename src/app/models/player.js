import Backbone from 'backbone';

import Board from './board.js';
import Game from './game.js';

const Player = Backbone.Model.extend ({
  initialize: function(options){
    this.name = "Player"
    this.char = null
  }, 

  setName:function(name){
    if(typeof name == 'string'){
      this.name = name;
    }else{
      throw "Name must be a string"
    }
  },

  setCharacter: function(char){
    if(char == 'x' || char == 'o'){
      this.char = char;
    } else {
      throw Error;
    }
  },

  setStatus: function(activeStatus){
    if(typeof activeStatus == 'boolean'){
      this.active = activeStatus;
    }else{
      throw "setStatus only takes booleans as arguments"
    }
  },

  toggleActive: function(){
    this.active = !this.active;
  }

});



export default Player;
