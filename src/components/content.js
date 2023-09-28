import React, { useContext } from 'react'
import { DataProvider } from '../App'

export default function Content() {
    return (
        <div style={useContext(DataProvider)}>
            <h1>React Learning Series</h1>
            <h2>useContext Component data transfer</h2>
            <p>Context provides a way to pass data through the component tree without having to pass props down
                manually at every level.</p>
            <p>In a typical React application, data is passed top-down (parent to child) via props, but such
                usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are
                required by many components within an application. Context provides a way to share values like
                these between components without having to explicitly pass a prop through every level of the tree.
            </p>
        </div>
    )
}
