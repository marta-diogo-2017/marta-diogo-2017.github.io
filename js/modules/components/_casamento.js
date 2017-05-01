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
    //if (input == '14out17') {
      // 14out17
      //this.setState({visitor: true})
    //}
    if (input == '') {
      // martA9494
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
      <main className="container-fluid">
        {this.whatShouldIRender()}
      </main>
    )

  }
}
