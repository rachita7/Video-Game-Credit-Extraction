import Searchbar from './Searchbar';
import DATA from './services/DataList';
import GameList from "./GameList";
import PersonList from './PersonList';
import React, {useEffect,useState} from 'react';
import Select from 'react-select';
import { setfieldType,setinputValue} from './Searchbar';
import SearchValue from './SearchValue';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { set, setHours } from 'date-fns';
import DatePicker from 'react-datepicker';
import { CalendarContainer } from 'react-datepicker';
import addDays from 'date-fns/addDays';
import 'react-datepicker/dist/react-datepicker.css';

let temp;
let dummyValue;
let uniqueTags = []
let uniqueTagsnew = [];
var i = 0;
const Search = () => {
  const [jobList, setjobList] = useState([])
  const [gameDetails, setgameDetails] = useState(null)
  const [buttonClicked, setbuttonClicked] = useState(false)
  const [isLoading, setisLoading] = useState(true)
  const [value, setvalue] = useState("");
  const [filterData, setfilterData] = useState(null);
  const [selectedValue,setSelectedValue]=useState({label:"company"});
  const [updateInputData,setupdateInputData] = useState("");
  // const [fullData, setfullData] = useState({company:"",game:"",name:"",jobs:""});
  const [fullData, setfullData] = useState(null);
  const [theSelectedValue, settheSelectedValue] = useState("company");
  const [fullValue, setfullValue] = useState(null);
  const [imgCompanyClean,setimgCompanyClean] = useState("");
  const [startGameYear, setStartGameYear] = useState(new Date(1990,1,1));
  const [startingGameYear, setStartingGameYear] = useState("1990");
  const [endGameYear, setEndGameYear] = useState(addDays(new Date(), 0));
  const [endingGameYear, setEndingGameYear] = useState("2021");

  
  const [uniqueTagsCompany, setUniqueTagsCompany] = useState([]);
  const [uniqueTagsGame, setUniqueTagsGame] = useState([]);
  const [uniqueTagsName, setUniqueTagsName] = useState([]);
  const [uniqueTagsJobs, setUniqueTagsJobs] = useState([]);
  const [uniqueTagsPlatform, setUniqueTagsPlatform] = useState([]);
  const [uniqueTagsGenre, setUniqueTagsGenre] = useState([]);

  const [companySelected, setCompanySelected]= useState("");
  const [gameSelected, setGameSelected]= useState("");
  const [genreSelected, setGenreSelected]= useState("");
  const [platformSelected, setPlatformSelected]= useState("");
  const [nameSelected, setNameSelected]= useState("");
  const [jobsSelected, setJobsSelected]= useState("");

  const [filteredData , setfilteredData] = useState(null);
  const [filterIds, setfilterIds] = useState(null);

  console.log(selectedValue.label);
    const list = [
        {
            value: 1,
            label: "company"
        },
        {
          value: 2,
          label: "year"
        },
        {
            value: 3,
            label: "game"
        },
        {
          value: 4,
          label: "genre"
        },
        {
          value: 5,
          label: "platform"
        },
        {
            value: 6,
            label: "name"
        },
        {
            value: 7,
            label: "jobs"
        }
    ]
  useEffect(async()=> {
      const getData = async () => {
      if(jobList != null && gameDetails != null)
          setisLoading(false)
      else if (isLoading){
      setgameDetails(await DATA.GameListData());
      setjobList(await DATA.GetJobListData());
      setfullData(await DATA.GetJobListData());
      //const personListData = await DATA.PersonListData();
      console.log(fullData);
      console.log(gameDetails);
      //console.log(personListData);
      console.log(jobList);
      console.log(setfieldType);
      console.log(setinputValue);
      const jobListDummy = [...jobList];
      // setfilteredData([...jobList]);
      console.log(filteredData);
          }
      }
      getData();
      
  },[filterData]);
  const updateInput = (e)=>{
     console.log(e.target.value);
    setupdateInputData(e.target.value)
};
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 }
];
const handleSelect=(e)=>{
  setSelectedValue(e)
  if (fullData!=null){
    console.log(fullData);
    console.log(selectedValue.label=="game");
    if (selectedValue.label=="company"){
      console.log("hello")
    uniqueTags = [];
    fullData.map(img => {
    if (uniqueTags.indexOf(img.company) === -1) {
        uniqueTags.push(img.company)}});
uniqueTagsnew = [];
uniqueTagsnew = (uniqueTags).map((tags)=>(
  {"key":tags.charAt(0).toUpperCase() + tags.slice(1).toLowerCase()
}))

  }
  else if(selectedValue.label=="game"){
     uniqueTags = [];
fullData.map(img => {
    if (uniqueTags.indexOf(img.game) === -1) {
        uniqueTags.push(img.game)
    }
});
uniqueTagsnew = [];
uniqueTagsnew = (uniqueTags).map((tags)=>(
  {"key":tags.charAt(0).toUpperCase() + tags.slice(1).toLowerCase()})
)
  }
  else if(selectedValue.label=="jobs"){
    uniqueTags = [];
fullData.map(img => {
    if (uniqueTags.indexOf(img.jobs) === -1) {
        uniqueTags.push(img.jobs)
    }
});
uniqueTagsnew = [];
uniqueTagsnew = (uniqueTags).map((tags)=>(
  {"key":tags}
  )
)
  }
  else if(selectedValue.label=="name"){
    uniqueTags = [];
    fullData.map(img => {
    if (uniqueTags.indexOf(img.name) === -1) {
      console.log(img.name)
        uniqueTags.push(img.name)
    }
});
uniqueTagsnew = [];
uniqueTagsnew = (uniqueTags).map((tags)=>(
  {"key":tags.charAt(0).toUpperCase() + tags.slice(1).toLowerCase()})
)
console.log(uniqueTags);
console.log(uniqueTagsnew);
  }
  console.log(fullValue);
}
}

