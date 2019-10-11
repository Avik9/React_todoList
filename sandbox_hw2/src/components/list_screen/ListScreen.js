import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'
import PropTypes from 'prop-types';
import { list } from 'postcss';

// FOR jsTPS
import ListNameChange_Transaction from '../jsTPS/ListNameChange_Transaction'
import ListOwnerChange_Transaction from '../jsTPS/ListOwnerChange_Transaction'

export class ListScreen extends Component {
    getListName() {
        if (this.props.todoList) {
            let name = this.props.todoList.name;
            return name;
        }
        else
            return "";
    }
    getListOwner() {
        if (this.props.todoList) {
            let owner = this.props.todoList.owner;
            return owner;
        }
    }

    setListName = () =>
    {
        let oldName = this.props.todoList.name;
        
        let newName = document.getElementById('list_name_textfield').value;
        if (newName === "")
        {
            newName = "(No Name)";
        }

        let newNameTransaction = new ListNameChange_Transaction(oldName, newName, this.props.todoList);

        this.props.jsTPSstack.addTransaction(newNameTransaction);

        return this.props.todoList.name;
    }

    setListOwner = () =>
    {
        let oldOwner = this.props.todoList.owner;
        let newOwner = document.getElementById('list_owner_textfield').value;
        if (newOwner === "")
        {
            newOwner = "(No Owner)";
        }

        let newOwnerTransaction = new ListOwnerChange_Transaction(oldOwner, newOwner, this.props.todoList);

        this.props.jsTPSstack.addTransaction(newOwnerTransaction);

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
                            onBlur={() => this.setListName()} />
                            
                    </div>
                    <div id="list_details_owner_container" className="text_toolbar">
                        <span id="list_owner_prompt">Owner:</span>
                        <input 
                            defaultValue={this.getListOwner()}
                            type="text" 
                            id="list_owner_textfield"
                            onBlur={() => this.setListOwner()} 
                            />
                    </div>
                </div>
                <ListItemsTable todoList={this.props.todoList} 
                                moveUp={this.moveUp}
                                moveDown={this.moveDown}
                                deleteItem={this.deleteItem}
                                loadList={this.props.loadList}
                                editListItemCard={this.props.editListItemCard}
                                createListItemCard={this.props.createListItemCard} />
            </div>
        )
    }
}

export default ListScreen
