"use strict";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCwO6sSV86vsvzrNocIo3FOVWJ9hyO3ID4",
  authDomain: "casamento-4ab7b.firebaseapp.com",
  databaseURL: "https://casamento-4ab7b.firebaseio.com",
  storageBucket: "casamento-4ab7b.appspot.com",
  messagingSenderId: "777620829455"
};
firebase.initializeApp(config);

// class WeddingApp extends React.Component {
//   render() {
//     return <h1>Hello {this.props.name}</h1>;
//   }
// }

ReactDOM.render(React.createElement(
  "h1",
  null,
  "Oi maria!"
), document.getElementById('maria'));