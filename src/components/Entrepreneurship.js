import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Entrepreneurship = () => {
  const { t } = useLanguage();

  return (
    <section className="entrepreneurship">
      <h2>{t('entrepreneurship')}</h2>
      <div className="job">
        <div className="job-header">
          <h3>👟 Solemate</h3>
          <span className="date">📅 {t('january2017August2017')}</span>
          <span className="location">📍 {t('sanDiegoCA')}</span>
        </div>
        <h4>💡 {t('coFounderCTO')}</h4>
        <p>{t('solemateDesc')}</p>
        <div className="technologies">
          <span>Swift</span>
          <span>Objective C</span>
          <span>CSS</span>
          <span>Firestore</span>
          <span>ML Kit</span>
        </div>
      </div>
    </section>
  );
};

export default Entrepreneurship;
