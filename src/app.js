import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import BoardView from 'app/views/board_view.js';
import ApplicationView from 'app/views/application_view.js';
import Game from 'app/models/game.js';

$(document).ready(function(){
  var appView = new ApplicationView()
  var board = new BoardView();

  board.render();

  // $("#modal_1_button").click(function(){
  //
  //   $("#modal_show_1").hide(500);
  //   $("#modal_show_2").show(500);
  // });
  //
  // $("#modal_2_button").click(function(){
  //
  //   $("#modal_show_2").hide(500);
  //   $("#modal_show_3").show(500);
  //   $("#play-button").hide();
  // });

});
