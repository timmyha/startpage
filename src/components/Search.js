const Search = () => {

    function handleSearch(event) {
        if (event.key === 'Enter') {
         window.location
                .href=`https://duckduckgo.com/?q=${event.target.value}`
            }
        }

    return (
        <div class="search-bar search-bar-box">
            <input 
                class="search-bar" 
                onKeyPress={handleSearch} 
                placeholder="present day, present time"
                autoFocus 
            />
        </div>
    )
}

export default Search