import react from 'react'
 import { toast } from "react-toastify";


class AddComponent extends react.Component {
  state = {
    title: "",
    salary: "",
  };
  handleOnChangletitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleOnChanglesalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleOnclick = (event) => {
    event.preventDefault();
    if( !this.state.title && !this.state.salary){
         toast.error("miss messeage");
        return
    }

    this.props.addNewJob({
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
      salary:this.state.salary
    });

    this.setState({
      title:'',
      salary:''
    });
  };
    

  render() {
    return (
      <div>
        {" "}
        <form>
          <label htmlFor="fistName">Job's title</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleOnChangletitle(event)}
          />
          <br />
          <label htmlFor="salary">Salary</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleOnChanglesalary(event)}
          />
        </form>
        <div>
          <button type="text" onClick={(event) => this.handleOnclick(event)}>
           Submit
          </button>
        </div>
      </div>
    );
  }
}
export default AddComponent;