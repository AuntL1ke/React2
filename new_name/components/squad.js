export default function squad(players){
    <div className="row">
        <h3>Team Squad</h3>
        <ul>
            {players.map((player,index)=>(
                <li key={index}>{player}</li>
            ))}
        </ul>
    </div>
}