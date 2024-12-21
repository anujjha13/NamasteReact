const Search = ()=>{
    return (
        <div className="p-4">
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value="" onChange={()=>{}}/>
            <button type="search-btn" className="w-48">Search</button>
        </div>
    )
}

export default Search;