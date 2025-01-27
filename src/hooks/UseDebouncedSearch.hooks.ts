import { useCallback, useMemo } from 'react';
import { debounce } from 'lodash';
import { TIME_DEBOUNCE } from '../constants/constants.ts';

const useDebouncedCallback = (callback: (...args: any[]) => void, dependencies: any[]) => {
  const debouncedCallback = useMemo(() => debounce(callback, TIME_DEBOUNCE), [callback]);

  return useCallback(
    (...args: any[]) => {
      debouncedCallback(...args);
    },
    [debouncedCallback, ...dependencies]
  );
};

export default useDebouncedCallback;