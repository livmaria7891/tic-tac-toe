import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Board from '../models/board.js'
import Game from '../models/game.js'

const BoardView = Backbone.View.extend({
  initialize: function(options){
    console.log("BoardView generated");
    
    this.template = _.template($("#tmpl-board").html());

    //Later take this from Game's gameboard
    //consider, passing game board as an argument whenever this needs re-rendered
    var b = new Board()
    this.board = b.gameBoard;

    this.element = $(".board")
  },

  render: function(){
    var html = this.template(this.board);

    this.element.html(html);
  }
});

export default BoardView;
