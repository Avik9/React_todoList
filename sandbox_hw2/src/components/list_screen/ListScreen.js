import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'
import PropTypes from 'prop-types';
import { list } from 'postcss';

export class ListScreen extends Component {
    getListName() {
        if (this.props.todoList) {
            let name = this.props.todoList.name;
            return this.props.todoList.name;
        }
        else
            return "";
    }
    getListOwner() {
        if (this.props.todoList) {
            let owner = this.props.todoList.owner;
            return this.props.todoList.owner;
        }
    }

    setListName = () =>
    {
        let newName = document.getElementById('list_name_textfield').value;
        if (newName === "")
        {
            newName = "No Name";
        }

        this.props.todoList.name = newName;

        return this.props.todoList.name;
    }

    setListOwner = () =>
    {
        let newOwner = document.getElementById('list_owner_textfield').value;
        if (newOwner === "")
        {
            newOwner = "No Owner";
        }

        this.props.todoList.owner = newOwner;

        return this.props.todoList.owner;
    }

    render() {
        return (
            <div id="todo_list">
                <ListHeading goHome={this.props.goHome} />
                <ListTrash listName = {this.getListName()} deleteList={this.props.deleteList}/>
                <div id="list_details_container">
                    <div id="list_details_name_container" className="text_toolbar">
                        <span id="list_name_prompt">Name:</span>
                        <input 
                            defaultValue={this.getListName()} 
                            type="text" 
                            id="list_name_textfield"
                            onChange={() => this.setListName()} />
                            
                    </div>
                    <div id="list_details_owner_container" className="text_toolbar">
                        <span id="list_owner_prompt">Owner:</span>
                        <input 
                            defaultValue={this.getListOwner()}
                            type="text" 
                            id="list_owner_textfield"
                            onChange={() => this.setListOwner()} 
                            />
                    </div>
                </div>
                <ListItemsTable todoList={this.props.todoList} 
                                moveUp={this.moveUp}
                                moveDown={this.moveDown}
                                deleteItem={this.deleteItem}
                                loadList={this.props.loadList}
                                goItem={this.props.goItem} />
            </div>
        )
    }
}

export default ListScreen
