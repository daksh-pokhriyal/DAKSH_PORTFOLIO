import React from 'react'
import MacWindow from './MacWindow'
import "./notes.scss"

const Notes = () => {
    return (
        <MacWindow>
            <div className="notes">
                <h1>Hey, I'm Daksh! 👋</h1>

                <p>
                    I'm a B.Tech Information Technology student at NIT Kurukshetra,
                    passionate about software development and Artificial Intelligence.
                </p>

                <h2>What I do</h2>
                <ul>
                    <li>Data Structures and Algorithms</li>
                    <li>Frontend Development with React</li>
                    <li>Generative AI and Agentic AI</li>
                    <li>Building creative projects</li>
                </ul>

                <h2>My Interests</h2>
                <p>
                    I enjoy exploring new technologies, solving challenging problems,
                    and turning ideas into useful products.
                </p>

                <h2>My Goal</h2>
                <p>
                    To keep learning, build impactful projects, and grow as a software
                    developer.
                </p>
            </div>
        </MacWindow>
    )
}

export default Notes