import React, { useState } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Person from './components/Person';

import './custom.css'
import person from './components/Person';

const App = props => {
    //static displayName = App.name;

    const [personsState, setPersonsState] = useState({
        persons: [
            { name: 'Diego', age: 32 },
            { name: 'Aurora', age: 28 },
            { name: 'Ian', age: 2 }
        ]
    });

    const [otherState, setOtherState] = useState({
        otherState: 'some other state'
    });

    console.log(personsState, otherState)

    const switchNameHandler = () => {
        // DON'T DO THIS this.state.persons[0].name = "Ernesto";
        setPersonsState({
            persons: [
                { name: 'App Hook', age: 32 },
                { name: 'Aurora', age: 28 },
                { name: 'Ian', age: 2 }
            ]
        });
    };

    return (
        <Layout>
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button className="bttn btn-success" onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My Hobbies are: singing and playing</Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
        </Layout>
    )
};

export default App;