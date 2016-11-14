/**
 * React form Component
 */

const Ref = React.createClass({
    displayName:"ref",
    getInitialState(){
        return {
            value:"hoozi"
        }
    },
    click(e) {
        this.state.value = this.refs.inputText.value;
        this.forceUpdate();
    },
    render() {
        return <div>
            <input type="text" ref="inputText" defaultValue={this.state.value}/>
            <button onClick={this.click}>Click me!</button>
            <span style={{backgroundColor:"red",color:"#fff"}}>{this.state.value}</span>
        </div>
    }
});

ReactDOM.render(
    <Ref/>,
    document.getElementById("container")
);