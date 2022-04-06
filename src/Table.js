import React from "react";

class Table extends React.Component{
    render() {
        return (
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Jednostka</th>
                            <th>Wartość</th>
                            <th>Przedrostek</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>m</td>
                            <td>1</td>
                            <td>m</td>
                        </tr>
                        <tr>
                            <td>km</td>
                            <td>1000</td>
                            <td>m</td>
                        </tr>
                        </tbody>
                </table>
            </div>
        );
    }
}
export default Table;