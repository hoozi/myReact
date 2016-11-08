
//Item
const Item = React.createClass({
    render() {
        return (
            <tr>
                <th scope="row">1</th>
                <td>{this.props.value}</td>
                <td>
                    <a href="###" className="glyphicon glyphicon-edit"></a><a href="###" className="glyphicon glyphicon-remove"></a>
                </td>
            </tr>
    )
    }
});

//ItemEditor
const ItemEditor = React.createClass({
    getInitialState() {
        return {
            value:""
        }
    },
    remove() {
        this.props.onRemove(this.props.id);
    },
    change(e) {
        this.setState({
            value: e.target.value
        });
    },
    render() {
        return  (
            <tr>
                <th scope="row">{this.props.id}</th>
                <td colSpan="2">
                    <div className="input-group">
                        <input type="text" className="form-control" onChange={this.change} value={this.state.value}/>
                        <span className="input-group-btn">
                            <button className="btn btn-success" type="button">确定</button>
                            <button className="btn btn-danger" type="button" onClick={this.remove}>取消</button>
                        </span>
                    </div>
                </td>
            </tr>
        )
    }
})

//List
const List = React.createClass({
    getInitialState() {
        return {
            key: 0,
            list: new Map(),
            editList: new Map()
        }
    },
    add() {
        let key = ++this.state.key;
        this.setState({
            editList:this.state.editList.set(key,{value:""})
        });
    },
    remove(id) {
        this.state.editList.delete(id);
        this.setState({
            editList:this.state.editList
        })
    },
    render() {
        const listDOM = [];
        const editListDOM = [];
        
        for (let item of this.state.list) {
            listDOM.push(<Item id={item[0]} value={item[1].value}/>);
        }

        for(let item of this.state.editList) {
            editListDOM.push(<ItemEditor onRemove={this.remove} id={item[0]} key={item[0]} value={item[1].value}/>);
        }

        return (
        <table className="table">
            <thead>
                <tr>
                    <th>NO.</th>
                    <th>标题</th>
                    <th>操作 <a href="###" className="glyphicon glyphicon-plus" onClick={this.add}></a></th>
                </tr>
            </thead>
            <tbody>
               {listDOM}
               {editListDOM}
            </tbody>
        </table>
        )
    }
});

ReactDOM.render(
    <List/>,
    document.getElementById("container")
);