import React, { Component} from 'react';
import AlertUser from './AlertUser/AlertUser';
import DisplayName from './DisplayName/DisplayName';
import JokeAPI from './JokesAPI/JokeAPI';
import NameList from './NameList/NameList';
import SuperheroCreateForm from './SuperheroCreateForm/SuperheroCreateForm';
import SuperheroTable from './SuperheroTable/SuperheroTable';
import axios from 'axios'


class App extends Component {
   

            state = { 
                firstName: 'Reggie',
                lastName: 'White',
                names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
                superheroes : 
                    [
                        {
                            superheroId: 1,
                            name: 'Batman',
                            primaryAbility: 'Wealthy',
                            secondaryAbility: 'Rich'
                        },
                        {
                            superheroId: 2,
                            name: 'Superman',
                            primaryAbility: 'Super strength',
                            secondaryAbility: 'Fly'
                        },
                        {
                            superheroId: 3,
                            name: 'Spiderman',
                            primaryAbility: 'Spider senses',
                            secondaryAbility: 'Shoots web'
                        }
                    ],
        joke:[]

        
            }
    
    componentDidMount(){
        this.getJoke()
    }

     getJoke= async ()=>{
        let response = await axios.get('https://v2.jokeapi.dev/joke/Programming?amount=5&type=twopart');
        this.setState({
            joke:response.data.jokes
        })

        
    }
    

                
    AlertUser =()=>{
        let alertMessage = alert('devCodeCamp');

        return alertMessage;
        }
  
    createHero=(newHero)=>{
        
        this.state.superheroes.push(newHero);
       
    }

    findHeroArrayNumber=()=>{
        let superheroArrayAmount = this.state.superheroes.length +1

        return superheroArrayAmount
    }

    

    render(){
        console.log(this.state.joke)
        
        return ( 
            <div className='container-fuild'>
            <DisplayName firstName={this.state.firstName} lastName={this.state.lastName} />
            <NameList name={this.state.names} />
            <AlertUser alert= {this.AlertUser}/>
            <SuperheroTable heros={this.state.superheroes}/>
            
            
            <SuperheroCreateForm newHero={this.createHero}/>
            {this.state.joke.length > 0 &&
                <JokeAPI joke={this.state.joke} getNewJoke={this.getJoke}/>
            }
            </div>
         )
    }
}
 
export default App;