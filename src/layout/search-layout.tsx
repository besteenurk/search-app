import React, {useState} from 'react';
import SearchComponent from '../components/search-component/search-component';
import styles from './search-layout.module.scss';
import MockData from '../mock-data/mock-data.json';

const SearchLayout = () => {
    const a = useState();

    return (
        <div className={styles.wrapper}>
            <SearchComponent data={MockData} />
        </div>
    )
}

export default SearchLayout