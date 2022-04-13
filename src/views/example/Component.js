import react from "react";

class Component extends react.Component {
  state = {
    name: "",
    chanel: "Namduy08",
  };
  handleOnChange=(event)=>{
      console.log('event :',event ,'event.target : ' , event.target , 'event.target.value :', event.target.value);
      this.setState({
          name : event.target.value
      })
  }

  render() {
    return (
      <>
        <div className="first">
          <input
            type='text'
            value={this.state.name}
            onChange={(event) => this.handleOnChange(event)}
          /><br/>
          chào các bạn mình tên là : {this.state.name}
        </div>
        <div className="second">
          kênh youtube của mình là : {this.state.chanel}
        </div>
      </>
    );
  }
}
export default Component