import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Person from './components/Person';
import UserOutput from './components/UserOutput';

import './custom.css'
import person from './components/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Diego', age: 32 },
            { name: 'Aurora', age: 28 },
            { name: 'Ian', age: 2 }
        ],
        showPersons: false,
        paragraphs: [{
            title: 'What is Lorem Ipsum?',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            title: 'Why do we use it?',
            body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more- or - less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.Various versions have evolved over the years, sometimes by accident, sometimes on purpose(injected humour and the like).'
        }]
    };

    switchNameHandler = (newName) => {
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

    changeFirstTitleHandler = (event) => {
        let sectionIndex = event.target.parentElement.className;
        let tempState = this.state;
        let section = tempState.paragraphs[sectionIndex];

        if (event.target.className == "title") {
            section.title = event.target.value;
        }
        else {
            section.body = event.target.value;
        }

        tempState[sectionIndex] = section;

        this.setState({
            tempState
        });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow })
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
                <button
                    className="bttn btn-success"
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons</button>

                {
                    this.state.showPersons === true ?
                        <div >
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
                        </div> : null
                }

                <UserOutput
                    section="0"
                    title={this.state.paragraphs[0].title}
                    content={this.state.paragraphs[0].body}
                    changed={this.changeFirstTitleHandler}
                />
                <UserOutput
                    section="1"
                    title={this.state.paragraphs[1].title}
                    content={this.state.paragraphs[1].body}
                    changed={this.changeFirstTitleHandler}
                />
            </Layout>
        )
    };
};

export default App;