import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Validation from './components/Validation';
import Char from './components/Char';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;
    state = {
        userInput: ''
    }

    inputChangeHandler = (event) => {
        this.setState({ userInput: event.target.value });
    }

    deleteCharHandler = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index, 1);

        const updatedText = text.join('');
        this.setState({ userInput: updatedText })
    }

    render() {
        const charList = this.state.userInput.split('').map((ch, index) => {
            return <Char
                character={ch}
                key={index}
                clicked={() => this.deleteCharHandler(index)}
            />;
        });

        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <hr />
                <input type="text"
                    onChange={this.inputChangeHandler}
                    value={this.userInput}
                />
                <p>{this.state.userInput}</p>
                <Validation inputLength={this.state.userInput.length} />
                {charList}
            </Layout>
        );
    }
}