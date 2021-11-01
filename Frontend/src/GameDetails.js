import { useEffect } from "react";

const GameDetails = ({game}) => {
    useEffect(() => {
        console.log(game)
    })
    if (game!=null){
    return ( 
        <div className="game-preview" key ={game.id}>
            <h1>{ game.name}</h1>
            <h3> Developed by {game.createdBy}</h3>
            <h3>{game.platform}</h3>
        </div>
     );}
     return(<h1>Empty game GameDetails !</h1>)
}
 
export default GameDetails;
