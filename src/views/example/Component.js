import react from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class Component extends react.Component {
  state = {
    arrJobs :[
        {id:'job1',title:'php',salary:'2000'},
        {id:'job2',title:'javascript',salary:'2500'},
        {id:'job3',title:'nodejs',salary:'3000'}
        
    ]
  };
  addNewJob=(job)=>{
      this.setState({
        arrJobs: [...this.state.arrJobs,job]
      });
  }
  DeleteAjob=(job)=>{
      let currentJob=this.state.arrJobs
      currentJob = currentJob.filter((item) => item.id !== job.id);
      this.setState({
          arrJobs : currentJob
      })

  }
  
  render() {
    return (
      <>
        <div>
          <AddComponent addNewJob={this.addNewJob} />

          <ChildComponent arrJobs={this.state.arrJobs} 
          DeleteAjob={this.DeleteAjob} />
        </div>
      </>
    );
  }
}
export default Component