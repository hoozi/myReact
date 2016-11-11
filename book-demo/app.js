/**
 * React component的生命周期demo;
 */

const book = {
    _db: new Map(),
    add(bookKey, book) {
        this._db.set(bookKey, book);
    },
    delete(bookKey) {
        this._db.delete(bookKey);
    }
}

const BookItem = React.createClass({
    displayName: "BookItem",
    getInitialState() {
        return {
            isEdit: true
        }
    },
    getDefaultProps() {
        return {
            bookKey:"",
            bookName:"",
            author:"",
            price:""
        }
    },
    
    //component即将装载 执行一次
    componentWillMount(){
        console.log("%c Sub "+this.props.bookKey,"color:green","componentWillMount")
    },
    //component装载完成 执行一次
    componentDidMount() {
       console.log("%c Sub "+this.props.bookKey,"color:green","componentDidMount")
    },
    
    //component props 将要更新，
    componentWillReceiveProps(nextProps) {
       console.log("%c Sub "+this.props.bookKey,"color:green","componentWillReceiveProps")
    },

    //是否需要更新
    shouldComponentUpdate(nextProps, nextState) {
        console.log("%c Sub "+this.props.bookKey,"color:green","shouldComponentUpdate")
        return true;
    },

    //component即将更新
    componentWillUpdate(nextProps, nextState) {
       console.log("%c Sub "+this.props.bookKey,"color:green","componentWillUpdate");
    },
    //component更新完成
    componentDidUpdate(prevProps, prevState) {
        console.log("%c Sub "+this.props.bookKey,"color:green","componentDidUpdate")
    },

    edit() {
        this.setState({isEdit:true})
    },
    save() {
        let _this = this
        ,   key = _this.props.bookKey
        ,   model = {
            bookKey:_this.refs.bookKey.value,
            bookName:_this.refs.bookName.value,
            author:_this.refs.author.value,
            price:_this.refs.price.value
        }

        this.props.onSave(key, model);
        this.setState({
            isEdit:false
        })
    },
    delete() {
        this.props.onDelete(this.props.bookKey);
    },
    editRemove() {
        this.setState({isEdit:false});
    },
    view() {
        this.props.onView();
    },
    render() {
        console.log("%c Sub "+this.props.bookKey,"color:green","render")
        return this.state.isEdit ? 
            <tr>
                <td><input className="form-control" ref="bookKey" type="text" readOnly defaultValue={this.props.bookKey}/></td>
                <td><input className="form-control" ref="bookName" type="text" defaultValue={this.props.bookName}/></td>
                <td><input className="form-control" ref="author" type="text" defaultValue={this.props.author}/></td>
                <td><input className="form-control" ref="price" type="text" defaultValue={this.props.price}/></td>
                <td><span className="glyphicon glyphicon-ok" onClick={this.save}></span><span className="glyphicon glyphicon-remove" onClick={this.editRemove}></span><span className="glyphicon glyphicon-cloud" onClick={this.view}></span></td>
            </tr>:
            <tr>
                <td>{this.props.bookKey}</td>
                <td>{this.props.bookName}</td>
                <td>{this.props.author}</td>
                <td>{this.props.price}</td>
                <td><span className="glyphicon glyphicon-edit" onClick={this.edit}></span><span className="glyphicon glyphicon-trash" onClick={this.delete}></span><span className="glyphicon glyphicon-cloud" onClick={this.view}></span></td>
            </tr>
            
    }
})

const Book = React.createClass({
    displayName:"Book",

    //初始化state  执行一次
    getInitialState() {
        return {
           bookList:book._db
        }
    },

    //component即将装载 执行一次
    componentWillMount(){
        console.log("%c Super","color:red","componentWillMount")
    },
    //component装载完成 执行一次
    componentDidMount() {
       console.log("%c Super","color:red","componentDidMount")
    },
    
    //component props 将要更新，
    componentWillReceiveProps(nextProps) {
       console.log("%c Super","color:red","componentWillReceiveProps")
    },

    //是否需要更新
    shouldComponentUpdate(nextProps, nextState) {
        console.log("%c Super","color:red","shouldComponentUpdate")
        return true;
    },

    //component即将更新
    componentWillUpdate(nextProps, nextState) {
       console.log("%c Super","color:red","componentWillUpdate");
    },
    //component更新完成
    componentDidUpdate(prevProps, prevState) {
        console.log("%c Super","color:red","componentDidUpdate")
    },
    addBook() {
        let key = "book_"+Date.now().toString()
        ,   model = {
            bookKey:key,
            bookName:"",
            author:"",
            price:""
        }
        
        this.setState({
            bookList: this.state.bookList.set(key, model)
        })
    },
    delete(key) {
        this.state.bookList.delete(key)
        this.setState({
            bookList: this.state.bookList
        });
    },
    update() {
       
    },
    save(key, model) {
        this.setState({
            bookList: this.state.bookList.set(key, model)
        });
    },
    view() {
        console.log(book._db);
    },
    render() {
        console.log("%c Super","color:red","render")
        let bookListDOM = [];
        for(let item of this.state.bookList) {
            bookListDOM.push(<BookItem key={item[0]} id={item[0]} onSave={this.save} onDelete={this.delete} onView={this.view} bookKey={item[1].bookKey} bookName={item[1].bookName} author={item[1].author} price={item[1].price}/>);
        }
        return <table className="table table-hover">
        <thead className="thead-inverse">
            <tr>
                <th>书号</th>
                <th>作者</th>
                <th>出版时间</th>
                <th>价格</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
           {bookListDOM}
        </tbody>
        <tfoot>
            <tr>
                <td colSpan="5"><button type="button" className="btn btn-primary" onClick={this.addBook}>添加</button></td>
            </tr>
        </tfoot>
    </table>
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
function render() {
    ReactDOM.render(
        <Book/>,
        document.getElementById("container")
    )
}

render();


