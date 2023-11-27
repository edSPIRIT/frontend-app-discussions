import { useEffect } from 'react';

import { getLocale } from '@edx/frontend-platform/i18n';

const useSetFont = () => {
  useEffect(() => {
    const setFont = () => {
      const body = document.querySelector('body');
      if (getLocale() === 'fa') {
        body.className = 'lang_fa';
      } else if (getLocale() === 'ar') {
        body.className = 'lang_ar';
      } else {
        body.removeAttribute('class');
      }
    };
    setFont();
  }, [getLocale()]);
};

export default useSetFont;