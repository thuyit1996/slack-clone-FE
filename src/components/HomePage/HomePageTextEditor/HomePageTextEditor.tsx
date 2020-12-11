import React, { useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'

export default function HomePageTextEditor() {
    const [isFocus, setIsFocus] = useState(false);

    return (
        <div className="home-page-text-editor">
            <div className={`home-page-text-editor__container ${isFocus ? 'textarea-focus' : ''}`}>
                <textarea
                    className="text-editor-textarea"
                    placeholder="Send a message to #general"
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                />
                <div className="text-editor-tools">
                    <div className="group-function"></div>
                    <div className="group-tool">
                        <AiOutlineSend size={25} />
                    </div>
                </div>
            </div>
        </div>
    )
}
