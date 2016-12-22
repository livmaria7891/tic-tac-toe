import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import BoardView from 'app/views/board_view.js';
import ApplicationView from 'app/views/application_view.js';
import Game from 'app/models/game.js';

$(document).ready(function(){
  var appView = new ApplicationView()

  appView.render()
});
