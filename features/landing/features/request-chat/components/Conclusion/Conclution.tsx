import React, { useEffect, useState } from 'react';
import htmlParser from 'react-html-parser';
import store from 'store2';
import { useMappedState } from 'redux-react-hook';

import { getConclutionText } from '../../getConclutionText';
import * as styles from './Conclution.css';
import { selectRequestForm } from './selectors';
import { ArticlesList } from '../articles';

export const Conclution = () => {
  const data =
    useMappedState(selectRequestForm) || store.get('request_form') || {};
  const [currentConclution, setConclution] = useState(null);

  useEffect(() => {
    console.log('data:', data);
    if (!!data) {
      const conclution = getConclutionText(data) as any;

      setConclution(conclution);
    }
  }, [data.target]);

  if (!currentConclution) {
    return <div className={styles.text}>Загружаем...</div>;
  }

  const { text, articles } = currentConclution as any;

  return (
    <>
      <div className={styles.notification}>
        <img
          className={styles.image}
          src="/static/images/doc-attention.png"
          alt="врач"
        />
        <div className={styles.text}>{htmlParser(text)}</div>
      </div>
      <ArticlesList articles={articles} />
    </>
  );
};
