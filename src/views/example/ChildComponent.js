import react from "react";

class ChildComponent extends react.Component {
  state = {
    firstName: "",
    lastName: "",
  };
  

  render() {
      console.log('>>> check props :',this.props);
      let {name, age} =this.props
    return (
      <>
        <div> child Component : {name}---{age}</div>
      </>
    );
  }
}
export default ChildComponent;
