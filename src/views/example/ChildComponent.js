import react from "react";

class ChildComponent extends react.Component {
  state = {
    showHide: false,
  };
  handleOnclick = () => {
    this.setState({
      showHide: !this.state.showHide,
    });
  };
  handleDelete=(job)=>{
      this.props.DeleteAjob(job)
  }

  render() {
    let { arrJobs } = this.props;
    let showHide = this.state.showHide;
    return (
      <>
        {showHide === false ? (
          <div>
            <button onClick={() => this.handleOnclick()}>Show</button>
          </div>
        ) : (
          <>
            <div>
              {arrJobs.map((item, index) => {
                return (
                  <div className="item-list" key={item.id}>
                    {item.title} ---{item.salary}{" "}
                    <span onClick={() => this.handleDelete(item)}>x</span>
                  </div>
                );
              })}
            </div>

            <div>
              <button onClick={() => this.handleOnclick()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}
export default ChildComponent;
