class Casamento extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visitor: false,
      admin: false,
      antonio: ''
    };

    this.valAntonio = this.valAntonio.bind(this);
  }

  valAntonio (input) {
    if (input == 'maria') {
      this.setState({visitor: true})
    }
    if (input == 'maria1') {
      this.setState({admin: true})
    }
  }

  whatShouldIRender() {
    let visitor = this.state.visitor;
    let admin = this.state.admin;

    if (visitor) {
      return <Website admin={false} />
    } else if (admin){
      return <Website admin={true} />
    } else {
      return <Antonio antonio={this.state.antonio}
                      valAntonio={this.valAntonio} />
    }

  }

  render() {
    return (
      <main>
        {this.whatShouldIRender()}
      </main>
    )

  }
}
