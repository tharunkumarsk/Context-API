import React, { Component } from 'react'
import {DataContext} from "./DataContext";

export default class GrandChild extends Component {
    static contextType = DataContext
    render() {
        return (
            <DataContext.Consumer>
                 {(name) => (
                    <div>
                     <h1>Grandchild</h1>
                     <h3>Name: {name}</h3>
                    </div>
                )}
            </DataContext.Consumer>
        )
    }
}
