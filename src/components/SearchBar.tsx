import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";

const SearchBar = () => {
    const [isInputFocused, setIsInputFocused] = useState(false);

    return (
        <div className='search-bar-container'>
            <div className='search-icon-container'>
                {!isInputFocused && <FontAwesomeIcon icon={faSearch} className='search-icon' />}
            </div>
            <input
                type="text"
                className="search-input"
                onFocus={()=>setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
            />
            <button className='search-btn'>Search</button>
        </div>
    );
};

export default SearchBar;