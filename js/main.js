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

//// =include ./vendors/_react.min.js
//// =include ./vendors/_react-dom.min.js

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
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6" },
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement("input", { className: "form-control", type: "text", onChange: this.onChange })
              ),
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement("input", { className: "btn btn-default", type: "submit", value: "Entrar" })
              )
            )
          )
        )
      );
    }
  }]);

  return Antonio;
}(React.Component);

var Website = function (_React$Component2) {
  _inherits(Website, _React$Component2);

  function Website(props) {
    _classCallCheck(this, Website);

    var _this2 = _possibleConstructorReturn(this, (Website.__proto__ || Object.getPrototypeOf(Website)).call(this, props));

    _this2.state = {
      guests: {},
      newGuest: {
        name: '',
        email: '',
        other: '',
        message: ''
      }
    };

    _this2.renderForm = _this2.renderForm.bind(_this2);
    _this2.renderGuests = _this2.renderGuests.bind(_this2);
    _this2.renderGuestList = _this2.renderGuestList.bind(_this2);
    _this2.onChange = _this2.onChange.bind(_this2);
    _this2.onSubmit = _this2.onSubmit.bind(_this2);
    return _this2;
  }

  _createClass(Website, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var db = firebase.database();
      var guestRef = db.ref().child('guests');
      guestRef.on('value', function (snap) {
        _this3.setState({
          guests: snap.val()
        });
      });
    }
  }, {
    key: "renderGuestList",
    value: function renderGuestList() {
      var g = [];
      var guestList = this.state.guests || {};

      for (var i = 0; i < Object.keys(guestList).length; i++) {
        var guest = this.state.guests[String(i + 1)];
        var guestRow = React.createElement(
          "tr",
          { key: i },
          React.createElement(
            "td",
            null,
            i + 1
          ),
          React.createElement(
            "td",
            null,
            guest.name
          ),
          React.createElement(
            "td",
            null,
            guest.email
          ),
          React.createElement(
            "td",
            null,
            guest.other
          ),
          React.createElement(
            "td",
            null,
            guest.message
          )
        );

        g.push(guestRow);
      }
      return g.map(function (g) {
        return g;
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      var guestList = this.state.guests || {};
      // add to guest list
      var guestListLength = Object.keys(guestList).length;
      console.log(guestListLength);

      var guestsCopy = Object.assign({}, this.state.guests);
      guestsCopy[String(guestListLength + 1)] = this.state.newGuest;
      this.setState({ guests: guestsCopy });

      //change stuff in firebase ---
      var db = firebase.database();
      var guestRef = db.ref().child('guests');
      guestRef.set(guestsCopy);

      // reset new
      this.setState({ newGuest: { name: '', email: '', other: '', message: '' } });
      e.preventDefault();
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      var value = e.target.value;
      var id = e.target.id;

      var stateCopy = Object.assign({}, this.state);
      stateCopy.newGuest[id] = value;
      this.setState(stateCopy);
    }
  }, {
    key: "renderForm",
    value: function renderForm() {
      return React.createElement(
        "form",
        { className: "form-horizontal", onSubmit: this.onSubmit },
        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement(
            "label",
            { htmlFor: "name" },
            "Nome"
          ),
          React.createElement("input", { className: "form-control", id: "name", type: "text", value: this.state.newGuest.name, onChange: this.onChange })
        ),
        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement(
            "label",
            { htmlFor: "email" },
            "E-mail"
          ),
          React.createElement("input", { className: "form-control", id: "email", type: "email", value: this.state.newGuest.email, onChange: this.onChange })
        ),
        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement(
            "label",
            { htmlFor: "other" },
            "Estou a confirmar por mim e por ..."
          ),
          React.createElement("input", { className: "form-control", id: "other", type: "text", value: this.state.newGuest.other, onChange: this.onChange })
        ),
        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement(
            "label",
            { htmlFor: "message" },
            "Deixa-nos a tua mensagem ap\xF3s o sinal (biiiiip!)"
          ),
          React.createElement("textarea", { className: "form-control", id: "message", value: this.state.newGuest.message, onChange: this.onChange })
        ),
        React.createElement("input", { className: "btn btn-default", type: "submit", value: "Submit" })
      );
    }
  }, {
    key: "renderGuests",
    value: function renderGuests() {
      return React.createElement(
        "section",
        null,
        React.createElement(
          "table",
          { className: "table table-striped text-left" },
          React.createElement(
            "thead",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                "Id"
              ),
              React.createElement(
                "td",
                null,
                "Nome"
              ),
              React.createElement(
                "td",
                null,
                "Email"
              ),
              React.createElement(
                "td",
                null,
                "Other?"
              ),
              React.createElement(
                "td",
                null,
                "Mensagem"
              )
            )
          ),
          React.createElement(
            "tbody",
            null,
            this.renderGuestList()
          )
        )
      );
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "header",
          null,
          React.createElement(
            "h1",
            null,
            "Martuxa e Dioguito"
          ),
          React.createElement(
            "div",
            null,
            React.createElement("input", { type: "checkbox" }),
            React.createElement(
              "label",
              null,
              React.createElement("span", null),
              React.createElement("span", null),
              React.createElement("span", null)
            ),
            React.createElement(
              "nav",
              null,
              React.createElement(
                "a",
                { href: "#fofos" },
                "Home"
              ),
              React.createElement(
                "a",
                { href: "#maps" },
                "Mapa"
              ),
              React.createElement(
                "a",
                { href: "#sleep" },
                "Pernoitar"
              ),
              React.createElement(
                "a",
                { href: "#gifts" },
                "Uma Lembran\xE7a"
              ),
              React.createElement(
                "a",
                { href: "#confirm" },
                "Confirma\xE7\xE3o e contactos"
              )
            )
          )
        ),
        React.createElement(
          "main",
          { className: "container" },
          React.createElement(
            "section",
            { id: "fofos" },
            React.createElement(
              "div",
              null,
              React.createElement(
                "p",
                null,
                "O grande dia est\xE1 a chegar! Se est\xE1s a ler esta mensagem significa que \xE9s importante para n\xF3s e queremos muito contar com a tua presen\xE7a  no nosso casamento, dia 14 de Outubro de 2017."
              ),
              React.createElement(
                "p",
                null,
                "A cerim\xF3nia decorrer\xE1 na Igreja da Parede, \xE0s 11h, e a festa continuar\xE1 na Quinta da Murta, em Bucelas. Convidamos-te a explorar o nosso site para descobrires mais sobre este dia!"
              )
            )
          ),
          React.createElement("section", { id: "maps" }),
          React.createElement(
            "section",
            { id: "gifts" },
            React.createElement(
              "p",
              null,
              "A tradi\xE7\xE3o j\xE1 n\xE3o \xE9 o que era!"
            ),
            React.createElement(
              "p",
              null,
              "H\xE1 2 anos atr\xE1s, decidimos \"juntar os trapinhos e as nossas escovas de dentes\"."
            ),
            React.createElement(
              "p",
              null,
              "N\xE3o fizemos lista de casamento porque, para n\xF3s, o mais importante \xE9 podermos celebrar o nosso amor e a nossa uni\xE3o com as pessoas que nos s\xE3o mais queridas."
            ),
            React.createElement(
              "p",
              null,
              "A melhor lembran\xE7a que nos podem dar \xE9 festejar o dia connosco. ",
              React.createElement("br", null),
              "Se mesmo assim quiserem presentear-nos com algo mais, o nosso NIB \xE9:"
            ),
            React.createElement(
              "p",
              { "class": "text-big" },
              "0000 0000 0000 0000"
            )
          ),
          React.createElement(
            "section",
            { id: "confirm" },
            React.createElement(
              "p",
              null,
              "Por favor, confirma a tua presen\xE7a at\xE9 ao dia 14 de Agosto de 2017"
            ),
            this.renderForm(),
            React.createElement(
              "div",
              null,
              React.createElement(
                "p",
                null,
                "Marta Carvalho"
              ),
              React.createElement(
                "p",
                null,
                "911 010 980"
              )
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                "p",
                null,
                "Diogo Ramalheira"
              ),
              React.createElement(
                "p",
                null,
                "937 913 110"
              )
            )
          ),
          this.props.admin ? this.renderGuests() : false
        )
      );
    }
  }]);

  return Website;
}(React.Component);

var Casamento = function (_React$Component3) {
  _inherits(Casamento, _React$Component3);

  function Casamento(props) {
    _classCallCheck(this, Casamento);

    var _this4 = _possibleConstructorReturn(this, (Casamento.__proto__ || Object.getPrototypeOf(Casamento)).call(this, props));

    _this4.state = {
      visitor: false,
      admin: false,
      antonio: ''
    };

    _this4.valAntonio = _this4.valAntonio.bind(_this4);
    return _this4;
  }

  _createClass(Casamento, [{
    key: "valAntonio",
    value: function valAntonio(input) {
      //if (input == '14out17') {
      // 14out17
      //this.setState({visitor: true})
      //}
      if (input == '') {
        // martA9494
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