import React from "react"
import { Button } from "react-bootstrap"

class App extends React.Component {
    render() {
        return (
            <div>
                <h1
                    style={{
                        color: "#61DAFB",
                    }}
                >
                    Setup!
                </h1>
                <Button
                    onClick={() => alert("Hello World!!!")}
                    variant="primary"
                    size="lg"
                    active
                >
                    Click me
                </Button>
            </div>
        )
    }
}

export default App
