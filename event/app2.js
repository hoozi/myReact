/**
 * React event
 */

/**
 * 鼠标事件demo
 */
const data = new Map();

data.set("d_001","hoozi1");
data.set("d_002","hoozi2");
data.set("d_003","hoozi3");
data.set("d_004","hoozi4");
data.set("d_005","hoozi5");
const data2 = new Map();

data2.set("d_006","hoozi6");
data2.set("d_007","hoozi7");
data2.set("d_008","hoozi8");
data2.set("d_009","hoozi9");
data2.set("d_0010","hoozi10");
const Drag = React.createClass({
    getInitialState() {
        console.log(this.props.data)
        return {
            deleteId:null,
            left:this.props.data,
            right:new Map()
        }    
    },
    
    drag(e) {
        this.state.deleteId = e.target.id;
    },
    drop() {
        let id = this.state.deleteId
        , value = this.state.left.get(id);
        this.state.right.set(id,value);
        this.state.left.delete(id);
        this.forceUpdate();
    },
    drop2() {
        let id = this.state.deleteId
        , value = this.state.right.get(id);
        this.state.left.set(id,value);
        this.state.right.delete(id);
        this.forceUpdate();
    },
    render(){
        let listLeft = [];
        let listRight = [];
        this.state.left.forEach((item,key)=>{
            listLeft.push(<div id={key} key={key} draggable={true} onDragStart={this.drag}>{item}</div>)
        })
        this.state.right.forEach((item,key)=>{
            listRight.push(<div id={key} key={key} draggable={true} onDragStart={this.drag}>{item}</div>)
        })
        return <div><div className="left"
            onDragEnter={e=>{e.preventDefault();}}
            onDragOver={e=>{e.preventDefault();}} 
            onDrop={this.drop2}
        >
            {listLeft}
        </div>
        <div className="right"
            onDragEnter={e=>{e.preventDefault();}}
            onDragOver={e=>{e.preventDefault();}} 
            onDrop={this.drop}

        >
            {listRight}
        </div></div>
    }
})

ReactDOM.render(
    <Drag data={data}/>,
    document.getElementById("container")
)
ReactDOM.render(
    <Drag data={data2}/>,
    document.getElementById("container2")
)