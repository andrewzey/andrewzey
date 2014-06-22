// Generated by CoffeeScript 1.7.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.App = (function(_super) {
    __extends(App, _super);

    function App() {
      return App.__super__.constructor.apply(this, arguments);
    }

    App.prototype.initialize = function() {
      var deck;
      this.set('deck', deck = new Deck());
      this.set('playerHand', deck.dealPlayer());
      this.set('dealerHand', deck.dealDealer());
      return this.set('initialResult', null);
    };

    App.prototype.start = function() {
      var dealerScore, playerScore;
      this.get('playerHand').at(0).flip();
      this.get('playerHand').at(1).flip();
      this.get('dealerHand').at(1).flip();
      playerScore = this.get('playerHand').scores();
      if (playerScore === 21) {
        this.get('dealerHand').at(0).flip();
        dealerScore = this.get('dealerHand').scores();
        if (dealerScore === 21) {
          this.set('initialResult', 'draw');
        } else {
          this.set('initialResult', 'blackjack');
        }
      }
      this.get('playerHand').on('bust', (function(_this) {
        return function() {
          return _this.trigger('bust', _this);
        };
      })(this));
      this.get('playerHand').on('done', (function(_this) {
        return function() {
          return _this.get('dealerHand').playDealer();
        };
      })(this));
      return this.get('dealerHand').on('done', (function(_this) {
        return function() {
          playerScore = _this.get('playerHand').scores();
          dealerScore = _this.get('dealerHand').scores();
          if (playerScore === dealerScore) {
            return _this.trigger('draw', _this);
          } else if (dealerScore > 21) {
            return _this.trigger('won', _this);
          } else if (playerScore < dealerScore) {
            return _this.trigger('lost', _this);
          } else if (playerScore > dealerScore) {
            return _this.trigger('won', _this);
          }
        };
      })(this));
    };

    return App;

  })(Backbone.Model);

}).call(this);

//# sourceMappingURL=App.map