const handleOnSearch = (string, results) => {
  // onSearch will have as the first callback parameter
  // the string searched and for the second the results.
  console.log(string, results)
  console.log(string);
  if(string.length<=1){
    setCompanySelected(false);
    console.log("set the company to be false");
  }
}

const handleOnCompanySearch = (string, results) => {
  // onSearch will have as the first callback parameter
  // the string searched and for the second the results.
  console.log(string, results)
  console.log(string);
  if(string.length<=1){
    setCompanySelected(false);
    console.log("set the company to be false");
  }
}

const handleOnGameSearch = (string, results) => {
  // onSearch will have as the first callback parameter
  // the string searched and for the second the results.
  console.log(string, results)
  console.log(string);
  if(string.length<=1){
    setGameSelected(false);
    console.log("set the Game to be false");
  }
}

const handleOnPlatformSearch = (string, results) => {
  // onSearch will have as the first callback parameter
  // the string searched and for the second the results.
  console.log(string, results)
  console.log(string);
  if(string.length<=1){
    setPlatformSelected(false);
    console.log("set the Platform to be false");
  }
}

const handleOnNameSearch = (string, results) =>{
  console.log(string,results);
  console.log(string);
  if(string.length<=1){
    setNameSelected(false);
    console.log("set the name to be false");
  }
}

const handleOnGenreSearch = (string, results) => {
  // onSearch will have as the first callback parameter
  // the string searched and for the second the results.
  console.log(string, results)
  console.log(string);
  if(string.length<=1){
    setGenreSelected(false);
    console.log("set the Genre to be false");
  }
}

const handleOnJobsSearch = (string, results) => {
  // onSearch will have as the first callback parameter
  // the string searched and for the second the results.
  console.log(string, results)
  console.log(string);
  if(string.length<=1){
    setJobsSelected(false);
    console.log("set the Jobs to be false");
  }
}

const handleOnHover = (result) => {
  // the item hovered
  console.log(result)
}

const handleOnSelect = (item) => {
  // the item selected
  console.log(item)
  setupdateInputData(item)
  console.log(updateInputData);
}

const formatResult = (item) => {
  console.log(item);
  console.log("entered format result");
  return item;
}

