import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

const NotesHelpIcon = () => {
    return (
        <Tippy
            content={<><p className="tooltip-text">
                <b>click:</b> <i>mark as complete/undo</i></p>
                <p className="tooltip-text"><b><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -10 24 24" width="18" fill="currentColor"><path d="M14.414 7l1.414-1.414a1 1 0 0 0-1.414-1.414L13 5.586l-1.414-1.414a1 1 0 1 0-1.414 1.414L11.586 7l-1.414 1.414a1 1 0 1 0 1.414 1.414L13 8.414l1.414 1.414a1 1 0 1 0 1.414-1.414L14.414 7zM7.828 0H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.828a2 2 0 0 1-1.414-.586L.707 7.707a1 1 0 0 1 0-1.414L6.414.586A2 2 0 0 1 7.828 0z"></path></svg>:</b> delete</p>
                <p className="tooltip-text"><b>enter '!delete':</b> <i>clear all</i></p></>}
            placement="bottom"
            className="notes-help-tooltip">
        <div className="notes-help">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="currentColor"><path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-12a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg>
        </div>
        </Tippy>
    )
}

export default NotesHelpIcon