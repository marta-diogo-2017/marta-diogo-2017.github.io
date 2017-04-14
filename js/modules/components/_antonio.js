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
      <div>
        <h1>Marta e Diogo 2017</h1>
        <p>O casamento do ano!</p>

        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6">
              <div className="form-group">
                <input className="form-control" type="text" onChange={this.onChange}/>
              </div>
              <div className="form-group">
                <input className="btn btn-default" type="submit" value="Entrar" />
              </div>
            </div>
          </div>

        </form>
      </div>
    );
  }

}
