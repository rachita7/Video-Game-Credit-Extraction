import { useEffect } from 'react';
import PersonList from './PersonList';
const JobTitle = ({jobs}) => {
    useEffect(()=>{
        console.log(jobs)
    })
   if(jobs!=null){
    return ( 
        <div className="job-list">
            <br></br>
            { jobs.map((job) => (
                
              <div className="job-details" key ={job.id}>
                  <br/>
                 <h2>{job.game}</h2>
                 <PersonList persons={job.name} />
              </div>
          ))
          }
        </div>
     );}
    return (<h1 class="empty-job">Empty JobTitle</h1>)
}

export default JobTitle;
