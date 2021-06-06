import React from 'react';
import scss from './App.scss';
import Header from './components/Header';

const App: React.FC = () => {
    return (
        <div className={scss.app}>
            <Header />
            <div>body</div>
            <div>footer</div>
        </ div>
    )
}

export default App;