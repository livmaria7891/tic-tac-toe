import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Board from '../models/board.js'
import Game from '../models/game.js'

const BoardView = Backbone.View.extend({
  el: '.board',
  initialize: function(options){
    console.log("BoardView generated")
    // this.element = options.el;
    this.board = options.model;
  },
  events: {
    'click this': 'get_id'
  },
  get_id:function(){
    console.log("Clicking works")
  },
  updateSpaces:function(){
    console.log("got to update spaces")
    let board = this.board;

    for(var key in board){
      $("#" + key.toString()).addClass(board[key]);
    }

  },
  render: function(){
    this.updateSpaces();
    return this;
  }
});

export default BoardView;
