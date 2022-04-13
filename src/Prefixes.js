import React from 'react';
import { prefixLong, prefixTime, prefixWeight, prefixMemory, prefix3 } from "./zmienne";

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
            basic: 0,

        });
        console.log(this.state.selectedUnit);
    }
    handleSubmit(event) {
        event.preventDefault();
        var selectedType = this.props.selectedType;
        var selectedUnit = this.state.selectedUnit;
        var givenValue = this.state.givenValue;
        var result = 0;
        var basic = 0;
        var usedPrefixes = [];
        var i = 0;
        if (selectedType === 'long') {
            for (i = 0; i < prefixLong.length; i++) {
                if (selectedUnit === prefixLong[i].name) {
                    result = givenValue / prefixLong[i].value;
                    basic = prefixLong[i].value;
                    usedPrefixes.push(prefixLong[i].name);
                }
            }
        }
        if (selectedType === 'time') {
            for (i = 0; i < prefixTime.length; i++) {
                if (selectedUnit === prefixTime[i].name) {
                    result = givenValue / prefixTime[i].value;
                    basic = prefixTime[i].value;
                    usedPrefixes.push(prefixTime[i].name);
                }
            }
        }
        if (selectedType === 'weight') {
            for (i = 0; i < prefixWeight.length; i++) {
                if (selectedUnit === prefixWeight[i].name) {
                    result = givenValue / prefixWeight[i].value;
                    basic = prefixWeight[i].value;
                    usedPrefixes.push(prefixWeight[i].name);
                }
            }
        }
        if (selectedType === 'memory') {
            for (i = 0; i < prefixMemory.length; i++) {
                if (selectedUnit === prefixMemory[i].name) {
                    result = givenValue / prefixMemory[i].value;
                    basic = prefixMemory[i].value;
                    usedPrefixes.push(prefixMemory[i].name);
                }
            }
        }
        if (selectedType === 'm3') {
            for (i = 0; i < prefix3.length; i++) {
                if (selectedUnit === prefix3[i].name) {
                    result = givenValue / prefix3[i].value;
                    basic = prefix3[i].value;
                    usedPrefixes.push(prefix3[i].name);
                }
            }
        }
        this.setState({
            result: result,
            basic: basic,
            usedPrefixes: usedPrefixes,
        });
        this.props.stateUp(selectedType, result, basic, usedPrefixes);
    }
    render() {
        var selectedType = this.props.selectedType;
        var selectedUnit = this.state.selectedUnit;
        var givenValue = this.state.givenValue;
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
        if (selectedType === "m3") {
            prefixes = prefix3;
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
                    <input type="number" min={0} value={givenValue} onChange={(event) => {this.setState({givenValue: event.target.value}); console.log(event.target.value);}} />
                    <input type="submit" value="Wyślij"  />
                </form>
            </div>
        );
    }
}

export default Prefixes;