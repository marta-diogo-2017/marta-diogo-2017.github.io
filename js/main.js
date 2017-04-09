"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCwO6sSV86vsvzrNocIo3FOVWJ9hyO3ID4",
  authDomain: "casamento-4ab7b.firebaseapp.com",
  databaseURL: "https://casamento-4ab7b.firebaseio.com",
  storageBucket: "casamento-4ab7b.appspot.com",
  messagingSenderId: "777620829455"
};
firebase.initializeApp(config);

var Antonio = function (_React$Component) {
  _inherits(Antonio, _React$Component);

  function Antonio(props) {
    _classCallCheck(this, Antonio);

    var _this = _possibleConstructorReturn(this, (Antonio.__proto__ || Object.getPrototypeOf(Antonio)).call(this, props));

    _this.state = {
      tonio: ''
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(Antonio, [{
    key: "onChange",
    value: function onChange(e) {
      var value = e.target.value;
      this.setState({ tonio: value });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      this.props.valAntonio(this.state.tonio);
      e.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Marta e Diogo 2017"
        ),
        React.createElement(
          "p",
          null,
          "O casamento do ano!"
        ),
        React.createElement(
          "form",
          { onSubmit: this.onSubmit },
          React.createElement("input", { type: "text", onChange: this.onChange }),
          React.createElement(
            "button",
            null,
            "go"
          )
        )
      );
    }
  }]);

  return Antonio;
}(React.Component);

var Website = function (_React$Component2) {
  _inherits(Website, _React$Component2);

  function Website() {
    _classCallCheck(this, Website);

    return _possibleConstructorReturn(this, (Website.__proto__ || Object.getPrototypeOf(Website)).apply(this, arguments));
  }

  _createClass(Website, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h1",
        null,
        "Oi Maria! ",
        this.props.admin ? 'Queres cá vire' : false
      );
    }
  }]);

  return Website;
}(React.Component);

var Casamento = function (_React$Component3) {
  _inherits(Casamento, _React$Component3);

  function Casamento(props) {
    _classCallCheck(this, Casamento);

    var _this3 = _possibleConstructorReturn(this, (Casamento.__proto__ || Object.getPrototypeOf(Casamento)).call(this, props));

    _this3.state = {
      visitor: false,
      admin: false,
      antonio: ''
    };

    _this3.valAntonio = _this3.valAntonio.bind(_this3);
    return _this3;
  }

  _createClass(Casamento, [{
    key: "valAntonio",
    value: function valAntonio(input) {
      if (input == 'maria') {
        this.setState({ visitor: true });
      }
      if (input == 'maria1') {
        this.setState({ admin: true });
      }
    }
  }, {
    key: "whatShouldIRender",
    value: function whatShouldIRender() {
      var visitor = this.state.visitor;
      var admin = this.state.admin;

      if (visitor) {
        return React.createElement(Website, { admin: false });
      } else if (admin) {
        return React.createElement(Website, { admin: true });
      } else {
        return React.createElement(Antonio, { antonio: this.state.antonio,
          valAntonio: this.valAntonio });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "main",
        null,
        this.whatShouldIRender()
      );
    }
  }]);

  return Casamento;
}(React.Component);

// class WeddingApp extends React.Component {
//   render() {
//     return <h1>Hello {this.props.name}</h1>;
//   }
// }

ReactDOM.render(React.createElement(Casamento, null), document.getElementById('maria'));