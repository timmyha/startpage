const Main = ({social, dev, entertainment, tools}) => {

    return (

        <div>
        
            <div className="bookmarks-main">
                <div className="bookmarks-display">
                    <p className="bookmarks-title">social</p>
                        {social}
                </div>
                <div className="bookmarks-display">
                    <p className="bookmarks-title">dev</p>
                        {dev}
                </div>
                <div className="bookmarks-display">
                    <p className="bookmarks-title">entertainment</p>
                        {entertainment}
                </div>
                <div className="bookmarks-display">
                    <p className="bookmarks-title">tools</p>
                        {tools}
                </div>
            </div>
        </div>
    )
}

export default Main