import React from 'react'
import './app-wrapper.style.css'

export function AppWrapper({ children }) {
    return (
        <div className='wrapper'>
            <div className='card frame'>
                <div className="App">
                    {children}
                </div>
            </div>
        </div>
    )
}