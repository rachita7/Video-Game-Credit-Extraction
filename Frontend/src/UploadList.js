import {Link } from 'react-router-dom';
import PersonList from './PersonList';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import {GameListData} from './services/DataList';
const UploadList = ({jobs}) => {
    console.log(jobs)
    if(jobs!=[]){
    return ( 
      jobs.map((GameJobs)=>(
      console.log(GameJobs),
      <div className="Accordian-enclose">
      <div className="Accordian-div" style={{ width: 600 }}>
      <Accordion sx={{width:'100%'}}>
      <AccordionSummary
        // expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className = "panel1a-header"
      >
        <h2 className='h2-accordian'>
          {GameJobs[0].game}
        </h2>
      </AccordionSummary>
        <div className="game-list">
            { GameJobs.map( (job) => (
              <div>
              <AccordionDetails className="accordian-summary">
                <div className="Card-Accordian">
                <Card
              style={{
                width:"25vw",
                backgroundColor:"rgba(229,229,229, 0.7)",
                margin:"2%",
                borderRadius:"20px"
        
              }}>
               <CardContent>
              <div className="game-preview" key ={job.id}>
                  <h2>{ job.company}</h2>
                 <h3>{ job.game}</h3>
                <a href={job.linkedinURL}><h4>{job.name}</h4></a>
                {
                   (job.jobs).map((title) => <li>{title}</li>)
                 }
              </div>
              </CardContent>
               </Card>
               </div>
              </AccordionDetails>
               </div>
          ))
          }
        </div>
        </Accordion>
        <br/>
        </div>
        </div> 
        ))
     );}
     return(
       <div>
         <h1>Empty jobs!</h1>
       </div>
     )
}
 
export default UploadList ;