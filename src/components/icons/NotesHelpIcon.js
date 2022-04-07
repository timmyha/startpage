import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

const NotesHelpIcon = () => {
    return (
        <Tippy
            content={<><p className="tooltip-text"><b>click:</b> <i>mark as complete/undo</i></p>
                        <p className="tooltip-text"><b>doubleclick:</b> <i>delete forever</i></p></>}
            placement="bottom"
            className="notes-help-tooltip">
        <div className="notes-help">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="currentColor"><path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-12a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg>
        </div>
        </Tippy>
    )
}

export default NotesHelpIcon