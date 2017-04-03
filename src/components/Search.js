import React from 'react';
import { Link } from 'react-router';

import '../styles/Search.sass';

let searchResult = null;

export default function Search({ RequestActions, search }) {
    const hangleChange = event => {
        RequestActions.searchFilms(event.target.value);
    };
    const computeClass = action => {
        const className = search =>
            search.length > 0 ? 'search-result active' : 'search-result';

        switch (action) {
            case 'focus':
                searchResult.className = className(search);
                break;
            case 'blur':
                setTimeout(
                    () => {
                        searchResult.classList.remove('active');
                    },
                    150
                );
                break;
            default:
                return className(search);
        }
    };

    return (
        <div className="search">
            <input
                onChange={hangleChange}
                onFocus={computeClass.bind(null, 'focus')}
                onBlur={computeClass.bind(null, 'blur')}
                className="header-search"
                autoComplete="off"
                type="text"
                name="search"
                placeholder="Search..."
            />
            <div ref={item => searchResult = item} className={computeClass()}>
                {search.map((item, i) => {
                    if (i > 4) return null;
                    return (
                        <Link
                            key={i}
                            to={`/view/${item.id}`}
                            className="search-result-item"
                        >
                            <p>
                                <strong>{item.original_title}</strong>
                                {', ' + item.release_date.split('-')[0]}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

Search.propTypes = {
    RequestActions: React.PropTypes.object.isRequired,
    search: React.PropTypes.array.isRequired,
};
