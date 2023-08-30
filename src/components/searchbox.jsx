const Searchbox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input 
            className="pa3 ba b--green bg-lightest-blue tc" 
            type="search" 
            placeholder="Search Robots"
            onChange={searchChange}
            />
        </div>
    );
}

export default Searchbox;