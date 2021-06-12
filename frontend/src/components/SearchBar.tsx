import { StyledSearchBar } from './styles';

import React from 'react';
import Input from './Input';
import { Button } from './styles';

interface SearchBarProps {
  value: string;
  setValue: Function;
  onSearch: Function;
  placeholder?: string;
  buttonText: string;
  disabled?: boolean;
}

function SearchBar(props: SearchBarProps) {
  const { value, setValue, onSearch, buttonText, disabled, placeholder } = props;

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <StyledSearchBar onSubmit={handleOnSubmit}>
      <Input
        value={value}
        setValue={setValue}
        width="75%"
        placeholder={placeholder}
        disabled={disabled}
      />
      <Button type="submit" children={buttonText} />
    </StyledSearchBar>
  );
}

export default SearchBar;
