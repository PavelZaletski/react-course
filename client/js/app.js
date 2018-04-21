import React from 'react';
import ReactDOM from 'react-dom';
import '../less/style';
import Content1 from './components/content1';
import Content2 from './components/content2';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Content1 />
                <Content2 />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

const Title = React.createElement(
    'h1',
    { className: 'title' },
    'Hello world'
);

ReactDOM.render(Title , document.getElementById('title'));