class Casamento extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      validation : {
        visitor: false,
        admin: false
      }
    };
  }

  renderPassword () {
    return (
      <div>
        <h1>Marta e Diogo 2017</h1>
        <p>O casamento do ano!</p>

        <form onSubmit={this.onPasswordSubmit}>
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }

  render() {
    let visitor = this.state.validation.visitor;
    let admin = this.state.validation.admin;


    if ()
    return (
      <main>
        {this.renderMyWedding}
      </main>
    );
  }
}
