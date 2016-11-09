
//Item
const Item = React.createClass({
    getInitialState() {
        return {
            isEdit:true
        }
    },
    remove() {
        this.props.onRemove(this.props.id);
    },
    save() {
        this.props.onSave(this.props.id,this.refs.inputText.value);
        this.setState({
            isEdit: false
        });
    },
    edit() {
        this.setState({
            isEdit: true
        });
    },
    removeEdit() {
        this.setState({
            isEdit: false
        });
    },
    render() {
        let isEdit = this.state.isEdit;
        return (
           isEdit ? <tr>
                <th scope="row">{this.props.id}</th>
                <td colSpan="2">
                    <div className="input-group">
                        <input type="text" className="form-control" ref="inputText" defaultValue={this.props.value}/>
                        <span className="input-group-btn">
                            <button className="btn btn-success" type="button" onClick={this.save}>确定</button>
                            <button className="btn btn-danger" type="button" onClick={this.removeEdit}>取消</button>
                        </span>
                    </div>
                </td>
            </tr> :
            <tr>
                <th scope="row">{this.props.id}</th>
                <td>{this.props.value}</td>
                <td>
                    <a href="###" className="glyphicon glyphicon-edit" onClick={this.edit}></a><a href="###" className="glyphicon glyphicon-remove" onClick={this.remove}></a>
                </td>
            </tr>
    )
    }
});

//ItemEditor
/*const ItemEditor = React.createClass({
    getInitialState() {
        return {
            value:this.props.value
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
    save(id,value) {
        this.props.onSave(this.props.id, this.state.value);
    },
    render() {
        return  (
            <tr>
                <th scope="row">{this.props.id}</th>
                <td colSpan="2">
                    <div className="input-group">
                        <input type="text" className="form-control" onChange={this.change} value={this.state.value}/>
                        <span className="input-group-btn">
                            <button className="btn btn-success" type="button" onClick={this.save}>确定</button>
                            <button className="btn btn-danger" type="button" onClick={this.remove}>取消</button>
                        </span>
                    </div>
                </td>
            </tr>
        )
    }
})*/

//List
const List = React.createClass({
    getInitialState() {
        return {
            key: 0,
            list: new Map()
        }
    },
    
    add() {
        let key = ++this.state.key;
        this.setState({
            list:this.state.list.set(key,"")
        });
    },
    removeItem(id) {
        this.state.list.delete(id);
        this.setState({
            list:this.state.list
        })
    },
    save(id, value) {
        this.setState({
            list:this.state.list.set(id,{value:value})
        });
    },
    render() {
        const listDOM = [];       
        for (let item of this.state.list) {
            listDOM.push(<Item id={item[0]} key={item[0]} onRemove={this.removeItem} onSave={this.save} value={item[1].value}/>);
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
            </tbody>
        </table>
        )
    }
});

ReactDOM.render(
    <List/>,
    document.getElementById("container")
);