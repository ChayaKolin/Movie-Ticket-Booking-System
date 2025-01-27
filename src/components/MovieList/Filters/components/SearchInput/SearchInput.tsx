import React from 'react';
import { SearchInputProps } from './SearchInput.props.ts'; 
import { messages } from './SearchInput.i18n.ts';
import styles from './SearchInput.module.scss'; 

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, intl }) => {
  return (
    <input
      type="text"
      placeholder={intl.formatMessage(messages.searchPlaceholder)}
      value={value}
      onChange={onChange}
      className={styles.searchInput}
    />
  );
};

export default React.memo(SearchInput);
