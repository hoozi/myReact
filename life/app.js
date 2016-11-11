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
            timer: null,
            arr:[1,2,3]
        }
    },
    
    //component即将装载 执行一次
    componentWillMount(){
        console.log("component will mount");
    },
    //component装载完成 执行一次
    componentDidMount() {
        console.log("component did mount");
       
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
        this.state.arr.push(1);
        this.setState({
            arr:this.state.arr
        });
    },

    render() {
        console.log("render");
        return <div>{
            this.state.arr.map((a)=>{
                return <div>{a}</div>;
            })
        }<button onClick={this.update}>update</button></div>;
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
        <Item/>,
        document.getElementById("container")
    )
}

render(true);


