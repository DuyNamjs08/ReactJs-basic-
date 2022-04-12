import react from "react";

class Component extends react.Component{
    state={
        arrJobs:[{ id:'job1' , title:'Javascript', salary: '500'},
       { id:'job2' , title:'Php', salary: '1500'},
        { id:'job2' , title:'Ruby', salary: '700'}
        ]
    }


    render(){
        let {arrJobs}=this.state
        return (
          <>
            <div className="State-container"> {this.state.arrJobs}</div>
          </>
        );
    }
}
export default Component