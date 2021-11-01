import JobTitle from './JobTitle';
import GameDetails from './GameDetails';
import DATA from './services/DataList';
import React, {useEffect,useState} from 'react';
import { setfieldType,setinputValue} from './Searchbar';

// const jobList=[
//     {title: "Creative Directors", persons: {"a": "Vin Tran", "b":"Goldy Chu"}, id: 1},
//     {title: "Media Producers", persons: {"a": "Haley Joe", "b": "Harry Ng", "c": "Melaine Frost"}, id: 2}
// ]

// const gameDetails= {name: "Assassin's Creed", createdBy: "Ubisoft",platform:["Pc"]}

// const [jobList, setjobList] = useState(null)
// const [gameDetails, setgameDetails] = useState(null)

const GamePage = ({inputData,handleDeleteData}) => {
    const [jobList, setjobList] = useState(null)
    const [gameDetails, setgameDetails] = useState(null)
    const [isLoading, setisLoading] = useState(true)
    useEffect(async()=> {
        const getData = async () => {
        if(jobList != null && gameDetails != null)
            setisLoading(false)
        else if (isLoading){
        setgameDetails(await DATA.GameListData());
        //const personListData = await DATA.PersonListData();
        setjobList(await DATA.GetJobListData());
        console.log(gameDetails);
        //console.log(personListData);
        console.log(jobList);
        console.log(setfieldType);
        console.log(setinputValue);
            }
        }
        getData();
        
    },[])
    return (  
        // <div className="game_page">
        //     <GameDetails game={gameDetails} />
        //     <JobTitle jobs={jobList} />
        // </div>
        <div className="blog-list">
      <h2> Inputted Data </h2>
      {inputData.map(inputs => (
        <div className="blog-preview" key={inputs.url} >
          <h2>{ inputs.companyName }</h2>
          <p>PLATFORMS: { inputs.platformName }</p>
          <button onClick={() => handleDeleteData(inputs.url)}>delete data</button>
        </div>
      ))}
    </div>
    );
}

export default GamePage;