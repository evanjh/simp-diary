import React from 'react'


export default function Footer() {
    return (
        <div className="footer">
            <div className="hLine"/>
            <div className="vLine"/>
            <div
                className="oneMore"
                onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    location.reload()
                }}
            >
                再来一段
            </div>
            <div className="vLine"/>
        </div>
    )
}
