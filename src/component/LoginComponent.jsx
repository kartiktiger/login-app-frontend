import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../service/AuthenticationService";

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
      isPwdHidden: true,
      rememberMeCheck: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
    this.pwdRef = React.createRef();
    this.rememberRef = React.createRef();
    this.eyeRef = React.createRef();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }



  loginClicked() {
    AuthenticationService.getAudio(
      this.state.email,
    )
      .then((response) => {
        console.log('response 1');
    // console.log(response);
    // console.log(response.data);
    console.log(response.data.AudioStream.data);
       // this.props.history.push(`/success`);

      

       const audioStream = response.data.AudioStream.data;
       var uInt8Array = new Uint8Array(audioStream);
       var arrayBuffer = uInt8Array.buffer;
       var blob = new Blob([arrayBuffer]);
       var url = URL.createObjectURL(blob);

       const audio = new Audio(url);
       audio.play();


      //  var bufferStream = new SAudioStreamtream.PassThrough()
      //  bufferStream.end(rresponse.data.);
       // bufferStream.pipe(getPlayer());



      })
      .catch(() => {
        this.setState({ showSuccessMessage: false });
        this.setState({ hasLoginFailed: true });
      });
  }

  
  componentDidMount() {
  }

  render() {
    const { isPwdHidden, rememberMeCheck } = this.state;
    return (
      <div>
        <div className="container align-items-center">
          <div className="form-row">
            <div className="col-md-4">&nbsp;</div>
            <div className="form-group col-md-4">
              <label for="email"></label>
              <input
                type="text"
                name="email"
                placeholder="Text : eg - Hello, How are you"
                className="form-control mb-6"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>{" "}
          </div>

          <div className="form-row">
            <div className="col-md-5">&nbsp;</div>
            <button
              className="btn btn-dark col-md-2"
              onClick={this.loginClicked}
            >
              SPEAK
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
