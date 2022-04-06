import React from 'react';
import TypeField from './TypeField';
import Prefixes from './Prefixes';
import Table from './Table';

class Przelicznik extends React.Component {
    //make function which will get from TypeField selected type
    //and save to states
    //and then render result
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
        //this.handleSubmit = this.handleSubmit.bind(this);
                
    }
    handleChange(event) {
        this.setState({
            selectedType: event.target.value,
        });
    }
    stateUp()
    {

    }


    render() {
        return (
        <div className="przelicznik">
            <h3>Wybierz typ jednostki:</h3>
            <TypeField handleChange={this.handleChange} valueInput={this.state.selectedType} />
            <h4>Wybierz przedrostek: </h4>
            <Prefixes selectedType={this.state.selectedType} stateUp={this.stateUp}/>
            <Table />
        </div>
        );
    }
}
export default Przelicznik;
  