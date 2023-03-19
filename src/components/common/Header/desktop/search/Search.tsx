import SearchIcon from '@mui/icons-material/Search';
import { Box, InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import TippyHeadless from '@tippyjs/react/headless';
import { ChangeEvent, memo, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch } from 'app/hooks';
import { productActions } from 'features/product/productSlice';
import SearchResult from './SearchResult';

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

function Search() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);

  const inputRef = useRef();
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (searchValue) {
      dispatch(productActions.searchProductByName(searchValue));
    }
  }, [dispatch, searchValue]);

  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.currentTarget.value;
    if (!searchValue.startsWith(' ')) setSearchValue(e.target.value);
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  useEffect(() => {
    handleHideResult();
  }, [location]);

  return (
    <Box component="div">
      <SearchIconWrapper className="conac">
        <SearchIcon />
      </SearchIconWrapper>
      <TippyHeadless
        placement="bottom-start"
        interactive
        visible={showResult}
        maxWidth="100%"
        render={(attrs) => <SearchResult searchValue={searchValue} />}
        onClickOutside={handleHideResult}
      >
        <StyledInputBase
          onChange={handleOnchange}
          onFocus={() => setShowResult(true)}
          ref={inputRef}
          placeholder="What are you searching"
          value={searchValue}
          inputProps={{ 'aria-label': 'search' }}
        />
      </TippyHeadless>
    </Box>
  );
}
export default memo(Search);