const handleOnCompanySelect = (item) => {
  // the company item selected
  console.log(item)
  setCompanySelected(item)
  console.log(typeof item);
  if(item.length <1){
    setCompanySelected(false);
    console.log("set company to false");
  }
  console.log(companySelected);
}

const handleOnGameSelect = (item) => {
  // the company item selected
  console.log(item)
  setGameSelected(item)
  console.log(gameSelected);
}

const handleOnGenreSelect = (item) => {
  // the company item selected
  console.log(item)
  setGenreSelected(item)
  console.log(genreSelected);
}

const handleOnPlatformSelect = (item) => {
  // the company item selected
  console.log(item)
  setPlatformSelected(item)
  console.log(platformSelected);
}

const handleOnNameSelect = (item) => {
  // the company item selected
  console.log(item)
  setNameSelected(item)
  console.log(nameSelected);
}

const handleOnJobsSelect = (item) => {
  // the company item selected
  console.log(item)
  setJobsSelected(item)
  console.log(jobsSelected);
}

const handleOnFocus = () => {
  console.log('Focused')
  console.log("clicked")
} 

const handleOnCompanyFocus = () => {
  // the item focussed
  console.log('company focussed')
  if(fullData!=null){
    uniqueTags = [];
      fullData.map(img => {
      if (uniqueTags.indexOf(img.company) == -1) {
          uniqueTags.push(img.company)}});
  uniqueTagsnew = [];
  uniqueTagsnew = (uniqueTags).map((tags)=>(
    {"key":tags}
    ))
}
  setUniqueTagsCompany(uniqueTagsnew);
  setCompanySelected(false)
  console.log(uniqueTagsCompany);
}

const handleOnGameFocus = () => {
  // the item focussed
  console.log('game focussed')
  console.log(fullData);
  console.log(uniqueTagsGame)
  if(fullData!=null){
    uniqueTags = [];
      fullData.map(img => {
      if (uniqueTags.indexOf(img.game) == -1) {
          uniqueTags.push(img.game)}});
  uniqueTagsnew = [];
  uniqueTagsnew = (uniqueTags).map((tags)=>(
    {"key":tags}))
}
  setUniqueTagsGame(uniqueTagsnew);
  console.log(uniqueTagsGame);
  setGameSelected(false)
}

const handleOnGenreFocus = () => {
  // the item focussed
  console.log('genre focussed')
  if(fullData!=null){
    uniqueTags = [];
      fullData.map(img => {
      if (uniqueTags.indexOf(img.genre) == -1) {
          uniqueTags.push(img.genre)}});
  uniqueTagsnew = [];
  uniqueTagsnew = (uniqueTags).map((tags)=>(
    {"key":tags}))
  }
  console.log(uniqueTagsnew);
  setUniqueTagsGenre(uniqueTagsnew);
  console.log(uniqueTagsGenre);
  setGenreSelected(false)
}

const handleOnPlatformFocus = () => {
  // the item focussed
  console.log('platform focussed')
  if(fullData!=null){
    uniqueTags = [];
      fullData.map(img => {
      if (uniqueTags.indexOf(img.platform) == -1) {
          uniqueTags.push(img.platform)}});
  uniqueTagsnew = [];
  uniqueTagsnew = (uniqueTags).map((tags)=>(
    {"key":tags}))
}
console.log(uniqueTagsnew);
  setUniqueTagsPlatform(uniqueTagsnew)
  setPlatformSelected(false)
}

const handleOnNameFocus = () => {
  // the item focussed
  console.log('name focussed')
  if(fullData!=null){
    uniqueTags = [];
      fullData.map(img => {
      if (uniqueTags.indexOf(img.name) == -1) {
          uniqueTags.push(img.name)}});
  uniqueTagsnew = [];
  uniqueTagsnew = (uniqueTags).map((tags)=>(
    {"key":tags}))
}
  setUniqueTagsName(uniqueTagsnew);
  setNameSelected(false)
}

const handleOnJobsFocus = () => {
  // the item focussed
  console.log('jobs focussed')
  if(fullData!=null){
    uniqueTags = [];
fullData.map(img => {
    if (uniqueTags.indexOf(img.jobs) == -1) {
        uniqueTags.push(img.jobs)
    }
});
uniqueTagsnew = [];
uniqueTagsnew = (uniqueTags).map((tags)=>(
  {"key":tags}
  )
)
}
setUniqueTagsJobs(uniqueTagsnew);
  setJobsSelected(false)
}

