import react from "react";
import ChildComponent from "./ChildComponent";

class Component extends react.Component {
  state = {
    firstName: "",
    lastName: "",
    arrJobs :[
        {id:'job1',title:'php',salary:'2000'},
        {id:'job2',title:'javascript',salary:'2500'},
        {id:'job3',title:'nodejs',salary:'3000'}
        
    ]
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
  handleOnclick = (event) => {
    alert("hello");
     event.preventDefault();
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
          <ChildComponent 
          arrJobs={this.state.arrJobs} />
        </div>
      </>
    );
  }
}
export default Component