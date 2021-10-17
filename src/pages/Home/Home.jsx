import React from 'react';
import ReactMarkdown from '@uiw/react-markdown-preview';
import readmeContents from '../../../README.md';
import styles from './styles.scss';

const Home = () => (
  <div className={styles.markdown__container}>
    <ReactMarkdown source={readmeContents} />
  </div>
);

export default Home;
