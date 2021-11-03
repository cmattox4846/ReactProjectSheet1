import React from 'react';

const SuperheroTable = (props) => {
    return ( 
        <div>
            <table>
                <thead>Superheroes</thead> 
                <tbody>
                    <tr>
                        <td>
                            <div>
                                <h2>ID<br/></h2><h4>{props.heros.map((element)=><ol>{element.superheroId}</ol>)}</h4>
                            </div>
                        </td>
                        <td>
                            <div>
                                <h2>Names<br/></h2><h4>{props.heros.map((element)=><ol>{element.name}</ol>)}</h4>
                            </div>
                        </td>
                        <td>
                            <div>
                                <h2>Primary Ability<br/></h2><h4>{props.heros.map((element)=><ol>{element.primaryAbility}</ol>)}</h4>
                            </div>
                        </td>
                        <td>
                            <div>
                                <h2>Secondary Ability<br/></h2><h4>{props.heros.map((element)=><ol>{element.secondaryAbility}</ol>)}</h4>
                            </div>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
 
export default SuperheroTable;