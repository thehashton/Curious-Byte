import React from 'react';
import ReactDOM from 'react-dom';

import css from './index.scss';

const App: React.FC = () => {
  return <h1 className={css.title}>Hello Wepack!</h1>;
};

ReactDOM.render(<App />, document.getElementById('root'));