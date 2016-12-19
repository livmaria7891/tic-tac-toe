import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import BoardView from 'app/views/board_view.js';

$(document).ready(function(){

  var board = new BoardView({

  });

  board.render();

  $("#modal_1_button").click(function(){

    $("#modal_show_1").hide(500);
    $("#modal_show_2").show(500);
  });

  $("#modal_2_button").click(function(){

    $("#modal_show_2").hide(500);
    $("#modal_show_3").show(500);
    $("#play-button").hide();
  });

});
