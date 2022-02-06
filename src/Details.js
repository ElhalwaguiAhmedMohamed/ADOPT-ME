import { Component } from "react";
import { withRouter } from "react-router";
import Carousel from "./Carousel";
import ErrorBoundry from "./ErrorBoundry";

class Details extends Component {
  //old fashion to write components
  state = { loading: true }; //default state of our component without using the constructor

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
    const { animal, breed, city, state, description, name, images } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
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

const DetailsWithRouter = withRouter(Details);

export default function DetailsWIthErrorBoundry() {
  return (
    <ErrorBoundry>
      <DetailsWithRouter />
    </ErrorBoundry>
  );
}
