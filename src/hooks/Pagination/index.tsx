import React, {useCallback} from 'react';
import useOffset from "./useOffset";

const Pagination = () => {

    const [offset, prev, next, toggleSortingDirection, chagneSortingKey] = useOffset();

    const changeSortKey = useCallback(() => {
        const newKey = prompt('new Key');
        if (newKey) {
            chagneSortingKey(newKey);
        }
    }, []);

    const dataset = [];

    return (
        <div>
            <div>
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
                <button onClick={toggleSortingDirection}>ChangeSortDirection</button>
                <button onClick={changeSortKey}>ChangeSortKey</button>
            </div>
            <div>
                <ul>
                    <li>offset : {offset.offset}</li>
                    <li>limit : {offset.limit}</li>
                    <li>sortingKey : {offset.sortingKey}</li>
                    <li>sortingDirection : {offset.sortingDirection}</li>
                </ul>
            </div>

        </div>
    )
};

export default Pagination;