import { Component } from "react";
import { Link, Redirect } from "react";

class ErrorBoundry extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true, redirect: false };
  }

  componentDidCatch(error, info) {
    // I would log this to monitoring service like New Relic or Axure , sentry
    console.log("ErrorBoundry caught an error", error, info);
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          this listing has an error. <Link to="/"> Click here</Link> to go to
          home page or wait five seconds
        </h2>
      );
    }
    return this.props.children; //be invisible if I have no error
  }
}

export default ErrorBoundry;
