import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#575aff" : "white"
    }
    const dotStyle = {
        backgroundColor: props.isHeld ? "white" : "black"
    }

    function face() {
        switch (props.value) {
            case 1:
                return (
                    <div className="die__face die__face--first">
                        <span className="dot" style={dotStyle}></span>
                    </div>
                )
                break;
            case 2:
                return (
                    <div className="die__face die__face--second">
                        <span className="dot" style={dotStyle}></span>
                        <span className="dot" style={dotStyle}></span>
                    </div>
                )
                break;
        
            case 3:
                return (
                    <div className="die__face die__face--third">
                        <span className="dot" style={dotStyle}></span>
                        <span className="dot" style={dotStyle}></span>
                        <span className="dot" style={dotStyle}></span>

                    </div>
                )
                break;
        
            case 4:
                return (
                    <div className="die__face die__face--fourth">
                        <div className="die-column">
                            <span className="dot" style={dotStyle}></span>
                            <span className="dot" style={dotStyle}></span>
                        </div>
                        <div className="die-column">
                            <span className="dot" style={dotStyle}></span>
                            <span className="dot" style={dotStyle}></span>
                        </div>
                    </div>
                )
                break;

            case 5:
                return (
                    <div className="die__face die__face--fifth">
                        <div className="die-column">
                            <span className="dot" style={dotStyle}></span>
                            <span className="dot" style={dotStyle}></span>
                        </div>
                        <div className="die-column">
                            <span className="dot" style={dotStyle}></span>
                        </div>
                        <div className="die-column">
                            <span className="dot" style={dotStyle}></span>
                            <span className="dot" style={dotStyle}></span>
                        </div>
                    </div>
                )
                break;

            case 6:
                    return (
                        <div className="die__face die__face--fourth">
                            <div className="die-column">
                                <span className="dot" style={dotStyle}></span>
                                <span className="dot" style={dotStyle}></span>
                                <span className="dot" style={dotStyle}></span>
                            </div>
                            <div className="die-column">
                                <span className="dot" style={dotStyle}></span>
                                <span className="dot" style={dotStyle}></span>
                                <span className="dot" style={dotStyle}></span>
                            </div>
                        </div>
                    )
                    break;
            
            default:
                break;
        }
    }
    return (
        <div 
            className="die" 
            style={styles}
            onClick={props.holdDice}
        >
            {face()}
        </div>
    )
}