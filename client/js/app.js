const Content1 = () => (
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu lacinia tellus. Sed et quam risus. Phasellus sit amet </p>
);

class Content2 extends React.PureComponent {
    render() {
        return (
            <p>Nulla rhoncus tempus erat nec facilisis. Duis quis purus ligula. Lorem ipsum dolor sit amet</p>
        );
    }
}

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