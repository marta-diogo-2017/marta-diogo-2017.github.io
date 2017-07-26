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

            tonio: '',

            validation: true

        };

        _this.onChange = _this.onChange.bind(_this);

        _this.onSubmit = _this.onSubmit.bind(_this);

        return _this;
    }

    _createClass(Antonio, [{
        key: "onChange",
        value: function onChange(e) {

            var value = e.target.value;

            if (!this.state.validation && value != this.state.tonio) {

                this.setState({ validation: true });
            }

            this.setState({ tonio: value });
        }
    }, {
        key: "onSubmit",
        value: function onSubmit(e) {

            this.props.valAntonio(this.state.tonio);

            if (!this.props.valAntonio(this.state.tonio)) {

                this.setState({ validation: false });
            }

            e.preventDefault();
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "section",
                { className: "section--before u--color-white" },
                React.createElement("img", { className: "front-page__img", src: "/assets/img/flower_up.svg", alt: "Marta e Diogo" }),
                React.createElement(
                    "form",
                    { className: "", onSubmit: this.onSubmit },
                    React.createElement(
                        "div",
                        { className: "col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-4 col-md-4 text-center" },
                        React.createElement(
                            "div",
                            { className: this.state.validation ? "form-group" : "form-group validation-error" },
                            React.createElement("input", { placeholder: "insira password", className: "form-control", type: "text", onChange: this.onChange }),
                            !this.state.validation ? React.createElement(
                                "p",
                                null,
                                "Password inv\xE1lida :("
                            ) : null
                        ),
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement("input", { className: "btn btn-default", type: "submit", value: "Entrar" })
                        )
                    )
                )
            );
        }
    }]);

    return Antonio;
}(React.Component);

