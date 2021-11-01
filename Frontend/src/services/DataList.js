import axios from "axios";
import { setfieldType,setinputValue} from '../Searchbar';

const GameListData = async () => {
    const res = await axios.get("http://localhost:5000/database/games")
    if (res == null){
        console.log("oops")
        return;
    }
    return res.data;
};

const PersonListData = async () =>{
    const res = await axios.get("http://localhost:5000/database/persons")
    if (res == null){
        console.log("oops")
        return;
    }
    return res.data;
};

const GetJobListData = async () => {
    // let res = axios.get("http://localhost:5000/database/getJobs")
    const res = await axios.get("http://localhost:5000/database/getJobs")
    if (res == null){
        console.log("oops")
        return;
    }
    return res.data;
};

const postvidData = async (props) => {
    const res = axios.post('http://localhost:5000/database/vidUrl', {
        url: props.url,
        company: props.company,
        game: props.game
      });
      if (res == null) {
          console.log("oops")
          return;
      }
      return res.data
}


export default {
    GameListData,
    PersonListData,
    GetJobListData,
    postvidData
};