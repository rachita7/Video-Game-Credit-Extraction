// import {Link } from 'react-router-dom';
// import PersonList from './PersonList';

// import {GameListData} from './services/DataList';
// const GameList = ({jobs}) => {
//     console.log("hi")
//     if(jobs!=null){
//       console.log(jobs)
//     return ( 
//         <div className="game-list">
//             { jobs.map( (job) => (
//               <div className="game-preview" key ={job.id}>
//                  <h2>{ job.game}</h2>
//                  <PersonList persons={job.name} />
//               </div>
//           ))
//           }
//         </div>
//      );}
//      return(
//        <div>
//          <h1>Empty game list!</h1>
//        </div>
//      )
// }
 
// export default GameList ;

import {Link } from 'react-router-dom';
import React, {useEffect,useState} from 'react';
import PersonList from './PersonList';
import {GameListData} from './services/DataList';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
// import 'bootstrap/dist/css/bootstrap.min.css';
const GameList = ({jobs}) => {
  useEffect(()=> {
    console.log(jobs);
},[jobs]);
    console.log("hi")
    console.log(jobs)
    if(jobs!=null){
      console.log(jobs!=null);
    return ( 
        <div className="game-list-search">
          {/* <p>scroll downn to see results !</p> */}
            { jobs.map( (job) => (
              <Card
              style={{
                width:"25vw",
                backgroundColor:"rgba(229,229,229, 0.7)",
                margin:"2%",
                borderRadius:"20px"
              }}
              >
               <CardContent>
              <div className="game-preview" key ={job.id}>
                  <h2>Company : { job.company}</h2>
                 <h2>Game : { job.game}</h2>
                 {/* <PersonList persons={job.name} /> */}
                 <a href={job.linkedinURL}><h4>{job.name}</h4></a>
                 {
                   (job.jobs).map((title) => <li>{title}</li>)
                 }
                 <br/>
              </div>
              </CardContent>
              </Card>
          ))
          }
        </div>
        

     );}
     return(
       <div>
         <h1>Empty game list!</h1>
       </div>
    
     )
}
 
export default GameList ;