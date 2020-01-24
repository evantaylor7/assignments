import React from "react"

const {Provider, Consumer} = React.createContext()

class ThemeProvider extends React.Component {
    state = {
        theme: "dark"
    }

    themeChange = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme === "light" ? "dark" : "light"
            }
        })
    }

    render(){
        return(
            <Provider value={{...this.state, themeChange: this.themeChange}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeProvider, Consumer as ThemeConsumer}