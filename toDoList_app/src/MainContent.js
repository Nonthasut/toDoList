import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
// import { link } from "react-router-dom"
export default class MainContent extends React.Component {
    state = {
        data: [],
        text: "",
        editText:""
    }
    changeText = (e) => {
        let newText = e.target.value
        this.setState({ text: newText })
    }
    addData = (e) => {
        e.preventDefault()
        let newData = [...this.state.data, [this.state.text, false, false]]
        this.setState({ data: newData })
        this.setState({ text: "" })
    }
    Delete = (index) => {
        let deleteNum = [...this.state.data]
        deleteNum.splice(index, 1)
        this.setState({ data: deleteNum })
    }
    toggle = (e, index) => {
        if (this.state.data[index][1] === false) {
            let targetArr = [...this.state.data[index]];
            targetArr.splice(1, 1, true)
            let newData = [...this.state.data];
            newData.splice([index], 1, targetArr);
            this.setState({ data: newData })
        } else {
            let targetArr = [...this.state.data[index]];
            targetArr.splice(1, 1, false)
            let newData = [...this.state.data];
            newData.splice([index], 1, targetArr);
            this.setState({ data: newData })
        }
    }
    EditFunction = (e, index) => {
        if (this.state.data[index][2] === false) {
            let TargetArr = [...this.state.data[index]]
            TargetArr.splice(2, 1, true)
            let newData = [...this.state.data]
            newData.splice([index], 1, TargetArr)
            this.setState({ data: newData })
        } else if (this.state.data[index][2] === true) {
            let TargetArr = [...this.state.data[index]]
            TargetArr.splice(2, 1, false)
            let newData = [...this.state.data]
            newData.splice([index], 1, TargetArr)
            this.setState({ data: newData })
        }
    }
    EditSubmit=(e,index)=>{
        e.preventDefault()
        let targetArr = [...this.state.data]
        targetArr = targetArr.map((item,idx)=>idx==index?[this.state.editText,item[1],false]:item)
        this.setState({data:targetArr})
        this.setState({editText:""})
    }
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <div>
                        <h1>ToDoList</h1>
                        <form onSubmit={(e) => this.addData(e)}>
                            <input type="text" onChange={(e) => this.changeText(e)} value={this.state.text} />
                        </form>
                        <ul>
                            {this.state.data.map((item, index) =>
                                (<div><li key={index} style={{ textDecoration: this.state.data[index][1] ? "line-through" : "none" }}>{item}</li>
                                    <form onSubmit={(e)=>this.EditSubmit(e,index)}>
                                    <input type="text" value={this.state.editText} style={{display:this.state.data[index][2]?"block":"none"}} onChange={(e)=>this.setState({editText:e.target.value})}></input>
                                    </form>
                                    <button onClick={(e) => this.Delete(index)}>Delete</button>
                                    <button onClick={(e) => this.toggle(e, index)}>{this.state.data[index][1] ? "Clear check" : "Check"}</button>
                                    <button onClick={(e) => this.EditFunction(e, index)}>Edit</button>

                                </div>))}
                        </ul>
                    </div>

                </Route>
            </Switch>
        )
    }
}