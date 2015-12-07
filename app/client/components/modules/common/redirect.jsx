App.Redirect = React.createClass({
    render() {
        let buttonProps = {
            type: 'centered primary button',
            route: 'root',
            label: 'Take me home!'
        };

        return (
            <module className="animated fadeIn redirect module">
                <App.Button buttonProps={buttonProps} />
            </module>
        )
    }
});