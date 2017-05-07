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
      },
      submitted: false,
      validation: true
    };

    this.renderForm = this.renderForm.bind(this);
    this.renderGuests = this.renderGuests.bind(this);
    this.renderGuestList = this.renderGuestList.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.iframe = this.iframe.bind(this);
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

  iframe(link) {
    return {
      __html: <iframe className="maps__mapa" src={link} frameborder="0" style="border:0" allowfullscreen></iframe>
    }
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
    if (this.state.newGuest.name != '' && this.state.newGuest.email != '') {
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
      this.setState({newGuest: {name:'', email:'', other: '', message:''}, submitted: true});
    } else {
      this.setState({validation: false});
    }

    e.preventDefault();
  }

  onChange (e) {
    let value = e.target.value;
    let id = e.target.id;

    let stateCopy = Object.assign({}, this.state);
    stateCopy.newGuest[id] = value;
    this.setState(stateCopy);

    if (!this.state.validation && this.state.newGuest.name != '' && this.state.newGuest.email != '') {
      this.setState({validation: true});
    }
  }

  renderForm(){
    return(
      <form className="form-horizontal col-xs-12 margin-bottom-lol" onSubmit={this.onSubmit}>
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

        {this.state.validation ? null : <p>Parece que falta preencher o teu nome ou o teu email :)</p>}
        {this.state.submitted ? <p>Confirmação submetida com sucesso! :) Obrigada!</p> : <input className="btn btn-default" type="submit" value="Submit"/>}
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
        {/*<header>
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
        </header>*/}
        <section id="fofos" className="section--before u--color-white">
          <img className="front-page__img"src="/assets/img/title_main.svg"/>
          <div className="container">
            <p>O grande dia está a chegar!</p>
            <p>Se estás a ler esta mensagem significa que és importante para nós e queremos muito contar com a tua presença  no nosso casamento.</p>
          </div>
        </section>
        <article className="container">
          <section>
            <img className="flower-power" src="/assets/img/flower_down_min.svg" alt="Marta e Diogo" />
            <div>
              <p>Sábado, 14 de Outubro de 2017</p>
              <img className="img-responsive location" src="/assets/img/locations.svg" alt="Marta e Diogo" />
            </div>
            <img className="flower-power" src="/assets/img/flower_up_min.svg" alt="Marta e Diogo" />
          </section>
          <section id="maps" className="row section--block">
            <h2><img className="section__title" src="/assets/img/title--02.svg" alt="mapas"/></h2>
            <div className="col-xs-12 col-sm-6 margin-bottom-lol">
              <img src="/assets/img/igrejaParede.jpg" className="img-responsive" />
              <p className="legend">Avenida Amadeu Duarte, 514, 2775 Parede</p>
              <p><a href="https://goo.gl/maps/ucFxkJNWc852" target="_blank">mapa aqui</a></p>
            </div>
            <div className="col-xs-12 col-sm-6 margin-bottom-lol">
              <img src="/assets/img/quintaMurta.jpg" className="img-responsive" />
              <p className="legend">Estr. Velha do Boição, 632, 2670 Bucelas</p>
              <p><a href="https://goo.gl/maps/BRTrs9c8gvn" target="_blank">mapa aqui</a></p>
              {/*<iframe className="maps__mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.8263184680463!2d-9.129081084648762!3d38.927947079565996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd192bb53d9f367f%3A0x8adecf65a99496a0!2sQuinta+da+Murta!5e0!3m2!1sen!2spt!4v1494182016637" frameborder="0" style="border:0" allowfullscreen></iframe>*/}
            </div>
          </section>
          <section id="gifts">
            <img className="flower-power" src="/assets/img/flower_down_min.svg" alt="Marta e Diogo" />
            <h2><img className="section__title" src="/assets/img/title--01.svg" alt="uma lembrança"/></h2>
            <p>

              Para nós, o mais importante é podermos celebrar o nosso amor com as pessoas que nos são mais queridas.
            </p>
            <p>
              A melhor lembrança que nos podem dar é festejar o dia connosco. <br />Se mesmo assim quiserem presentear-nos com algo mais, o nosso NIB é:
            </p>
            <p className="text-big">PT50 0036 0196 9910 0049 2265 2</p>
            <img className="flower-power" src="/assets/img/flower_up_min.svg" alt="Marta e Diogo" />
          </section>
          <section id="confirm">
            <h2><img className="section__title" src="/assets/img/title--03.svg" alt="confirmação"/></h2>
            <p>
              Por favor, confirma a tua presença até ao dia 14 de Agosto de 2017
            </p>
            <div className="">
              {this.renderForm()}
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <p className="legend"><strong>Marta Carvalho</strong></p>
                <p className="legend">911 010 980</p>
              </div>
              <div className="col-xs-12 col-sm-6">
                <p className="legend"><strong>Diogo Ramalheira</strong></p>
                <p className="legend">937 913 110</p>
              </div>
              <img className="flower-power" src="/assets/img/flower_up_min.svg" alt="Marta e Diogo" />
            </div>
          </section>
          {this.props.admin ? this.renderGuests() : false}
        </article>
      </div>
    );
  }
}
