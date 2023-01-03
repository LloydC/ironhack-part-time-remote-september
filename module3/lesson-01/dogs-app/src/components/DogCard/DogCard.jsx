import './DogCard.css';

function DogCard(props){
    return(
        <div>
            <h2>{props.name}</h2>
            <img src={props.src} alt='dog_image' className="local-image" />
            <p>{props.description}</p>
        </div>
        
    )
}

export default DogCard;