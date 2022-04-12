import React from 'react';

var prefixLong = [
    {"name": "kilometr", "value": "0.001"},
    {"name": "metr", "value": "1"},
    {"name": "centymetr", "value": "100"},
    {"name": "milimetr", "value": "1000"},
    {"name": "dekametr", "value": "10"},
]
var prefixTime = [
    {
        "name": "sekunda",
        "value": "1"
    },
    {"name": "minuta", "value": "0.016666666666666"},
    {"name": "godzina", "value": "3600"},
]
var prefixWeight = [
    {"name": "kilogram", "value": "1"},
    {"name": "gram", "value": "0.001"},
    {"name": "miligram", "value": "0.000001"},
]
var prefixMemory = [
    {"name": "bajt", "value": "1"},
    {"name": "kilobajt", "value": "0.001"},
    {"name": "megabajt", "value": "0.000001"},
]
var prefixSpace = [
    {"name": "stopień Celsjusza", "value": "1"},
    {"name": "stopień Fahrenheita", "value": "0.5555555555555556"},
]

class Prefixes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedType: '',
            selectedUnit: '',
            givenValue: '',
            result: '',
            basic: 0,
            usedPrefixes: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            selectedUnit: event.target.value,
        });
        console.log(this.state.selectedUnit);
    }
    handleSubmit(event) {
        //make this function work
        event.preventDefault();
        var selectedType = this.props.selectedType;
        var selectedUnit = this.state.selectedUnit;
        var givenValue = this.state.givenValue;
        var result = 0;
        var basic = 0;
        var usedPrefixes = [];
        if (selectedType === 'long') {
            for (var i = 0; i < prefixLong.length; i++) {
                if (selectedUnit === prefixLong[i].name) {
                    result = givenValue * prefixLong[i].value;
                    basic = prefixLong[i].value;
                    usedPrefixes.push(prefixLong[i].name);
                }
            }
        }
        if (selectedType === 'time') {
            for (var i = 0; i < prefixTime.length; i++) {
                if (selectedUnit === prefixTime[i].name) {
                    result = givenValue * prefixTime[i].value;
                    basic = prefixTime[i].value;
                    usedPrefixes.push(prefixTime[i].name);
                }
            }
        }
        if (selectedType === 'weight') {
            for (var i = 0; i < prefixWeight.length; i++) {
                if (selectedUnit === prefixWeight[i].name) {
                    result = givenValue * prefixWeight[i].value;
                    basic = prefixWeight[i].value;
                    usedPrefixes.push(prefixWeight[i].name);
                }
            }
        }
        if (selectedType === 'memory') {
            for (var i = 0; i < prefixMemory.length; i++) {
                if (selectedUnit === prefixMemory[i].name) {
                    result = givenValue * prefixMemory[i].value;
                    basic = prefixMemory[i].value;
                    usedPrefixes.push(prefixMemory[i].name);
                }
            }
        }
        if (selectedType === 'space') {
            for (var i = 0; i < prefixSpace.length; i++) {
                if (selectedUnit === prefixSpace[i].name) {
                    result = givenValue * prefixSpace[i].value;
                    basic = prefixSpace[i].value;
                    usedPrefixes.push(prefixSpace[i].name);
                }
            }
        }
        this.setState({
            result: result,
            basic: basic,
            usedPrefixes: usedPrefixes,
        });
        this.props.stateUp(selectedType, result, basic, usedPrefixes);
        /*event.preventDefault();
        var selectedType = this.props.selectedType;
        var result = '';
        var name = '';
        var prefixes = [];
        var basic = 0
        console.log(this.state.selectedUnit)
        if (selectedType === 'long') {
            prefixes = prefixLong;
        }
        if (selectedType === 'time') {
            prefixes = prefixTime;
        }
        if (selectedType === 'weight') {
            prefixes = prefixWeight;
        }
        if (selectedType === 'memory') {
            prefixes = prefixMemory;
        }
        if (selectedType === 'temp') {
            prefixes = prefixSpace;
        }
        for (var i = 0; i < prefixes.length; i++) {
            if (prefixes[i].name === this.state.selectedUnit) {
                result = prefixes[i].value;
                name = prefixes[i].name;
            }
        }
        this.setState({
            result: result,
            selectedUnit: name,
        }); 
        console.log(this.state.result + ' ' + this.state.selectedUnit);
        
        basic = Number(this.state.result) * Number(this.props.givenValue)
        console.log(Number(this.state.result) * Number(this.props.givenValue));
        //save to state usedPrefixes
        this.setState({
            basic: basic,
            usedPrefixes: prefixes,
        });
        console.log(this.state.usedPrefixes);

        this.setState({
            basic: basic
        });
        this.props.stateUp();
        this.setState({
            result: basic
        })
        this.props.stateUp()*/
    }
    render() {
        var selectedType = this.props.selectedType;
        var selectedUnit = this.state.selectedUnit;
        var givenValue = this.state.givenValue;
        var result = this.state.result;
        var prefixes = [];
        if (selectedType === 'long') {
            prefixes = prefixLong;
        }
        if (selectedType === 'time') {
            prefixes = prefixTime;
        }
        if (selectedType === 'weight') {
            prefixes = prefixWeight;
        }
        if (selectedType === 'memory') {
            prefixes = prefixMemory;
        }
        if (selectedType === 'temp') {
            prefixes = prefixSpace;
        }

        return (
            <div className="Prefixes">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <select value={selectedUnit} onChange={this.handleChange}>
                            <option></option>
                            {prefixes.map(function(prefix) {
                                return <option key={prefix.name} value={prefix.name}>{prefix.name}</option>
                            })}
                        </select>
                    </label>
                    <input type="text" value={givenValue} onChange={(event) => {this.setState({givenValue: event.target.value}); console.log(event.target.value);}} />
                    <input type="submit" value="Submit"  />
                </form>
                <p>{result}</p>
            </div>
        );
    }
}

/*class Prefixes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedType: this.props.selectedType
        };
    }
    render() {
        return (
            <div className="prefixes">
                {prefixLong.map(prefix => (
                    <div className="prefix">
                        <input type="radio" name="prefix" value={prefix.value} onChange={this.props.handleChange} />
                        <label>{prefix.name}</label>
                    </div>
                ))}
            </div>
        );
    }

}*/
export default Prefixes;