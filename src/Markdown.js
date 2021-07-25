import React from 'react'
import { MarkdownPreview } from "react-marked-markdown";

function Markdown(info) {
    const date = new Date()
    const dateToday = date.toISOString().slice(0, 10)
    console.log(dateToday)
    const markdownContent = `
# Report

## ${dateToday}

Report for ${info.title}${info.name}. ${info.pronoun} has been diagnosed with **${info.condition}**.

.....................
---
${info.doctorName}
`
    return (
        <div className="markdownPreview">
            <MarkdownPreview value={markdownContent} />
            {/* <button onClick={() => { window.print() }} className="print-button"> Print Report </button> */}
        </div>
    )
}
export default Markdown;