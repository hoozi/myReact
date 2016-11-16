/**
 * React 数据双向绑定
 */

const LinkedStateMixin = React.addons.LinkedStateMixin;

/*const WithLink = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState() {
    return {message: 'Hello!'};
  },
  componentWillUpdate() {
    console.log(1)
  },
  render() {
    return <div>{this.state.message}<input type="text" valueLink={this.linkState('message')}/></div>;
  }
});*/

const WithLink = React.createClass({
  getInitialState() {
    return {message: 'Hello!'};
  },
  componentWillUpdate() {
    console.log(1)
  },
  handle(key){
    return {
      value: this.state[key],
      requestChange: (newValue)=>{
        this.setState({[key]:newValue});
      }
    }
  },
  render() {
    return <div>{this.state.message}<input type="text" valueLink={this.handle("message")}/></div>;
  }
});

ReactDOM.render(
    <WithLink/>,
    document.getElementById("container")
);

/*const WithNoLink = React.createClass({
  getInitialState() {
    return {message: 'Hello!'};
  },
  componentWillUpdate() {
    console.log(1)
  },
  change(event) {
    this.setState({
      message:event.target.value
    })
  },
  render() {
    return <div>{this.state.message}<input type="text" value={this.state.message} onChange={this.change}/></div>;
  }
});

ReactDOM.render(
    <WithNoLink/>,
    document.getElementById("container")
);*/