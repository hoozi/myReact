/**
 * React event
 */

/**
 * 键盘事件demo
 */
const Key= React.createClass({
    getInitialState(){
        return {
            left:0,
            top:0,
            timer:null,
            run:false
        }
    },
    componentDidMount(){
        let dom = ReactDOM.findDOMNode(this);
        dom.focus();
    },
    keydown(e){
        let keyCode = e.keyCode;
        switch(keyCode) {
            case 37://←
                this.setState({
                    left:this.state.left-5
                })
            break;
            case 38://↑
                this.setState({
                    top:this.state.top-5
                })
            break;
            case 39://→
                this.setState({
                    left:this.state.left+5
                })
            break;
            case 40://↓
                this.setState({
                    top:this.state.top+5
                })
            break;
        }
    },
    render() {
        return <div style={{position:"relative",background:"#666",width:"500px",height:"400px",margin:"30px auto"}} tabIndex={1} onKeyDown={this.keydown}>
            <div style={{position:"absolute",left:this.state.left,top:this.state.top,width:"10px",height:"10px",background:"#333"}}></div>
        </div>
    }
});

ReactDOM.render(
    <Key/>,
    document.getElementById("container")
);