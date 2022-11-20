import React, {useEffect, useState} from 'react';
import {Simulate} from 'react-dom/test-utils';
import styles from './search-component.module.scss';
import SearchInput from '../search-input/search-input';
import input = Simulate.input;

export interface DataType {
    name: string;
    firstEntryDate: string;
    firstEntryPosition: string;
    totalDaysOnChart: string;
    link: string;
}

export interface SearchComponentProps {
    data: any[];
}

const SearchComponent: React.FC<SearchComponentProps> = (props) => {
    const {data} = props;
    const [mockData] = useState<DataType[]>(data);
    const [searchedInput, setSearchedInput] = useState('');
    const [openList, setOpenList] = useState(false);
    const [searchedData, setSearchedData] = useState<DataType[]>([]);

    useEffect(() => {
        if (searchedInput === '') {
            setSearchedData([])
        }
    }, [searchedInput])

    return (
        <div className={styles.wrapper}>
            <SearchInput data-testid='artist-search-input' id='artist-search-input' onClick={() => setOpenList(!openList)} onChange={(e) => {
                if(e.target.value.match('^[a-zA-Z0-9 ]*$')!=null) {
                    setSearchedInput(e.target.value);
                }
                setSearchedData(mockData
                    .filter((search) => search.name.toLowerCase().match(searchedInput)
                        ||
                        search.firstEntryPosition.toLowerCase().match(searchedInput)));
            }} className={styles.searchedContent}/>
            <div className={styles.list}>
                {searchedData.map((datas) => (
                    <div key={datas.name} className={styles.listItem}>
                        <div className={styles.itemsContent}>
                            <div className={styles.actionContent}>
                                <a href={datas.link} target='_blank' rel="noreferrer">
                                    <img className={styles.image} src='./spotify.svg' alt=''/></a>
                                <div>
                                    <div data-testid='searched-name-filter-area' className={styles.title}>{datas.name}</div>
                                    <div className={styles.date}>{datas.firstEntryDate}</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.itemsContent}>
                            <div className={styles.subContents}>
                                <div className={styles.subTitle}>First Entry position:</div>
                                <span  data-testid={`searched-position-filter-area-${datas.firstEntryPosition}`} className={styles.subContent}>{datas.firstEntryPosition}</span>
                            </div>
                            <div className={styles.subContents}>
                                <div className={styles.subTitle}>Total days on chart:</div>
                                <span className={styles.subContent}>{datas.totalDaysOnChart}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchComponent