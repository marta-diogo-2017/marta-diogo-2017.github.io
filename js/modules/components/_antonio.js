class Antonio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tonio: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    let value = e.target.value;
    this.setState({tonio: value});
  }

  onSubmit(e) {
    this.props.valAntonio(this.state.tonio);
    e.preventDefault();
  }

  render() {
    return (
      <section className="section--before row">
        <img src="/assets/img/title_before_main.svg" alt="Marta e Diogo" />

        <form onSubmit={this.onSubmit}>
          <div className="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-4 col-md-4 text-center">
            <div className="form-group">
              <input placeholder="insira password" className="form-control" type="text" onChange={this.onChange}/>
            </div>
            <div className="form-group">
              <input className="btn btn-default" type="submit" value="Entrar" />
            </div>
          </div>
        </form>

        <img src="/assets/img/title_before_second.svg" alt="Marta e Diogo" />
      </section>
    );
  }

}
