import axios from 'axios';
import GameList from "./GameList";
import DATA from './services/DataList';
import React,{useState,useEffect} from 'react';
import ReactExpandableListView from './ReactExpandableListView';
import UploadList from "./UploadList";
import PersonList from './PersonList';
import DatePicker from 'react-datepicker';
import { CalendarContainer } from 'react-datepicker';
import addDays from 'date-fns/addDays';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/styles';

let res = null
// let res_new = null
const data_list = [
  // {
  //   headerName: 'Names',
  //   isOpened: false,
  //   height: 100,
  //   isReactComponent: true,
  //   items: [
  //     (
  //     <li key ="1">
  //       Abhishek
  //     </li>
  //     ),
  //     (
  //     <li key ="2"> 
  //       Chandramouli
  //     </li>
  //     ),
  //     (
  //     <li key ="3">
  //       Jo Jo
  //     </li>
  //     ),
  //   ],
  // },
  // {
  //   headerName: 'Cook up random shit..',
  //   isOpened: false,
  //   height: 100,
  //   isReactComponent: true,
  //   items: [
  //     (
  //     <li key ="1" ref ="Hi">
  //       Hi
  //     </li>
  //     ),
  //  ],
  // },
  {
    headerName : "ListG",
    isOpened: true,
    isReactComponent: false,
    items : [{
      title : "items1"
    }, {
      title : "items2"
    }, {
      title : "items3"
    },{
      title : "items4"
    },{
      title : "items5"
    },{
      title : "items6"
    }],
    height: 100
  }
];

