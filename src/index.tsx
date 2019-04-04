
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {ready} from './utils'


function App() {
    return (
        <div>
            Hey.
        </div>
    )
}

ready(() => void ReactDOM.render(<App/>, document.getElementById("root")));