var Iframemap = React.createClass({
    displayName: "Iframemap",


    render: function render() {
        var Iframe = this.props.iframe;

        return React.createElement(
            "div",
            null,
            React.createElement(Iframe, { src: this.props.src, className: this.props.className })
        );
    }
});

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

            },

            submitted: false,

            validation: true

        };

        _this2.renderForm = _this2.renderForm.bind(_this2);

        _this2.renderGuests = _this2.renderGuests.bind(_this2);

        _this2.renderGuestList = _this2.renderGuestList.bind(_this2);

        _this2.onChange = _this2.onChange.bind(_this2);

        _this2.onSubmit = _this2.onSubmit.bind(_this2);

        _this2.iframe = _this2.iframe.bind(_this2);

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
        key: "iframe",
        value: function iframe(link) {

            return {

                __html: React.createElement("iframe", { className: "maps__mapa", src: link, frameborder: "0", style: "border:0", allowfullscreen: true })

            };
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

            if (this.state.newGuest.name != '' && this.state.newGuest.email != '') {

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

                this.setState({ newGuest: { name: '', email: '', other: '', message: '' }, submitted: true });
            } else {

                this.setState({ validation: false });
            }

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

            if (!this.state.validation && this.state.newGuest.name != '' && this.state.newGuest.email != '') {

                this.setState({ validation: true });
            }
        }
    }, {
        key: "renderForm",
        value: function renderForm() {

            return React.createElement(
                "form",
                { className: "form-horizontal col-xs-12 margin-bottom-lol", onSubmit: this.onSubmit },
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
                this.state.validation ? null : React.createElement(
                    "p",
                    null,
                    "Parece que falta preencher o teu nome ou o teu email :)"
                ),
                this.state.submitted ? React.createElement(
                    "p",
                    null,
                    "Confirma\xE7\xE3o submetida com sucesso! :) Obrigada!"
                ) : React.createElement("input", { className: "btn btn-default", type: "submit", value: "Submit" })
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
                { className: "row" },
                React.createElement(
                    "section",
                    { id: "fofos", className: "section--before u--color-white" },
                    React.createElement("img", { className: "front-page__img", src: "/assets/img/title_main.svg" }),
                    React.createElement(
                        "div",
                        { className: "container" },
                        React.createElement(
                            "p",
                            null,
                            "O grande dia est\xE1 a chegar!"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Se est\xE1s a ler esta mensagem significa que \xE9s importante para n\xF3s e queremos muito contar com a tua presen\xE7a  no nosso casamento."
                        )
                    )
                ),
                React.createElement(
                    "article",
                    null,
                    React.createElement(
                        "div",
                        { className: "container" },
                        React.createElement(
                            "section",
                            null,
                            React.createElement("img", { className: "flower-power", src: "/assets/img/flower_down_min.svg", alt: "Marta e Diogo" }),
                            React.createElement(
                                "div",
                                null,
                                React.createElement(
                                    "p",
                                    null,
                                    "S\xE1bado, 14 de Outubro de 2017"
                                ),
                                React.createElement("img", { className: "img-responsive location", src: "/assets/img/locations.svg", alt: "Marta e Diogo" })
                            ),
                            React.createElement("img", { className: "flower-power", src: "/assets/img/flower_up_min.svg", alt: "Marta e Diogo" })
                        ),
                        React.createElement(
                            "section",
                            { id: "maps", className: "row section--block" },
                            React.createElement(
                                "h2",
                                null,
                                React.createElement("img", { className: "section__title", src: "/assets/img/title--02.svg", alt: "mapas" })
                            ),
                            React.createElement(
                                "div",
                                { className: "col-xs-12 col-sm-6 margin-bottom-lol" },
                                React.createElement("img", { src: "/assets/img/igrejaParede.jpg", className: "img-responsive" }),
                                React.createElement(
                                    "p",
                                    { className: "legend" },
                                    React.createElement(
                                        "strong",
                                        null,
                                        "Igreja da Parede"
                                    )
                                ),
                                React.createElement(
                                    "p",
                                    { className: "legend" },
                                    "Avenida Amadeu Duarte, 514, 2775 Parede"
                                ),
                                React.createElement(
                                    "p",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://goo.gl/maps/ucFxkJNWc852", target: "_blank" },
                                        "mapa aqui"
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-xs-12 col-sm-6 margin-bottom-lol" },
                                React.createElement("img", { src: "/assets/img/quintaMurta.jpg", className: "img-responsive" }),
                                React.createElement(
                                    "p",
                                    { className: "legend" },
                                    React.createElement(
                                        "strong",
                                        null,
                                        "Quinta da Murta"
                                    )
                                ),
                                React.createElement(
                                    "p",
                                    { className: "legend" },
                                    "Estr. Velha do Boi\xE7\xE3o, 632, 2670 Bucelas"
                                ),
                                React.createElement(
                                    "p",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://goo.gl/maps/BRTrs9c8gvn", target: "_blank" },
                                        "mapa aqui"
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { style: { 'backgroundColor': '#eee' } },
                        React.createElement(
                            "section",
                            { className: "container" },
                            React.createElement("img", { className: "flower-power", src: "/assets/img/flower_down_min.svg", alt: "Marta e Diogo" }),
                            React.createElement(
                                "h2",
                                null,
                                React.createElement("img", { className: "section__title", src: "/assets/img/title--04.svg", alt: "fotografias" })
                            ),
                            React.createElement(
                                "p",
                                { className: "margin-bottom-lol" },
                                "Para nos ajudares com o registo fotogr\xE1fico deste dia, faz o download da aplica\xE7\xE3o Wedshoots atrav\xE9s do site ",
                                React.createElement(
                                    "a",
                                    { href: "https://www.wedshoots.com/pt" },
                                    'https://www.wedshoots.com/pt'
                                ),
                                " (dispon\xEDvel tamb\xE9m na AppStore e Google Play). Aqui poder\xE1s partilhar connosco as fotografias do dia."
                            ),
                            React.createElement(
                                "div",
                                { className: "row margin-bottom-lol" },
                                React.createElement(
                                    "div",
                                    { className: "col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-4 col-md-4", style: { 'borderRadius': '16px', 'backgroundColor': 'white' } },
                                    React.createElement(
                                        "p",
                                        { className: "legend" },
                                        "C\xF3digo do album"
                                    ),
                                    React.createElement(
                                        "p",
                                        { className: "" },
                                        React.createElement(
                                            "strong",
                                            null,
                                            "PT289d7bca"
                                        )
                                    )
                                )
                            ),
                            React.createElement("img", { className: "flower-power", src: "/assets/img/flower_up_min.svg", alt: "Marta e Diogo" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "container" },
                        React.createElement(
                            "section",
                            { id: "gifts" },
                            React.createElement("img", { className: "flower-power", src: "/assets/img/flower_down_min.svg", alt: "Marta e Diogo" }),
                            React.createElement(
                                "h2",
                                null,
                                React.createElement("img", { className: "section__title", src: "/assets/img/title--01.svg", alt: "uma lembran\xE7a" })
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Para n\xF3s, o mais importante \xE9 podermos celebrar o nosso amor com as pessoas que nos s\xE3o mais queridas."
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
                                { className: "text-big" },
                                "PT50 0036 0196 9910 0049 2265 2"
                            ),
                            React.createElement("img", { className: "flower-power", src: "/assets/img/flower_up_min.svg", alt: "Marta e Diogo" })
                        ),
                        React.createElement(
                            "section",
                            { id: "confirm" },
                            React.createElement(
                                "h2",
                                null,
                                React.createElement("img", { className: "section__title", src: "/assets/img/title--03.svg", alt: "confirma\xE7\xE3o" })
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Por favor, confirma a tua presen\xE7a at\xE9 ao dia 14 de Agosto de 2017"
                            ),
                            React.createElement(
                                "div",
                                { className: "" },
                                this.renderForm()
                            ),
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-xs-12 col-sm-6" },
                                    React.createElement(
                                        "p",
                                        { className: "legend" },
                                        React.createElement(
                                            "strong",
                                            null,
                                            "Marta Carvalho"
                                        )
                                    ),
                                    React.createElement(
                                        "p",
                                        { className: "legend" },
                                        "911 010 980"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-xs-12 col-sm-6" },
                                    React.createElement(
                                        "p",
                                        { className: "legend" },
                                        React.createElement(
                                            "strong",
                                            null,
                                            "Diogo Ramalheira"
                                        )
                                    ),
                                    React.createElement(
                                        "p",
                                        { className: "legend" },
                                        "937 913 110"
                                    )
                                ),
                                React.createElement("img", { className: "flower-power", src: "/assets/img/flower_up_min.svg", alt: "Marta e Diogo" })
                            )
                        ),
                        this.props.admin ? this.renderGuests() : false
                    )
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
        _this4.whatShouldIRender = _this4.whatShouldIRender.bind(_this4);
        return _this4;
    }

    _createClass(Casamento, [{
        key: "valAntonio",
        value: function valAntonio(input) {
            if (input == '14out17') {
                // 14out17
                this.setState({ visitor: true });
            }
            if (input == 'martA9494') {
                // martA9494
                this.setState({ admin: true });
            } else {
                return false;
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
                { className: this.state.visitor || this.state.admin ? "container-fluid" : "" },
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