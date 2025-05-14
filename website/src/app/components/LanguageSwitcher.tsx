// components/LanguageSwitcher.js
import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const { locale, locales, asPath } = useRouter();

interface SwitchLanguageFn {
    (newLocale: string): void;
}

const switchLanguage: SwitchLanguageFn = (newLocale) => {
    window.localStorage.setItem('lang', newLocale); // Persist language choice
    window.location.reload(); // Reload the page with the new language
};

  return (
    <div>
      {locales && locales.map((lng) => (
        <button key={lng} onClick={() => switchLanguage(lng)}>
          {lng === 'en' ? 'English' : 'العربية'}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
