import React, {useState} from 'react';
import styles from './search-input.module.scss';

export interface SearchInputProps {
    className: string;
    onChange: (e: any) => void;
    onClick: () => void;
    id: string;
}

const SearchInput: React.FC<SearchInputProps> = (props) => {
    const {className, onChange, onClick, id} = props;

    return (
        <div className={`${className} ${styles.wrapper}`}>
            <div className={styles.searchContent}>
                <div className={styles.icon}>
                    <svg aria-hidden="true" className={styles.searchSvg} fill="none"
                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </div>
                <input onClick={onClick} type="search" id={id} data-testid={id}
                       className={styles.searchInput}
                       onChange={(e) => e.target.value !== '^[a-zA-Z ]*$' ? onChange(e) : onChange('')}
                       placeholder="Search artist/entry position" pattern="[A-Za-z]{3}" />
            </div>
        </div>
    )
}

export default SearchInput