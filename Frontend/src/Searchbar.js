/*change action to url of result page*/
import { useEffect, useState } from "react";
import GameList from "./GameList";
import DATA from './services/DataList';
export let setfieldType = "hello";
export let setinputValue = "";
let temp;
// const SearchBar = () => {

//     const gameList=[
//         {name: "Assassin's Creed", dev: "Ubisoft", id: 1},
//         {name: "Mobile Legends: Bang Bang", dev: "Moonton", id: 2},
//         {name: "PUBG Mobile", dev: "Tencent", id: 3},
//         {name: "The Last of Us Part II", dev: "Ubisoft", id: 4}
//     ]
//     const [isPending,setIsPending] = useState(true);
//     const[results, setResults] = useState(gameList);
//     const [value, setvalue] = useState("");
//     // const [inputValue, setinputValue] = useState(null)
//     // const [fieldType, setfieldType] = useState("company")
//     setfieldType = "company"

//     const [jobList, setjobList] = useState(null)
//     const [gameDetails, setgameDetails] = useState(null)
//     const [isLoading, setisLoading] = useState(true)
//     useEffect(async()=> {
//         const getData = async () => {
//         if(jobList != null && gameDetails != null)
//             setisLoading(false)
//         else if (isLoading){
//         setgameDetails(await DATA.GameListData());
//         //const personListData = await DATA.PersonListData();
//         setjobList(await DATA.GetJobListData());
//         console.log(gameDetails);
//         //console.log(personListData);
//         console.log(jobList);
//         console.log(setfieldType);
//         console.log(setinputValue);
//             }
//         }
//         getData();
        
//     },[isLoading])

//     const handleSubmit =(e) =>{
//       setResults(gameList);
//       setisLoading(true)
//       setIsPending(false);
//       e.preventDefault();
//       const opt = e.target.value;
//       console.log(jobList)
//            console.log(value);
//         if(jobList!=null){
//         temp = jobList.filter(function(job) {
//           return job.company === value;
//         })
//         console.log(temp)
//         setjobList(temp)
//     };
//     }
//     const updateInput = async(input)=>{
//         const filtered = jobList.filter(function(job) {
//             return job.company == input;
//           });
//           setvalue(input);
//           setjobList(filtered);
//     }
//     return(
//     <form onSubmit={handleSubmit} method="get">  
//         <label htmlFor="header-search">
//             <span className="visually-hidden">Search game database &nbsp;</span>
//         </label>
//         <input
//             type="text"
//             id="header-search"
//             placeholder="Search games by year or name"
//             name="s" 
//             input = {value}
//             // onChange={event => (setvalue(event.target.value))}
//             // onChange = {updateInput}
//         />
//         <button type="submit">Search</button>
//         {!isPending && <div className="search-results">
//             <GameList jobs={jobList} />
//         </div>}
//     </form>
//     );
// }

const SearchBar = () => {
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    const [value,setValue] = useState("");
    // console.log(props.input);
    // console.log(props.onChange);
    return (
      <input 
       style={BarStyling}
       key="random1"
       value={value}
       placeholder={"search country"}
       onChange={(e) => setValue(e.target.value)}
      />
    );
  }

export default SearchBar;