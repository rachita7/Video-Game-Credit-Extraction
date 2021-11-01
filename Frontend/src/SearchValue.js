import { useEffect } from 'react';
import PersonList from './PersonList';
import { setfieldType,setinputValue} from './Searchbar';

const SearchValue = ({jobs}) => {
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
                 <PersonList class="searchres" persons={job.name} />
            </div>
   ))
          }
        </div>
     );}
    return (<h1>Empty JobTitle</h1>)
}

export default SearchValue;