const handleOnCompanyClear = () => {
  // the item cleared
  console.log('company cleared')
  setCompanySelected(false)
}

const handleOnGameClear = () => {
  // the item cleared
  console.log('game cleared')
  setGameSelected(false)
}

const handleOnGenreClear = () => {
  // the item cleared
  console.log('genre cleared')
  setGenreSelected(false)
}

const handleOnPlatformClear = () => {
  // the item cleared
  console.log('platform cleared')
  setPlatformSelected(false)
}

const handleOnNameClear = () => {
  // the item cleared
  console.log('name cleared')
  setNameSelected(false)
}

const handleOnJobsClear = () => {
  // the item cleared
  console.log('jobs cleared')
  setJobsSelected(false)
}

const handleStartGameYear=(date)=>{
  var string1 = String(date)[11]
  var i = 12
  for(i=12;i<15;i++){
    string1 = string1.concat(String(date)[i]);
  }
  console.log(string1);
  setStartGameYear(date);
  // console.log(startGameYear);
  setStartingGameYear(string1);
  console.log(startingGameYear);
} 

const handleEndGameYear=(date)=>{
  var string1 = String(date)[11]
  var i = 12
  for(i=12;i<15;i++){
    string1 = string1.concat(String(date)[i]);
  }
  console.log(string1);
  setEndGameYear(date);
  // console.log(startGameYear);
  setEndingGameYear(string1);
  console.log(endingGameYear);
}
const handleClick=async(e)=>{
  console.log(jobList);
  console.log(fullData);
  console.log("hi 385")
  // if (selectedValue.label == "company"){
    //   console.log(updateInputData);
    // const filtered = jobList.filter(function(job) {
    //     return job.company == updateInputData.company;
    //   });
    //   setvalue(e.target.value);
    //   setfilterData(filtered);
    //   console.log(filterData);
    // }
    // else if (selectedValue.label == "game"){
    //   const filtered = jobList.filter(function(job) {
    //     return job.game == updateInputData.game;
    //   });
    //   console.log(filtered)
    //   setvalue(e.target.value);
    //   setfilterData(filtered);
    //   console.log(filterData);
    // }
    // else if (selectedValue.label == "jobs"){
    //   const filtered = jobList.filter(function(job) {
    //     console.log(job.jobs);
    //     const res = (updateInputData.jobs).map((randomdata)=>(
    //       job.jobs.includes(randomdata)
    //       ))
    //       console.log(res[0])
    //     // return (updateInputData.jobs).map((randomdata)=>(
    //     // job.jobs.includes(randomdata)
    //     // // console.log(job.jobs.includes(randomdata))
    //     // ))
    //     return res[0]
    //   });
    //   setvalue(e.target.value);
    //   setfilterData(filtered);}
    // else if (selectedValue.label == "name"){
    //   const filtered = jobList.filter(function(job) {
    //     return job.name == updateInputData.name;
    //   });
    //   setvalue(e.target.value);
    //   setfilterData(filtered);}
  if(jobList!=[]){
    // var filteredDataDummy = []
    // for(i=0;i<jobList.length;i++){
    //   filteredDataDummy[i] = jobList[i];
    // }
    // console.log(filteredDataDummy);
    // // setfilteredData([...filteredDataDummy]);
    // console.log(filteredData);
    // if (companySelected!=false){
    //   // console.log(updateInputData);
    //   // console.log(companySelected.key)
    //   const filtered_company = filteredData.filter(function(job) {
    //   return job.company == companySelected.key;
    //   });
    //   setvalue(e.target.value);
    //   filteredDataDummy = [...filtered_company];
    //   console.log(filteredDataDummy);
    //   // setfilterData(filtered);
    //   console.log(filtered_company);
    //   setfullData(filtered_company);
    //   // setfilteredData(filtered);
    //   // console.log(filteredData);
    //   console.log(fullData);
    // }
    // if (gameSelected!=false){
    //   const filtered_game = fullData.filter(function(job) {
    //     return job.game == gameSelected.key;
    //   });
    //   console.log(filtered_game)
    //   setvalue(e.target.value);
    //   // setfilterData(filtered);
    //   setfilteredData(filtered_game);
    //   // console.log(filteredData);
    //   setfullData(filtered_game);
    //   console.log(fullData);
    // }
    // if(nameSelected!=false){
    //   const filtered_name = fullData.filter(function(job) {
    //     return job.name == nameSelected.key;
    //   });
    //   setvalue(e.target.value);
    //   // setfilterData(filtered);
    //   setfullData(filtered_name);
    //   setfilteredData(filtered_name);
    //   // console.log(filteredData);
    //   console.log(fullData);
    // }
    // var dummyDataHardCoded = [
    //   {"company":"Naughty Dog","game":"Last of Us","jobs":["WRITTEN BY"],"linkedinURL":"https://www.linkedin.com/search/results/people/?keywords=neil%20druckmann%20naughty%20","name":"NEIL DRUCKMANN","platform":"PC","year":"2019"},
    //   {"company":"Ubisoft","game":"Assassin's Creed","jobs":["WRITTEN BY"],"linkedinURL":"https://www.linkedin.com/search/results/people/?keywords=neil%20druckmann%20naughty%20","name":"NEIL DRUCKMANN","platform":"PC","year":"2019"}
    // ]
    var dummyDataHardCoded = [...fullData];
    console.log(dummyDataHardCoded);
    if(companySelected!=false || companySelected!=""){
      // setfilterIds(["Naughty Dog"]);
      // console.log(filterIds);
      console.log(fullData);
      console.log(dummyDataHardCoded);
      console.log(filteredData);
      // setfilteredData(
      // await dummyDataHardCoded.filter(filteredDataObject => {return ["Naughty Dog"].indexOf(filteredDataObject.company) != -1;}
      // ))
      dummyDataHardCoded = await dummyDataHardCoded.filter(filteredDataObject => {return [companySelected.key].indexOf(filteredDataObject.company) != -1;})
      console.log(dummyDataHardCoded);
    }
    if((gameSelected!=false || gameSelected!="") && filteredData!=null){
      console.log(dummyDataHardCoded);
      // setfilteredData(
      //   await filteredData.filter(filteredDataObject => {return ["Last of Us"].indexOf(filteredDataObject.game) != -1;}
      //   ))
      dummyDataHardCoded = await dummyDataHardCoded.filter(filteredDataObject => {return [gameSelected.key].indexOf(filteredDataObject.game) != -1;})
        console.log(dummyDataHardCoded);
    }
    if((nameSelected!=false || nameSelected!="") && filteredData!=null){
      console.log(dummyDataHardCoded);
      // setfilteredData(
      //   await filteredData.filter(filteredDataObject => {return ["Last of Us"].indexOf(filteredDataObject.game) != -1;}
      //   ))
      console.log(nameSelected.key);
      dummyDataHardCoded = await dummyDataHardCoded.filter(filteredDataObject => {return [nameSelected.key].indexOf(filteredDataObject.name) != -1;})
        console.log(dummyDataHardCoded);
    }
    if((genreSelected!=false || genreSelected!="") && filteredData!=null){
      console.log(dummyDataHardCoded);
      // setfilteredData(
      //   await filteredData.filter(filteredDataObject => {return ["Last of Us"].indexOf(filteredDataObject.game) != -1;}
      //   ))
      console.log(genreSelected);
      dummyDataHardCoded = await dummyDataHardCoded.filter(filteredDataObject => {return [genreSelected.key].indexOf(filteredDataObject.genre) != -1;})
        console.log(dummyDataHardCoded);
    }
    if((platformSelected!=false || platformSelected!="") && filteredData!=null){
      console.log(dummyDataHardCoded);
      // setfilteredData(
      //   await filteredData.filter(filteredDataObject => {return ["Last of Us"].indexOf(filteredDataObject.game) != -1;}
      //   ))
      console.log(platformSelected);
      dummyDataHardCoded = await dummyDataHardCoded.filter(filteredDataObject => {return [platformSelected.key].indexOf(filteredDataObject.platform) != -1;})
        console.log(dummyDataHardCoded);
    }
    if((jobsSelected!=false || jobsSelected!="") && filteredData!=null){
      console.log(dummyDataHardCoded);
      // setfilteredData(
      //   await filteredData.filter(filteredDataObject => {return ["Last of Us"].indexOf(filteredDataObject.game) != -1;}
      //   ))
      console.log(jobsSelected.key[0]);
      // dummyDataHardCoded = await dummyDataHardCoded.filter(filteredDataObject => {return (filteredDataObject.jobs).indexOf(jobsSelected.key) != -1;})
      dummyDataHardCoded = await dummyDataHardCoded.filter(filteredDataObject => {return (filteredDataObject.jobs).includes(jobsSelected.key[0]) != false;})
        console.log(dummyDataHardCoded);
    }
    if((startingGameYear!=null && endingGameYear!=null) && filteredData!=null){
      console.log(dummyDataHardCoded);
      dummyDataHardCoded = await dummyDataHardCoded.filter(filteredDataObject => {return filteredDataObject.year>=Math.floor(startingGameYear)&&filteredDataObject.year<=Math.floor(endingGameYear);console.log(filteredDataObject.year)})
        console.log(dummyDataHardCoded);
    }
    setfilteredData(dummyDataHardCoded);
  }  
}  
const BarStyling = {width:"88.7vw",background:"#F2F1F9", border:"none", padding:"0.5rem", height:"1.75vw"};

