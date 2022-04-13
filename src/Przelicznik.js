import React from 'react';
import TypeField from './TypeField';
import Prefixes from './Prefixes';
import Table from './Table';

class Przelicznik extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedType: 'long',
            selectedUnit: '',
            selectedValue: '',
            result: '',
            basic: 0,
            usedPrefixes: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.stateUp = this.stateUp.bind(this);
    }
    handleChange(event) {
        this.setState({
            selectedType: event.target.value,
            basic: 0,
            selectedUnit: '',
            selectedValue: '',
            result: '',
        });
    }
    stateUp(selectedType, result, basic, usedPrefixes) {
        this.setState({
            selectedType: selectedType,
            result: result,
            basic: basic,
            usedPrefixes: usedPrefixes,
        });
        console.log(this.state);
    }


    render() {
        return (
        <div className="przelicznik">
            <h3>Wybierz typ jednostki:</h3>
            <TypeField handleChange={this.handleChange} valueInput={this.state.selectedType} />
            <h4>Wybierz przedrostek: </h4>
            <Prefixes selectedType={this.state.selectedType} stateUp={this.stateUp}/>
            <Table selectedType={this.state.selectedType} basic={this.state.basic} basicValue={this.state.result} usedPrefixes={this.state.usedPrefixes}/>
         </div>
        );
    }
}
export default Przelicznik;
  