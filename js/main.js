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

var Casamento = function (_React$Component) {
  _inherits(Casamento, _React$Component);

  function Casamento() {
    _classCallCheck(this, Casamento);

    return _possibleConstructorReturn(this, (Casamento.__proto__ || Object.getPrototypeOf(Casamento)).apply(this, arguments));
  }

  _createClass(Casamento, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h1",
        null,
        "Hello maria"
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