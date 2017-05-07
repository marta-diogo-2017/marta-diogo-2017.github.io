class Antonio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tonio: '',
      validation: true
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    let value = e.target.value;
    if (!this.state.validation && value != this.state.tonio) {
      this.setState({validation: true});
    }

    this.setState({tonio: value});
  }

  onSubmit(e) {
    this.props.valAntonio(this.state.tonio);

    if (!this.props.valAntonio(this.state.tonio)) {
      this.setState({validation: false})
    }
    e.preventDefault();
  }

  render() {
    return (
      <section className="section--before row u--color-white">
        <img className="front-page__img" src="/assets/img/flower_up.svg" alt="Marta e Diogo" />

        <form onSubmit={this.onSubmit}>
          <div className="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-4 col-md-4 text-center">
            <div className={this.state.validation ? "form-group" : "form-group validation-error"}>
              <input placeholder="insira password" className="form-control" type="text" onChange={this.onChange}/>
              {!this.state.validation ? <p>Password inválida :(</p> : null }
            </div>
            <div className="form-group">
              <input className="btn btn-default" type="submit" value="Entrar" />
            </div>
          </div>
        </form>
      </section>
    );
  }

}
