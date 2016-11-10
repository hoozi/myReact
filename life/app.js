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
            lastName:"lei",
            timer: null
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
        this.state.timer = setInterval(()=>{
            dom.style.backgroundColor = isRed ? "red" : "green";
            isRed = !isRed;
        },300)
    },
    
    //component props 将要更新，
    componentWillReceiveProps(nextProps) {
        console.log("component will receive props");
        if(nextProps.firstName=="oh") {
            this.setState({lastName:"hehe"});
        }
    },

    //是否需要更新
    shouldComponentUpdate(nextProps, nextState) {
        console.log("component should update");
        return true;
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
        //this.setState({lastName:"zi han"});
    },

    render() {
        console.log("render");
        return <div onClick={this.update}>Hello {this.props.firstName} {this.state.lastName}!</div>;
    },

    //component即将卸载
    componentWillUnmount() {
        console.log("component will unmount");
        clearInterval(this.state.timer);
    }
})

/*ReactDOM.render(
    <Item/>,
    document.getElementById("container")
)*/
function render(bool) {
    ReactDOM.render(
        <div>{bool ? <Item firstName="oh"/> : null}</div>,
        document.getElementById("container")
    )
}

render(true);

document.getElementById("btn").onclick = (e) => {
    render();
}

