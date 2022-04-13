import react from "react";

class ChildComponent extends react.Component {
  state = {
    firstName: "",
    lastName: "",
  };
  

  render() {
      console.log('>>> check props :',this.props);
      let { arrJobs } = this.props;
    return (
      <>
        <div className="job-Lists">
            {arrJobs.map((item, index)=>{
                 return(
                     <div className="listJob-iteam" key={item.id}>
                         {item.title}---{item.salary}
                     </div>
                 )
            })
            }
            </div>
      </>
    );
  }
}
export default ChildComponent;
