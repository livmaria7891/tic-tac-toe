import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Game from 'app/models/game.js';
import BoardView from 'app/views/board_view.js';


const ApplicationView = Backbone.View.extend({
  el: '.container',
  initialize: function() {

    this.render();
  },

  events: {
    'click .play': 'initializeGame',
    'click .player1-button': 'getPlayer1Name',
    'click .player2-button': 'getPlayer2Name',
    'click .board': 'makePlay'
  },

  initializeGame:function(){
    this.game = new Game();
    this.board = this.game.board;
  },

  getPlayer1Name:function(event){
    event.preventDefault()

    let name = this.$('.player-name-form input[id="name"]').val()
    this.game.player1.setName(name)
    //when Player 1's name is saved, Form changes to collect 2nd player's name
    $("form").trigger('reset');
    $('label').text("Second Player's Name");
    $(".player1-button").toggleClass("player1-button player2-button");
  },

  getPlayer2Name:function(){
    event.preventDefault()
    var name = this.$('.player-name-form input[id="name"]').val();
    this.game.player2.setName(name);
    this.beginGame();
  },
  beginGame:function(){
    this.game.active = true;
    let first_player = this.game.chooseFirstPlayer().name;

    $("#get_player_name").hide(500);
    $("#begin_modal").show(500);
    $("#begin_modal h2").prepend(first_player);
  },
  makePlay:function(event){
    //when a player clicks on a space...
    let id = event.target.id
    //make sure this only does things when the id is correct ^^
    let board = this.board
    let player = this.game.activePlayer
    let char = player.char
    if(this.game.active){
      $(event.target).addClass(char);
      this.game.newPlay(id, char);

    }

    if(this.board.checkForWinner(id,char)){
      this.game.active = false;
      this.announceWinner(player);
    }

  },
  announceWinner:function(player){
    console.log(player.name + " is the winner!")
    
  },


  render: function() {
    return this;
  }
});

export default ApplicationView;
