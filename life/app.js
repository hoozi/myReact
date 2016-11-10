/**
 * React component的生命周期;
 */

const Item = React.createClass({
    displayName:"Item",
    
    //初始化 props  执行一次
    getDefaultProps() {
        console.log("[run once] initialize props");
        return {
            firstName:"hu"
        }
    },

    //初始化state  执行一次
    getInitialState() {
        console.log("[run once] initialize state");
        return {
            lastName:"lei"
        }
    },
    
    //component即将装载 执行一次
    componentWillMount(){
        console.log("[run once] component will mount");
    },
    //component装载完成 执行一次
    componentDidMount() {
        console.log("[run once] component did mount");
        let dom = ReactDOM.findDOMNode(this)
        ,   isRed = false;
        setInterval(()=>{
            dom.style.backgroundColor = isRed ? "red" : "green";
            isRed = !isRed;
        },300)
    },
    
    //component即将更新
    componentWillUpdate(nextProps, nextState) {
        console.log("component will update");
    },
    //component更新完成
    componentDidUpdate(prevProps, prevState) {
        console.log("component did update");
    },

    update() {
        this.setState({lastName:"zi han"});
    },

    render() {
        console.log("render");
        return <div onClick={this.update}>Hello {this.props.firstName} {this.state.lastName}!</div>;
    }
})

ReactDOM.render(
    <Item/>,
    document.getElementById("container")
)
ReactDOM.render(
    <Item/>,
    document.getElementById("container")
)