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
          <input type="text" onChange={this.onChange}/>
          <button>go</button>
        </form>
      </div>
    );
  }

}
