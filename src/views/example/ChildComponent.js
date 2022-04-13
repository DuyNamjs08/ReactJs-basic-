import react from "react";

class ChildComponent extends react.Component {
  state = {
    firstName: "",
    lastName: "",
  };
  handleOnChangleFirstname = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleOnChangleLastname = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleOnclick = () => {
    alert("hello");
    console.log(this.state);
  };

  render() {
    return (
      <>
        <div> child Component : {this.props.name}</div>
      </>
    );
  }
}
export default ChildComponent;
