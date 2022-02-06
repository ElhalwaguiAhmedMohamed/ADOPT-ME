import { Component } from "react";
import { withRouter } from "react-router";

class Details extends Component {
  //old fashion to write components
  constructor() {
    super(); //always call super in class components
    this.state = { loading: true };
  }
  async componentDidMount() {
    //called when the component is rendered for the first time
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}` //mathcing the id paaram we get from url with the props passed form the parent
    );
    const json = await res.json();
    this.setState(
      //rerendeer after fithcing the data
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }
  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }
    const { animal, breed, city, state, description, name } = this.state;
    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city} - ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
