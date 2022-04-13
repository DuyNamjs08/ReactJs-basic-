import react from "react";

class Component extends react.Component {
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
        <div>
          <form>
            <label htmlFor="fistName">First name:</label>
            <br />
            <input
              type="text"
              value={this.state.firstName}
              onChange={(event) => this.handleOnChangleFirstname(event)}
            />
            <br />
            <label htmlFor="lastName">Last name:</label>
            <br />
            <input
              type="text"
              value={this.state.lastName}
              onChange={(event) => this.handleOnChangleLastname(event)}
            />
          </form>
          <div>
            <button type="text" onClick={() => this.handleOnclick()}>
              click me !
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default Component