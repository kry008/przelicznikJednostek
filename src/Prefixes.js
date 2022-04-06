import React from 'react';

var prefixLong = [
    {"name": "kilometr", "value": "1000"},
    {"name": "metr", "value": "1"},
    {"name": "centymetr", "value": "0.01"},
    {"name": "milimetr", "value": "0.001"},
    {"name": "dekametr", "value": "0.1"},
    {"name": "hektometr", "value": "100"},
    {"name": "decametr", "value": "10"},
    {"name": "jard", "value": "0.9144"},
    {"name": "stopa", "value": "0.3048"},
    {"name": "fot", "value": "0.0254"},
    {"name": "cal", "value": "0.01"},
    {"name": "mil", "value": "0.0000254"},
]
var prefixTime = [
    {"name": "sekunda", "value": "1"},
    {"name": "minuta", "value": "60"},
    {"name": "godzina", "value": "3600"},
    {"name": "dzień", "value": "86400"},
    {"name": "tydzień", "value": "604800"},
    {"name": "miesiąc", "value": "2629800"},
    {"name": "rok", "value": "31557600"},
]
var prefixWeight = [
    {"name": "kilogram", "value": "1000"},
    {"name": "gram", "value": "1"},
    {"name": "miligram", "value": "0.001"},
    {"name": "decygram", "value": "0.1"},
    {"name": "hektogram", "value": "100"},
    {"name": "dekagram", "value": "10"},
    {"name": "jednostka", "value": "0.90718474"},
    {"name": "dziesięciogram", "value": "0.1"},
    {"name": "sztuka", "value": "0.028349523125"},
    {"name": "funt", "value": "0.45359237"},
    {"name": "dram", "value": "0.0017718452"},
    {"name": "slonce", "value": "0.0005681818"},
]
var prefixMemory = [
    {"name": "bajt", "value": "1"},
    {"name": "kilobajt", "value": "1000"},
    {"name": "megabajt", "value": "1000000"},
    {"name": "gigabajt", "value": "1000000000"},
    {"name": "terabajt", "value": "1000000000000"},
    {"name": "petabajt", "value": "1000000000000000"},
    {"name": "exabajt", "value": "1000000000000000000"},
    {"name": "zettabajt", "value": "1000000000000000000000"},
]
var prefixTemp = [
    {"name": "stopień Celsjusza", "value": "1"},
    {"name": "stopień Fahrenheita", "value": "1.8"},
    {"name": "stopień Rankine", "value": "1.8"},
    {"name": "stopień Delisle", "value": "0.6666666666666666"},
    {"name": "stopień Newtona", "value": "33.8"},
    {"name": "stopień Réaumur", "value": "0.8"},
    {"name": "stopień Rømera", "value": "0.44"},
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
    }
    handleSubmit(event) {
        event.preventDefault();
        var selectedType = this.props.selectedType;
        var result = '';
        var name = '';
        var prefixes = [];
        var basic = 0
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
            prefixes = prefixTemp;
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
        
        basic = this.state.result * this.props.givenValue
        console.log(basic);
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
            prefixes = prefixTemp;
        }

        return (
            <div className="Prefixes">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <select value={selectedUnit} onChange={this.handleChange}>
                            {prefixes.map(function(prefix) {
                                return <option key={prefix.name} value={prefix.name}>{prefix.name}</option>
                            })}
                        </select>
                    </label>
                    <input type="text" value={givenValue} onChange={(event) => this.setState({givenValue: event.target.value})} />
                    <input type="submit" value="Submit" />
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