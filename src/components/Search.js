const Search = () => {

    function handleSearch(event) {
        let query = event.target.value
        if (event.key === 'Enter') {
            /\.com|\.net|\.org|\.io|\.us|\.uk|\.ca|\.gg|\.to|\.gov/.test(query) ?
                window.location
                    .href=`https://${query}` :
            /\/r\//.test(query) ?
                window.location
                      .href=`https://www.reddit.com${query}` :
            window.location
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