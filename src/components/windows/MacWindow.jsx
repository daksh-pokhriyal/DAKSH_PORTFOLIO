
import React from 'react'
import {Rnd} from 'react-rnd'
import "./window.scss"

const MacWindow = ({children, title = "Portfolio"}) => {
    return (
        <Rnd
            default={{
                x: 100,
                y: 80,
                width: 800,
                height: 550
            }}
            minWidth={300}
            minHeight={200}
            bounds="window"
            enableResizing={{
                top: true,
                right: true,
                bottom: true,
                left: true,
                topRight: true,
                bottomRight: true,
                bottomLeft: true,
                topLeft: true
            }}
        >
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>

                    <span>{title}</span>
                </div>

                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow