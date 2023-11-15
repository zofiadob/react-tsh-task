import { AppLocale } from 'context/locale/AppLocale.enum';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Translation } from 'ui/translation/Translation';

export const Products = () => {
  const { locale, setLocale } = useLocale();

  return (
    <>
      <h2>Home</h2>
      <p>
        <Translation id="home.helloWorld" />
        <span style={{ margin: '0 1rem' }}>&#x2190;</span>
        <span>
          This text is translated using <strong>Translation</strong> component.
        </span>
        <span>Click </span>
        <button
          style={{ fontSize: 'inherit' }}
          onClick={() => setLocale(locale === AppLocale.pl ? AppLocale.en : AppLocale.pl)}
        >
          here
        </button>{' '}
        to change language.
      </p>
    </>
  );
};
