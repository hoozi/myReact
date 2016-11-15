/**
 * 组件通信
 */

const eventBus = new eventemitter.EventEmitter();

const Item = React.createClass({
    render(){
        let style = this.props.selected ? {color:"red"} : {color:"#000"};
        return <li style={style} onClick={this.props.showName}>{this.props.name}</li>
    }
})

const Component = React.createClass({
    getInitialState() {
        return {
            list:[]
        }
    },
    componentWillMount() {
        this.props.eventBus.on("run", ()=>{
            console.log(this.props.name);
        })
        this.state.list = this.props.list.map((item)=>{
            return {name:item,selected:false}
        });
    },
    componentDidMount() {
        setTimeout(()=>{
            this.state.list[0].selected = true;
            this.forceUpdate();
        },3000)
    },
    showName(name){
        console.log(name);
    },
    render(){
        return <ul>
            {this.state.list.map(item=>{
                return <Item showName={this.showName.bind(this,item.name)} selected={item.selected} name={item.name}/>
            })}
        </ul>
    }
})

const list = ["hoozi","hu","kiki"]

ReactDOM.render(
    <div>
        <Component eventBus={eventBus} name="c1" list={list}/>
        <Component eventBus={eventBus} name="c2" list={list}/>
    </div>,
    document.getElementById("container")
);

setTimeout(()=>{
    eventBus.emit("run");
},3000)