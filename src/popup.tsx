import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import * as React from "react"
import * as ReactDOM from "react-dom"
import CirculatorManagerView from "./CirculatorManagerView"

const Main = () => <MuiThemeProvider><CirculatorManagerView /></MuiThemeProvider>

ReactDOM.render(<Main />, document.getElementById("content"))
