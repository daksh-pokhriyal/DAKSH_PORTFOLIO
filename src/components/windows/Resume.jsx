import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = () => {
    return (
        <MacWindow title="Resume">
            <div className="resume-window">
                <iframe
                   src="/dakshpokhriyal_resume_2026.pdf#zoom=150"
                    title="Daksh Pokhriyal Resume"
                />
            </div>
        </MacWindow>
    )
}

export default Resume