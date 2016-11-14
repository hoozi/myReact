/**
 * React form Component
 */

const Form = React.createClass({
    displayName:"Form",
    getInitialState(){
        return {
            inputValue:"hoozi"
        }
    },
    changeHandle(e) {
        this.setState({
            inputValue:e.target.value
        });
    },
    render() {
        return <form><input type="text" value={this.state.inputValue} onChange={this.changeHandle}/>
        <input type="checkbox" defaultChecked/>
        <input type="radio"/>
        <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <select multiple value={[1,2]}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <textarea/></form>
    }
});

ReactDOM.render(
    <Form/>,
    document.getElementById("container")
);