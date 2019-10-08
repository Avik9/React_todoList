import React, { Component } from 'react'

export class ListTrash extends Component {

    deleteList = () => {
        this.props.deleteList(this.props.listName)
    }

    render() {
        return (
            <div id="list_trash"
            onClick={this.deleteList}>&#128465;</div>
        )
    }
}

export default ListTrash
