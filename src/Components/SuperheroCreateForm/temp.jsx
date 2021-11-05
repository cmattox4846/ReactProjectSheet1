import React, { Component } from 'react';




class SuperheroCreateForm extends Component {
  
    constructor(props) {
        super(props);
        this.state = {  
            superheroId: this.props.arrayNumber,
            name: '',
            primaryAbility: '',
            secondaryAbility: '',
            errors:{
                name: '',
                primaryAbility: '',
                secondaryAbility: ''
            }



        }
    }
    handleChange=(event)=>{
        let errors = this.state.errors;

        switch(event.target.name){
            case'name':
                errors.name= event.target.value.length < 2 ? "Name needs to be more then 2 Characters" : null;
                break;
            case'primaryAbility':
                errors.primaryAbility= event.target.value.length <2 ? "Name needs to be more then 2 Characters" :null;
                break;
            case'secondaryAbility':
                errors.secondaryAbility= event.target.value.length <2 ? "Name needs to be more then 2 Characters" :null;
                break;
            default:
                break;

        }

        this.setState({
            [event.target.name]:event.target.value,
            [event.target.name]:this.superheroId,
            errors:errors
        });
        
    }

    handleSubmit=(event)=>{
        debugger
        event.preventDefault();
        this.props.newHero(this.state)
    }

    render() { 
        
        return (
            <div className="container-fluid">
                <div className='col-10'>
                    <form onSubmit={this.handleSubmit}>
                        <div className ='form-group row'>
                            <div className="col-10">
                                <label>ID </label>
                                <input name='superheroId' onLoad={this.handleChange} value={this.state.superheroId} readOnly/>
                            </div>
                        </div>
                        <div className ='form-group row'>
                            <div className="col-10">
                                <label>Name </label>
                                <input name='name' onChange={this.handleChange} value={this.state.name}/>
                                {this.state.errors.name ? <p style={{color:'red'}}>{this.state.errors.name}</p>:''}
                            </div>
                        </div>
                        <div className ='form-group row'>
                            <div className="col-10">
                                <label>Primary Ability </label>
                                <input name="primaryAbility" onChange={this.handleChange} value={this.state.primaryAbility}/>
                                {this.state.errors.primaryAbility ? <p style={{color:'red'}}>{this.state.errors.primaryAbility}</p>:''}
                            </div>
                        </div>
                        <div className ='form-group row'>
                            <div className="col-10">
                                <label>Secondary Ability </label>
                                <input name='secondaryAbility' onChange={this.handleChange} value={this.state.secondaryAbility}/>
                                {this.state.errors.secondaryAbility ? <p style={{color:'red'}}>{this.state.errors.secondaryAbility}</p>:''}
                            </div>
                        </div>
                        <div className ='form-group row'>
                            <div className="col-sm-10">
                                <button type="submit">Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

          );
    }
}
 
export default SuperheroCreateForm;