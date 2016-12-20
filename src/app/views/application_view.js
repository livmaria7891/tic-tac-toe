import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Game from 'app/models/game.js';

const ApplicationView = Backbone.View.extend({
  el: '.container',
  initialize: function() {

    this.input = {
      name1: this.$('.player-name-form input[id="name"]'),
      // name2: this.$('.player2-name-form input[id="name"]')
    };

    this.render();
  },

  events: {
    'click .game_initializer': 'createGame',
    'click .player1-button': 'getPlayer1Name',
    'click .player2-button': 'getPlayer2Name',
  },

  //working on this
  getPlayer1Name:function(event){
    event.preventDefault()

    var name = this.$('.player-name-form input[id="name"]').val()
    console.log(name)
    $('label').text("Second Player's Name");
    $(".player1-button").toggleClass("player1-button player2-button");

    //Call Player1 name function here
  },

  getPlayer2Name:function(){
    event.preventDefault()

    var name = this.$('.player-name-form input[id="name"]');

    console.log(name.val())

    //Call Player2 name function here

  },





  // createGame:function() {
  //   var game = new Game();
  // },
  //
  // addPlayer1Name:function(event){
  //   event.preventDefault();
  //   console.log(this.input.name1.val());
  //
  //   $("#modal_show_1").hide(500);
  //   $("#modal_show_2").show(500);
  // },
  //
  // addPlayer2Name:function(event){
  //   event.preventDefault();
  //   console.log('getting there..');
  //   // console.log(this.input.name2.val());
  //
  //   // $("#modal_show_2").hide(500);
  //   // $("#modal_show_3").show(500);
  //   // $("#play-button").hide();
  // },


  render: function() {
    return this;
  }
});

export default ApplicationView;
