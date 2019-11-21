import React, { Component,createContext } from 'react'

export const DataContext = createContext()

export default class DataContextProvider extends Component {
    render() {
        const name = "Tharunkumar"
        return (
            <div>
                <DataContext.Provider value={name}>
                        {this.props.children}
                </DataContext.Provider>
            </div>
        )
    }
}