const MyStartContainer = ({ className, children }) => {
  return (
    <div style={{ color: "black"}}>
      <CalendarContainer className={className}>
        <div style={{ background: "#f0f0f0" ,color:'black', textAlign:"center"}}>
          Start Game Year of Release
        </div>
        <div style={{ position: "relative" }}>{children}</div>
      </CalendarContainer>
    </div>
  );
};

const MyEndContainer = ({ className, children }) => {
  return (
    <div style={{ color: "black"}}>
      <CalendarContainer className={className}>
        <div style={{ background: "#f0f0f0" ,color:'black', textAlign:"center"}}>
          End Game Year of Release
        </div>
        <div style={{ position: "relative" }}>{children}</div>
      </CalendarContainer>
    </div>
  );
};
console.log(theSelectedValue);
    return ( 
        <div class = 'search'>
          <div className="search-title">
          <h1>
            Ubisoft Search
          </h1>
          </div>
          <br/>
        <div class="searchbar">
            <br/>
            <div className="rowC">
            <div className = "rowB" style={{ width: 400 }}>
            <ReactSearchAutocomplete
            items={uniqueTagsCompany}
            onSearch={handleOnCompanySearch}
            onHover={handleOnHover}
            onSelect={handleOnCompanySelect}
            onFocus={handleOnCompanyFocus}
            onClear = {handleOnCompanyClear}
            placeholder="Input Company Name"
            autoFocus
            // inputSearchString = ""
            formatResult={formatResult}
            fuseOptions = {{keys:["key"]}}
            resultStringKeyName = {"key"}
            styling = {{
              width:"100px",
            }}
          />
          </div>
          <br/>
          <div className = "rowA" style={{ width: 400 }}>
            <ReactSearchAutocomplete
            items={uniqueTagsGame}
            onSearch={handleOnGameSearch}
            onHover={handleOnHover}
            onSelect={handleOnGameSelect}
            onFocus={handleOnGameFocus}
            onClear = {handleOnGameClear}
            placeholder="Input Game Name"
            autoFocus
            // fuseOptions = {{keys:["company","game","jobs","name"]}}
            fuseOptions = {{keys:["key"]}}
            // resultStringKeyName = {selectedValue.label}
            resultStringKeyName = {"key"}
            styling = {{
              width:"100px",
            }}
          />
          </div>
          </div>
        {/* <br/> */}
        <div className="rowC">
            <div className = "rowD" style={{ width: 400 }}>
            <ReactSearchAutocomplete
            items={uniqueTagsPlatform}
            onSearch={handleOnPlatformSearch}
            onHover={handleOnHover}
            onSelect={handleOnPlatformSelect}
            onFocus={handleOnPlatformFocus}
            onClear = {handleOnPlatformClear}
            placeholder="Input Platforms it is available on"
            autoFocus
            // fuseOptions = {{keys:["company","game","jobs","name"]}}
            fuseOptions = {{keys:["key"]}}
            // resultStringKeyName = {selectedValue.label}
            resultStringKeyName = {"key"}
            styling = {{
              width:"100px",
            }}
          />
          </div>
          <br/>
          <div className = "rowE" style={{ width: 400 }}>
            <ReactSearchAutocomplete
            items={uniqueTagsName}
            onSearch={handleOnNameSearch}
            onHover={handleOnHover}
            onSelect={handleOnNameSelect}
            onFocus={handleOnNameFocus}
            onClear = {handleOnNameClear}
            placeholder="Input Person Name"
            autoFocus
            // fuseOptions = {{keys:["company","game","jobs","name"]}}
            fuseOptions = {{keys:["key"]}}
            // resultStringKeyName = {selectedValue.label}
            resultStringKeyName = {"key"}
            styling = {{
              width:"100px",
            }}
          />
          </div>
          </div>
          <div className="rowC">
            <div className = "rowF" style={{ width: 400 }}>
            <ReactSearchAutocomplete
            items={uniqueTagsGenre}
            onSearch={handleOnGenreSearch}
            onHover={handleOnHover}
            onSelect={handleOnGenreSelect}
            onFocus={handleOnGenreFocus}
            onClear = {handleOnGenreClear}
            placeholder="Input Genre"
            autoFocus
            // fuseOptions = {{keys:["company","game","jobs","name"]}}
            fuseOptions = {{keys:["key"]}}
            // resultStringKeyName = {selectedValue.label}
            resultStringKeyName = {"key"}
            styling = {{
              width:"100px",
              zindex :1
            }}
          />
          </div>
          <br/>
          <div className = "rowG" style={{ width: 400 }}>
            <ReactSearchAutocomplete
            items={uniqueTagsJobs}
            onSearch={handleOnJobsSearch}
            onHover={handleOnHover}
            onSelect={handleOnJobsSelect}
            onFocus={handleOnJobsFocus}
            onClear = {handleOnJobsClear}
            placeholder="Input Job Name"
            autoFocus
            // fuseOptions = {{keys:["company","game","jobs","name"]}}
            fuseOptions = {{keys:["key"]}}
            // resultStringKeyName = {selectedValue.label}
            resultStringKeyName = {"key"}
            styling = {{
              width:"100px",
            }}
          />
          </div>
          </div>
        <br/>
        <div className="DatePicker">
        <div className="DatePicker-component">
          <h2 className="h2-datepicker-tag">
            Select Start Date :
          </h2>
          <DatePicker id="datepicker" wrapperClassName="datePicker"
              selected={startGameYear}
              // onChange={(date) => setStartGameYear(date)}
              onChange={handleStartGameYear}
              showYearPicker
              calendarContainer={MyStartContainer}
              maxDate={addDays(new Date(), 0)}
              minDate= {new Date(1990,1,1)}
              dateFormat="yyyy"
            />
          </div>
          <br/>
          <div className="DatePicker-component">
          <h2 className="h2-datepicker-tag">
            Select End Date :
          </h2>
          <DatePicker id="datepicker" wrapperClassName="datePicker"
              selected={endGameYear}
              // onChange={(date) => setEndGameYear(date)}
              onChange={handleEndGameYear}
              showYearPicker
              calendarContainer={MyEndContainer}
              maxDate={addDays(new Date(), 0)}
              minDate= {startGameYear}
              dateFormat="yyyy"
            />
          </div>
          </div>
          <br/>
          <br/>
          <div class = 'button_wrapper'>
        <button 
        class="button"
        onClick={handleClick}>
           Search 
        </button>
        </div>
        <br/>
        </div>
          <GameList jobs={filteredData}/>
        </div>
     );}
 
export default Search;