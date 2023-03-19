import { LinearProgress, styled } from '@mui/material';
import { memo, useCallback, useEffect, useState } from 'react';
import SearchResultItem from './SearchResultItem';
import SearchSuggestion from './SearchEmpty';
import { useAppSelector } from 'app/hooks';
import { searchList } from 'features/product/productSlice';
import { loadingProduct } from 'features/product/productSlice';

const Wrapper = styled('div')(({ theme }) => ({
  background: 'white',
  width: '100%',
  maxHeight: '500px',
  minHeight: 200,
  overflowY: 'auto',
  overflowX: 'hidden',
  listStyle: 'none',
  backgroundColor: 'rgb(255, 255, 255)',
  borderRadius: '5px',
  borderTop: '1px solid rgb(225, 225, 225)',
  boxShadow: 'rgb(0 0 0 / 28%) 0px 6px 12px 0px',
  padding: '16px 0',
}));

interface SearchResultItemProps {
  handleSearchItem?: () => void;
  searchValue: string;
}

function SearchResult({ handleSearchItem, searchValue }: SearchResultItemProps) {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const searchResult = useAppSelector(searchList);
  useEffect(() => {
    setIsSearching(!!(searchValue && searchResult && searchResult.length > 0));
  }, [searchResult, searchValue]);

  const handleOnClick = useCallback(() => {
    if (handleSearchItem) handleSearchItem();
  }, [handleSearchItem]);

  const loading = useAppSelector(loadingProduct);

  return (
    <Wrapper
      onClick={handleOnClick}
      className="search-result"
    >
      {loading && <LinearProgress />}
      {isSearching && searchResult ? (
        searchResult.map((item) => (
          <SearchResultItem
            product={item}
            key={item.id}
            classNames={''}
          />
        ))
      ) : (
        <SearchSuggestion />
      )}
    </Wrapper>
  );
}

export default memo(SearchResult);
