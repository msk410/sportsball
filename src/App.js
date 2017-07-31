import React, {Component} from 'react';
import './App.css';

const cities = {
    houston: "Rockets",
    dallas: "mavericks",
    los_angeles: "lakers"
}

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    }


    _onChange(e) {

        this.setState({
            value: e.target.value.toLowerCase()
        })
        console.log(this.state.value)
    }

    checkCity() {

        if(this.state.value === "") {
            return "Go ahead, type in a City"
        }

        if(cities[this.state.value]){
            return "go " + cities[this.state.value]
        }
        return this.state.value + "? Never heard of it."

    }
    render() {
        return (
            <div>
                <h1>What's your favorite city?</h1>
                <input id="cityName" onChange ={this._onChange.bind(this)} placeholder="Enter City" />
                <p>{this.checkCity()}</p>
            </div>
        );
    }
}

export default App;
