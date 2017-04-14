class Website extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      guests : [],
      newGuest : {
        name    : '',
        email   : '',
        other   : '',
        message : ''
      }
    };

    this.renderForm = this.renderForm.bind(this);
    this.renderGuests = this.renderGuests.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (e) {
    let newGuest = this.state.guests.concat([this.state.newGuest]);
    this.setState({guests: newGuest});
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
      <form className="form-horizontal" onSubmit={this.onSubmit}>
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
        <table>
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
              this.state.guests.map( (guest, index) => {
                return (
                  <tr key={index}>
                    <td>#{index}</td>
                    <td>{guest.name}</td>
                    <td>{guest.email}</td>
                    <td>{guest.other}</td>
                    <td>{guest.message}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </section>
    );
  }

  render() {
    return (
      <div>
        <header>
          <h1>Martuxa e Dioguito</h1>
          <div>
            <input type="checkbox" />
            <label>
              <span></span>
              <span></span>
              <span></span>
            </label>
            <nav>
              <a href="#fofos">Home</a>
              <a href="#maps">Mapa</a>
              <a href="#sleep">Pernoitar</a>
              <a href="#gifts">Uma Lembrança</a>
              <a href="#confirm">Confirmação e contactos</a>
            </nav>
          </div>
        </header>
        <main className="container">
          <section id="fofos">
            <div>
              <p>O grande dia está a chegar! Se estás a ler esta mensagem significa que és importante para nós e queremos muito contar com a tua presença  no nosso casamento, dia 14 de Outubro de 2017.</p>
              <p>A cerimónia decorrerá na Igreja da Parede, às 11h, e a festa continuará na Quinta da Murta, em Bucelas.
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

            <div>
              <p>Marta Carvalho</p>
              <p>911 010 980</p>
            </div>
            <div>
              <p>Diogo Ramalheira</p>
              <p>937 913 110</p>
            </div>
          </section>
          {this.props.admin ? this.renderGuests() : false}
        </main>
      </div>
    );
  }
}
