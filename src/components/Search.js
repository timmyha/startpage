const Search = () => {

    function handleSearch(event) {
        let query = event.target.value
        if (event.key === 'Enter') {
            /http/.test(query)
            ? window.location
                    .href=`${query}`
            : /\.com|\.net|\.org|\.io|\.us|\.uk|\.ca|\.gg|\.to|\.gov/.test(query)
            ? window.location
                    .href=`https://${query}`
            : /\/r\//.test(query)
            ? window.location
                    .href=`https://www.reddit.com${query}`
            : /scores/.test(query)
            ? window.location
                    .href=`https://www.flashscore.com/`
            : /insta/.test(query)
            ? window.location
                    .href=`https://www.instagram.com`
            : window.location
                    .href=`https://duckduckgo.com/?q=${query}`
        }}

    return (
        <div className="search-bar search-bar-box">
            <input 
                className="search-bar" 
                onKeyPress={handleSearch} 
                placeholder="present day, present time"
                autoFocus 
            />
        </div>
    )
}

export default Search