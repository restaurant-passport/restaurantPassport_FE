import React from "react";

const withAuthenticate = PassportList => LoginPage =>
  class extends React.Component {
    constructor(props) {
      super(props);
<<<<<<< HEAD
      console.log(props);
=======
>>>>>>> 5a1e635d0f939dd65e08687c01f815d05b153e15
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (!localStorage.getItem("user")) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }

    render() {
      if (this.state.loggedIn) {
<<<<<<< HEAD
        return <PassportList passports={this.props.passports} />;
=======
        return <PassportList />;
>>>>>>> 5a1e635d0f939dd65e08687c01f815d05b153e15
      } else {
        return <LoginPage />;
      }
    }
  };

<<<<<<< HEAD
export default withAuthenticate;
=======
export default withAuthenticate;
>>>>>>> 5a1e635d0f939dd65e08687c01f815d05b153e15
