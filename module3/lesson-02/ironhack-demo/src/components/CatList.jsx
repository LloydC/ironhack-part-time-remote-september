import CatCard from './CatCard';
import { v4 as uuidv4 } from 'uuid';

function CatList(props){
    return(
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
        {props.catsList.map(cat => <CatCard key={uuidv4()} cat={cat}/>)}
      </div>
    )
}

export default CatList;