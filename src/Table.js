import React from "react";
import { prefixLong, prefixTime, prefixWeight, prefixMemory, prefixSpace } from "./zmienne";
//<Table selectedType={this.state.selectedType} basic={this.state.basic} basicValue={this.state.result} usedPrefixes={this.state.usedPrefixes}/>
class Table extends React.Component{
    //make table with prefixes based on given value
    //make constructor, render and other methods
    //save props to state
    constructor(props){
        super(props);
        this.state = {
            selectedType: this.props.selectedType,
            basic: this.props.basic,
            basicValue: this.props.basicValue,
            usedPrefixes: this.props.usedPrefixes,
        }
       // this.makeRows = this.makeRows.bind(this);
    }
    //use this.props.basicValue to calculate prefixes
    makeRows(){
        var rows = [];
        var basicValue = this.props.basicValue;
        var usedPrefixes = this.props.usedPrefixes;
        var basic = this.props.basic;
        var selectedType = this.props.selectedType;
        var prefixes = [];
        if(selectedType === "long"){
            prefixes = prefixLong;
        }
        else if(selectedType === "time"){
            prefixes = prefixTime;
        }
        else if(selectedType === "weight"){
            prefixes = prefixWeight;
        }
        else if(selectedType === "memory"){
            prefixes = prefixMemory;
        }
        else if(selectedType === "space"){
            prefixes = prefixSpace;
        }
        for(var i = 0; i < prefixes.length; i++){
            var prefix = prefixes[i];
            var value = prefix.value;
            var name = prefix.name;
            var result = basicValue * value;
            var used = false;
            for(var j = 0; j < usedPrefixes.length; j++){
                if(usedPrefixes[j] === name){
                    used = true;
                }
            }
            rows.push(<tr key={i}><td>{name}</td><td>{result}</td></tr>);
        }
        return rows;
    }
    //you have data from props, make table from it
    //table haders: Jednostka, Wartość, Przedrostek
    //table rows: number, values, prefixes
    //make on <table>
    //use basic value and prefixes from props
    render(){
       return(
              <table>
                    <thead>
                        <tr>
                            <th>Jednostka</th>
                            <th>Wartość</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.makeRows()}
                    </tbody>
                </table>
         );

    }

}
export default Table;