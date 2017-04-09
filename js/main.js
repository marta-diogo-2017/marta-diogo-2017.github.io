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

  function Website(props) {
    _classCallCheck(this, Website);

    var _this2 = _possibleConstructorReturn(this, (Website.__proto__ || Object.getPrototypeOf(Website)).call(this, props));

    _this2.state = {
      guests: [],
      newGuest: {
        name: '',
        email: '',
        other: '',
        message: ''
      }
    };

    _this2.renderForm = _this2.renderForm.bind(_this2);
    _this2.renderGuests = _this2.renderGuests.bind(_this2);
    _this2.onChange = _this2.onChange.bind(_this2);
    _this2.onSubmit = _this2.onSubmit.bind(_this2);
    return _this2;
  }

  _createClass(Website, [{
    key: "onSubmit",
    value: function onSubmit(e) {
      var newGuest = this.state.guests.concat([this.state.newGuest]);
      this.setState({ guests: newGuest });
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
        { onSubmit: this.onSubmit },
        React.createElement(
          "label",
          null,
          "Nome",
          React.createElement("input", { id: "name", type: "text", value: this.state.newGuest.name, onChange: this.onChange })
        ),
        React.createElement(
          "label",
          null,
          "E-mail",
          React.createElement("input", { id: "email", type: "email", value: this.state.newGuest.email, onChange: this.onChange })
        ),
        React.createElement(
          "label",
          null,
          "Estou a confirmar por mim e por ...",
          React.createElement("input", { id: "other", type: "text", value: this.state.newGuest.other, onChange: this.onChange })
        ),
        React.createElement(
          "label",
          null,
          "Deixa-nos a tua mensagem ap\xF3s o sinal (biiiiip!)",
          React.createElement("textarea", { id: "message", value: this.state.newGuest.message, onChange: this.onChange })
        ),
        React.createElement("input", { type: "submit", value: "Submit" })
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
          null,
          React.createElement(
            "thead",
            null,
            React.createElement(
              "tr",
              null,
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
            this.state.guests.map(function (guest, index) {
              return React.createElement(
                "tr",
                { key: index },
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
            })
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
          null,
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
              "A tradi\xE7\xE3o j\xE1 n\xE3o \xE9 o que era! H\xE1 2 anos atr\xE1s, decidimos \"juntar os trapinhos e as nossas escovas de dentes\". N\xE3o fiz\xE9mos lista de casamento porque, para n\xF3s, o mais importante \xE9 podermos celebrar o nosso amor e a nossa uni\xE3o com as pessoas que nos s\xE3o mais queridas. A melhor lembran\xE7a que nos podem dar \xE9 festejar o dia connosco. Se mesmo assim quiserem presentear-nos com algo mais, o nosso NIB \xE9: (colocar NIB num svg para n\xE3o adarem aqui a roubar n\xFAmeros por crawling. obg)"
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