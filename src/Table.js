import React from "react";
import { prefixLong, prefixTime, prefixWeight, prefixMemory, prefix3 } from "./zmienne";
class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedType: this.props.selectedType,
            basic: this.props.basic,
            basicValue: this.props.basicValue,
            usedPrefixes: this.props.usedPrefixes,
        }
        this.roundNum = this.roundNum.bind(this);
    }
    roundNum(liczba) {
        liczba = liczba * 10000;
        var wynik = Math.round(liczba)/10000;
        return wynik;
        }
    makeRows(){
        var rows = [];
        var basicValue = this.props.basicValue;
        var usedPrefixes = this.props.usedPrefixes;
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
        else if(selectedType === "m3"){
            prefixes = prefix3;
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
            rows.push(<tr key={i}><td>{name}</td><td>{this.roundNum(result)}</td></tr>);
        }
        return rows;
    }
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