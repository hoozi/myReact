/**
 * 创建React component的两种方法
 * React.createClass 以及 ES6 class Component extends React.Component
 */


/*const test = function(){
       return { 
           say() {
            alert("Hello "+this.props.value);
        }
    }
}
/**
 * 用React.createClass构造
 */
/*const Component = React.createClass({
    mixins:[test()], //抽离公共部分
    getDefaultProps() {
        return {
            value:"world"
        }
    },
    render() {
        return <div onClick={this.say}>Hello {this.props.value}!</div>
    }
})*/

/**
 * 用ES6构造react Component
 * @class Component
 * @extends {React.Component}
 */
class Component extends React.Component {
    constructor(props) {
        super(props);
        this.say = ()=>{
            alert("Hello "+this.props.value);
        }
    }
    render() {
        return <div onClick={this.say}>Hello {this.props.value}!</div>
    }
}
Component.defaultProps = {
        value: "world"  
}

ReactDOM.render(
    <Component/>,
    document.getElementById("container")
)