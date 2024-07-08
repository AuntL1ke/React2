export default function achive(props){
    return(
        <div className="row">

            <h3>Achivements</h3>
            <p>Medals: {props.medals}</p>
            <p>Cups: {props.cups}</p>
            <p>Goals: {props.goals}</p>
        </div>
    )
}