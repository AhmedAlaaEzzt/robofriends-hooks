const SearchBox = (props) => {
    return (
      <div className="">
        <input onChange={props.searchChange} className="" type="search" placeholder="search robots" />
      </div>
    );
  };
  
  export default SearchBox;
  