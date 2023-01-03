import dogImage from '../../assets/dog1.jpg';
import dogImageTwo from '../../assets/bauceron.jpg';
import dogImageThree from '../../assets/bauceron2.jpg';
import dogImageFour from '../../assets/bauceron4.jpg'
import DogCard from '../DogCard/DogCard';
import './MainSection.css';

const dogList = [
    {name: 'Jason', src: dogImage, description: 'Nice dog'},
    {name: 'Leonardo', src: dogImageTwo, description: 'Fierce dog'},
    {name: 'Bosuano', src: dogImageThree, description: 'Smart dog'},
    {name: 'Jeffrey', src: dogImageFour, description: 'Strong dog'},
]

function MainSection(){
    return(
        <div className="main">
            <h1>Welcome to my React Dog Page</h1>
            <br/>
           
           {/* <DogCard name={'Jason'} src={dogImage} description={'Looks scary but is the nicest dog'} />
           <DogCard name={'Leonardo'} src={dogImageTwo} description={'The most majestic Italian dog'} />
           <DogCard name={'Jeffrey'} src={dogImageThree} description={'The most american dog'} /> */}
            <div className='dogs-container'>
                {dogList.map(dog => {
                    return <DogCard name={dog.name} src={dog.src} description={dog.description}/>
                })}
            </div>
            
        </div>
    )
}

export default MainSection