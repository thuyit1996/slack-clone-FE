import React from 'react'
import { GrClock } from 'react-icons/gr'
import { VscQuestion } from 'react-icons/vsc'

export default function HeaderSearchBar() {
    return (
        <div className="header-search-bar">
            <div className="header-search-bar__history search-bar-icon">
                <GrClock size={24} />
            </div>
            <div className="header-search-bar__search-input">
                <input type="text" className="search-input" placeholder="Seacrh RabitInternalDev" />
            </div>
            <div className="header-search-bar__help search-bar-icon">
                <VscQuestion size={25} />
            </div>
        </div>
    )
}
