class Website extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      guests : {},
      newGuest : {
        name    : '',
        email   : '',
        other   : '',
        message : ''
      }
    };

    this.renderForm = this.renderForm.bind(this);
    this.renderGuests = this.renderGuests.bind(this);
    this.renderGuestList = this.renderGuestList.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount () {
    const db = firebase.database();
    const guestRef = db.ref().child('guests');
    guestRef.on('value', snap => {
      this.setState({
        guests: snap.val()
      })
    })
  }

  renderGuestList () {
    let g = [];
    let guestList = this.state.guests || {};

    for (var i = 0; i < Object.keys(guestList).length; i++) {
        var guest = this.state.guests[String(i + 1)];
        var guestRow = (
          <tr key={i}>
            <td>{i+1}</td>
            <td>{guest.name}</td>
            <td>{guest.email}</td>
            <td>{guest.other}</td>
            <td>{guest.message}</td>
          </tr>
        );

        g.push(guestRow);
      }
    return g.map(g => g);
    }

  onSubmit (e) {
    let guestList = this.state.guests || {};
    // add to guest list
    let guestListLength = Object.keys(guestList).length;
    console.log(guestListLength);

    let guestsCopy = Object.assign({}, this.state.guests);
    guestsCopy[String(guestListLength + 1)] = this.state.newGuest;
    this.setState({guests: guestsCopy});

    //change stuff in firebase ---
    const db = firebase.database();
    const guestRef = db.ref().child('guests');
    guestRef.set(guestsCopy);

    // reset new
    this.setState({newGuest: {name:'', email:'', other: '', message:''}})
    e.preventDefault();
  }

  onChange (e) {
    let value = e.target.value;
    let id = e.target.id;

    let stateCopy = Object.assign({}, this.state);
    stateCopy.newGuest[id] = value;
    this.setState(stateCopy);
  }

  renderForm(){
    return(
      <form className="form-horizontal col-xs-12" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Nome
          </label>
          <input className="form-control" id="name" type="text" value={this.state.newGuest.name} onChange={this.onChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="email">
            E-mail
          </label>
          <input className="form-control" id="email" type="email" value={this.state.newGuest.email} onChange={this.onChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="other">
            Estou a confirmar por mim e por ...
          </label>
          <input className="form-control" id="other" type="text" value={this.state.newGuest.other} onChange={this.onChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="message">
            Deixa-nos a tua mensagem após o sinal (biiiiip!)
          </label>
          <textarea className="form-control" id="message" value={this.state.newGuest.message} onChange={this.onChange} />
        </div>

        <input className="btn btn-default" type="submit" value="Submit"/>
      </form>
    );
  }

  renderGuests () {
    return (
      <section>
        <table className="table table-striped text-left">
          <thead>
            <tr>
              <td>Id</td>
              <td>Nome</td>
              <td>Email</td>
              <td>Other?</td>
              <td>Mensagem</td>
            </tr>
          </thead>
          <tbody>
            {
              this.renderGuestList()
            }
          </tbody>
        </table>
      </section>
    );
  }

  render() {
    return (
      <div className="row">
        <header>
          <input type="checkbox" id="menu"/>
          <label htmlFor="menu">
            <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
          </label>
          <nav>
            <a href="#fofos">Home</a>
            <a href="#maps">Mapa</a>
            <a href="#gifts">Uma Lembrança</a>
            <a href="#confirm">Confirmação e contactos</a>
          </nav>
        </header>
        <section id="fofos" className="section--before">
          <img src="/assets/img/title_main.svg"/>
        </section>
        <article className="container">
          <section>
            <div>
              <p>O grande dia está a chegar! Se estás a ler esta mensagem significa que és importante para nós e queremos muito contar com a tua presença  no nosso casamento, dia <strong>14 de Outubro de 2017</strong>.</p>
              <p>A cerimónia decorrerá na <strong>Igreja da Parede, às 11h</strong>, e a festa continuará na <strong>Quinta da Murta, em Bucelas</strong>.
              Convidamos-te a explorar o nosso site para descobrires mais sobre este dia!</p>
            </div>
          </section>
          <section id="maps">

          </section>
          <section id="gifts">
            <p>
              A tradição já não é o que era!
            </p>
            <p>
              Há 2 anos atrás, decidimos "juntar os trapinhos e as nossas escovas de dentes".
            </p>
            <p>
              Não fizemos lista de casamento porque, para nós, o mais importante é podermos celebrar o nosso amor e a nossa união com as pessoas que nos são mais queridas.
            </p>
            <p>
              A melhor lembrança que nos podem dar é festejar o dia connosco. <br />Se mesmo assim quiserem presentear-nos com algo mais, o nosso NIB é:
            </p>
            <p class="text-big">0000 0000 0000 0000</p>
          </section>
          <section id="confirm">
            <p>
              Por favor, confirma a tua presença até ao dia 14 de Agosto de 2017
            </p>

              {this.renderForm()}

            <div className="row text-center">
              <div className="col-xs-12 col-sm-6">
                <p>Marta Carvalho</p>
                <p>911 010 980</p>
              </div>
              <div className="col-xs-12 col-sm-6">
                <p>Diogo Ramalheira</p>
                <p>937 913 110</p>
              </div>
            </div>
          </section>
          {this.props.admin ? this.renderGuests() : false}
        </article>
      </div>
    );
  }
}
