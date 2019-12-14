import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            show: "Dashboard"
        };
    }

    componentDidMount() {
        const dots = document.querySelectorAll(".dot");
        let i = 0;
        setInterval(() => {
            if (i < dots.length) {
                dots[i].style.display = "block";
                i++;
            } else {
                dots[0].style.display = "none";
                dots[1].style.display = "none";
                i = 0;
            }
        }, 1000);
        setTimeout(()=>this.props.history.push('/dashboard'), 5000)
    }

    render() {
        return (
            <div className=" animated infinte fadeInUp">
                <div className="App">
                    <div className="center">
                        <p className="p">
                            Filt<span className="secondHalf">Writer</span>
                        </p>
                        <div className="dots">
                            <p className="p">.</p>
                            <p className="dot p">.</p>
                            <p className="dot p">.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
