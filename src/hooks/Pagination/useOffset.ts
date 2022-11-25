import {useCallback, useState} from "react";

type Offset = {
    offset: number;
    limit: number;
    sortingKey: string;
    sortingDirection: 'asc' | 'desc'
}

const useOffset = (initialOffset: Offset = {
    offset: 0,
    limit: 20,
    sortingKey: 'id',
    sortingDirection: 'asc'
}): [
    Offset,
    () => void,
    () => void,
    () => void,
    (sk: string) => void
] => {
    const [offset, setOffset] = useState<Offset>(initialOffset);

    const prev = useCallback(() => {
        setOffset(prev => ({...prev, offset: Math.max(prev.offset - prev.limit, 0)}))
    }, [])

    const next = useCallback(() => {
        setOffset(prev => ({...prev, offset: prev.offset + prev.limit}))
    }, [])

    const toggleSortDirection = useCallback(() => {
        setOffset(prev => ({...prev, offset: 0, sortingDirection: prev.sortingDirection === 'asc' ? 'desc': 'asc'}))
    }, [])

    const changeSortingKey = useCallback((sortingKey: string) => {
        setOffset(prev => ({...prev, offset: 0, sortingKey}))
    }, [])

    return [offset, prev, next, toggleSortDirection, changeSortingKey];
}

export default useOffset;