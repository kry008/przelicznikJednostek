import React from 'react';

class TypeField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedType: '',
        };
    }

    render() {
        return (
        <div className="typeField">
            <select value={this.props.valueInput} onChange={this.props.handleChange}>
                <option value="long">Długości</option>
                <option value="time">Czasu</option>
                <option value="weight">Wagi</option>
                <option value="memory">Pamięci</option>
                <option value="space">Powierzchni</option>
            </select>
        </div>
        );
    }
}
export default TypeField;
  