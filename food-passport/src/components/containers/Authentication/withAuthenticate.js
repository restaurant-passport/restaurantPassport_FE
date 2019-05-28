import React from "react";

const withAuthenticate = PassportList => LoginPage =>
  class extends React.Component {
    constructor(props) {
      super(props);
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
        return <PassportList />;
      } else {
        return <LoginPage />;
      }
    }
  };

export default withAuthenticate;
