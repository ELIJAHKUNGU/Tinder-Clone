import React, {useState} from 'react'
import TinderCard from 'react-tinder-card';


const TinderCards = () => {
    const {people, setPeople} = useState({
        
            name: 'Max',
            url: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

        },
        {
            name: 'STEVE JOBS',
            url: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        

    });

    //Bad 
    //const people= [];
    //people.push({name: 'John', age: '30', job: 'developer'});
  //GOOD 
  //setPeople({...people, name: 'John', age: '30', job: 'developer'});
    return (
    
    <div>
        <TinderCard className="swipe" key={people.name}>
            <div className="card" style={{backgroundImage: `url(${people.url})`}}>
                {/* <div className="face front">
                    <img src={people.url} alt=""/>
                </div>
                <div className="face back">
                    <h1>{people.name}</h1>
                    <p>{people.url}</p>
                  
                </div> */}
                <h3>{people.name}</h3>
            

            </div>
        </TinderCard>
    </div>
  )
}

export default TinderCards