import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Person from './components/Person';

import './custom.css'
import person from './components/Person';

class App extends Component {
    //static displayName = App.name;
    state = {
        persons: [
            { name: 'Diego', age: 32 },
            { name: 'Aurora', age: 28 },
            { name: 'Ian', age: 2 }
        ],
        otherState: 'some other state'
    }

    switchNameHandler = (newName) => {
        // DON'T DO THIS this.state.persons[0].name = "Ernesto";
        this.setState({
            persons: [
                { name: newName, age: 32 },
                { name: 'Aurora', age: 28 },
                { name: 'Ian', age: 2 }
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Diego', age: 32 },
                { name: event.target.value, age: 28 },
                { name: 'Ian', age: 2 }
            ]
        })
    }

    render() {
        const style = {
            backgrounColor: 'white',
            font: 'intherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            margin: '16px auto',
            textAlign: 'center'
        }
        return (
            <Layout>
                <h1>Hi, I'm a React App</h1>
                <p onClick={this.switchNameHandler}>This is really working!</p>
                <button className="bttn btn-success" style={style} onClick={() => this.switchNameHandler('New Name')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age} />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Ernesto!!')}
                    changed={this.nameChangedHandler}> My Hobbies are: singing and playing</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age} />
            </Layout>
        )
    };
};

export default App;