const Upload = () => {
    const res_list = [];
    const [selectedFile, setselectedFile] = useState(null)
    const [filePicked, setfilePicked] = useState(false)
    const [valueGameGenre, setvalueGameGenre] = useState("");
    const [url, seturl] = useState(null)
    const [companyName, setcompanyName] = useState(null)
    const [gameName, setgameName] = useState(null)
    const [gameYear, setGameYear] = useState(new Date());
    const [gamePlatform, setgamePlatform] = useState(null);
    const [inputData, setInputData] = useState([{"url":"https://youtu.be/YXrC4VcpXjE","companyName":"Company Name","gameName":"Game Name","year":"2001","platform":"Platform","genre":"genre"}]);
    const [dataPost,setdataPost] = useState([]);
    const [Added, setAdded] = useState(false);
    const [Deleted,setDeleted] = useState(false);
    const [dummyNewVariable,setdummyNewVariable] = useState(true);
    const [dummyArray, setdummyArray] = useState([]);
    const [controlVariable, setcontrolVariable] = useState(0);
    const [startingGameYear, setStartingGameYear] = useState("2021");


    console.log(data_list);
    // On file select (from the pop up)
    const onFileChange = (event) => {
    setselectedFile(event.target.files[0]);
    setfilePicked(true)
    };

    const handleUrl=(e)=>{
      seturl(e.target.value)
    } 
    const handleCompanyName=(e)=>{
      setcompanyName(e.target.value)
    } 
    const handleGameName=(e)=>{
      setgameName(e.target.value)
    } 
    const handleGamePlatform=(e)=>{
      setgamePlatform(e.target.value)
    } 
    const handleGameGenre=(e)=>{
      setvalueGameGenre(e.target.value)
    }

    const handleOnGameYear=(date)=>{
      var string1 = String(date)[11]
      var i = 12
      for(i=12;i<15;i++){
        string1 = string1.concat(String(date)[i]);
      }
      console.log(string1);
      setGameYear(date);
      // console.log(startGameYear);
      setStartingGameYear(string1);
      console.log(startingGameYear);
    }

    const handleAddition = (e) =>{
      setAdded(true);
      setAdded(e.target.value);
      // [...inputData, {"url":url,"companyName":companyName,"gameName":gameName}];
      const dictArray = [...inputData];
      dictArray.push({"url":url,"companyName":companyName,"gameName":gameName, "year":String(startingGameYear), "platform": gamePlatform,"genre":valueGameGenre});
      setInputData(dictArray);
      console.log(inputData);
      setAdded(false)
    }

    const handleDeleteData = (url) => {
      setDeleted(true);
      const newInputData = inputData.filter(inputs => inputs.url !== url);
      setInputData(newInputData);
    }

    const handleClick= async (e)=>{
      if(inputData.url!="LinkedInUrl"){
        console.log(inputData);
        console.log(dataPost);
            // await (inputData).map(async (input_data) => {
            // res = await axios.post('http://localhost:5000/database/vidUrl', {
            //   url: input_data.url,
            //   company: input_data.companyName,
            //   game: input_data.gameName});
            //   if(res!=null){
            //     console.log(dataPost)
            //       res_list.push(res.data)
            //       console.log(res_list)
            //       setdataPost([res_list]);
            //       console.log(dataPost);
            //       // return res.data
            //     }
            // }
            // )

            // IMPORTANT

          //   while(controlVariable < inputData.length){
          //     res = await axios.post('http://localhost:5000/database/vidUrl', {
          //     url: inputData[controlVariable].url,
          //     company: inputData[controlVariable].companyName,
          //     game: inputData[controlVariable].gameName,
          //     year: inputData[controlVariable].year,
          //     platform: inputData[controlVariable].platform
          //   });

          //   // IMPORTANT

          //   var dummyDataHardCoded = [
          //   {"company":"Naughty Dog","game":"Last of Us","jobs":["WRITTEN BY"],"linkedinURL":"https://www.linkedin.com/search/results/people/?keywords=neil%20druckmann%20naughty%20","name":"NEIL DRUCKMANN","platform":"PC","year":"2019"},
          //   {"company":"Ubisoft","game":"Assassin's Creed","jobs":["WRITTEN BY"],"linkedinURL":"https://www.linkedin.com/search/results/people/?keywords=neil%20druckmann%20naughty%20","name":"NEIL DRUCKMANN","platform":"PC","year":"2019"}
          // ];
          //   if(res!=null){
          //     console.log(dataPost)
          //       res_list.push(res.data)
          //       console.log(res_list)
          //       setdataPost([...dataPost,res.data]);
          //       console.log(dataPost);
          //       // return res.data
          //     }
            
          //   setcontrolVariable(controlVariable+1);
          //   console.log(controlVariable);
          //   }

          //IMPORTANT

          var ctr=0
          console.log(inputData.length-1);
            while(ctr < inputData.length-1){
                res = await axios.post('http://localhost:5000/database/vidUrl', {
                url: inputData[ctr+1].url,
                company: inputData[ctr+1].companyName,
                game: inputData[ctr+1].gameName,
                year: inputData[ctr+1].year,
                platform: inputData[ctr+1].platform,
                genre: inputData[ctr+1].genre
              });
              console.log(inputData[controlVariable])
              if(res!=null){
                console.log(dataPost)
                  res_list.push(res.data)
                  console.log(res_list)
                  // setdataPost([...dataPost,res.data]);
                  await setdataPost(res_list);
                  console.log(dataPost);
                  // setdataPost("one loop done");
                  // return res.data
                }
                ctr=ctr+1;
                console.log(controlVariable)
                console.log(ctr);
            setcontrolVariable(controlVariable+1);
            console.log(controlVariable)
            }
            // setdataPost(res_list);
            console.log(dataPost);
        console.log(res);
      }
      console.log(dataPost);
      setdummyNewVariable(false);
      console.log(dummyNewVariable);
    }
    const [valueUrl, setvalueUrl] = useState("");
    const [valueCompanyName, setvalueCompanyName] = useState("");
    const [valueGameName, setvalueGameName] = useState("");
    const [valueGamePlatform, setvalueGamePlatform] = useState("");
    const BarStyling = {width:"15rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    
    // On file upload (click the upload button)
    const onFileUpload = () => {
      // Create an object of formData
      const formData = new FormData();
      // Update the formData object
      console.log(selectedFile);
      if(filePicked){
      formData.append(
        "myFile",
        selectedFile,
        selectedFile.name
      );}
      // Details of the uploaded file
      console.log(selectedFile);
      // Request made to the backend api
      // Send formData object
      axios.post("api/uploadfile", formData);
    };

    const MyContainer = ({ className, children }) => {
      return (
        <div style={{ color: "black"}}>
          <CalendarContainer className={className}>
            <div style={{ background: "#f0f0f0" ,color:'black', textAlign:"center"}}>
              Game Year of Release
            </div>
            <div style={{ position: "relative" }}>{children}</div>
          </CalendarContainer>
        </div>
      );
    };
    
    // File content to be displayed after
    // file upload is complete
    const fileData = () => {
    
      if (filePicked) {
         
        return (
          <div>
            <h2>File Details:</h2>
             
          <p>File Name: {selectedFile.name}</p>
          <p>File Type: {selectedFile.type}</p>
          <p>
              Last Modified:{" "}
              {selectedFile.lastModifiedDate.toDateString()}
            </p>
          </div>
        );
      } else {
        return (
          <div>
            {/* <br />
            <h4>Choose before Pressing the Upload button</h4> */}
            <div class="uploadsearch">
            <input 
              style={BarStyling}
              type="text"
                    id="header-search"
                    placeholder="Enter url"
                    name="s" 
                    input = {valueUrl} /*??*/
                    onChange = {handleUrl}
            />
            <br />
            <br />
            <input 
              style={BarStyling}
              type="text"
                    id="header-search"
                    placeholder="Enter game name"
                    name="s" 
                    input = {valueGameName} /*??*/
                    onChange = {handleGameName}
            />
            <br />
            <br />
            <input 
              style={BarStyling}
              type="text"
                    id="header-search"
                    placeholder="Enter game genre"
                    name="s" 
                    input = {valueGameGenre} /*??*/
                    onChange = {handleGameGenre}
            />
            <br />
            <br />
            <input 
              style={BarStyling}
              type="text"
                    id="header-search"
                    placeholder="Enter company name"
                    name="s" 
                    input = {valueCompanyName} /*??*/
                    onChange = {handleCompanyName}
            />
            <br />
            <br />
            <input 
              style={BarStyling}
              type="text"
                    id="header-search"
                    placeholder="Enter Game Platform"
                    name="s" 
                    input = {valueGamePlatform} /*??*/
                    onChange = {handleGamePlatform}
            />
            <br />
            <br />
            <DatePicker id="datepicker" wrapperClassName="datePicker"
              selected={gameYear}
              onChange={handleOnGameYear}
              showYearPicker
              calendarContainer={MyContainer}
              maxDate={addDays(new Date(), 0)}
              minDate= {new Date(1990,1,1)}
              dateFormat="yyyy"
            />
            </div>
            <br/>
            <div className="buttons-upload">
            <button type="submit" id="viewall" className="button-extract"
            onClick = {handleAddition}>
              Add to extract list
              </button>
            <button type="submit" id="submit" className="button-submit"
            onClick = {handleClick}>
              Extract
              </button>
              </div>
        <div className="blog-list">
      <h1> Input Data </h1>
      <Card
      style={{
        width:"25vw",
        backgroundColor:"rgba(229,229,229, 0.7)",
        margin:"2%",
        borderRadius:"20px"

      }}>
      <CardContent>
      {inputData.map(inputs => (
        <div  key={inputs.url} >
          <div className="card-content-css">
          <h2>{ inputs.companyName }</h2>
          <a href={inputs.url}><h3 class="txt-upload">{ inputs.gameName }</h3></a>
          <p class="txt-upload">PLATFORMS :{ inputs.platform }</p>
          <p class="txt-upload">GENRE:     { inputs.genre }</p>
          <p class="txt-upload">YEAR:      { inputs.year }</p>
          <div class="button-delete-wrapper">
          <button class="button-remove" onClick={() => handleDeleteData(inputs.url)}>Remove</button>
          <br/>
          </div>
          </div>
        </div>
       
      ))}
       </CardContent>
      </Card>
    </div>
            <UploadList id="uplist" jobs={dataPost}/>
            <div>
    </div>
    </div>
        );
      }
    }; 
    return (
      <div id='heading'>
          <h1>
            Ubisoft
          </h1>
          <h2>
            Video to text game credits identification
          </h2>
        {fileData()}
      </div>
      );
    }
 
export default Upload;
