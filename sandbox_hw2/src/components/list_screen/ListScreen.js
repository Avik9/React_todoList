import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'
// import PropTypes from 'prop-types';
// import { list } from 'postcss';

// FOR jsTPS
import ListNameChange_Transaction from '../jsTPS/ListNameChange_Transaction'
import ListOwnerChange_Transaction from '../jsTPS/ListOwnerChange_Transaction'
import ListItemOrderChange_Transaction from '../jsTPS/ListItemOrderChange_Transaction'
import ListItemEdit_Transaction from '../jsTPS/ListItemEdit_Transaction'
import ListItemRemoval_Transaction from '../jsTPS/ListItemRemoval_Transaction'

let keys = []
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

    setListName = () => {
        let oldName = this.props.todoList.name;

        let newName = document.getElementById('list_name_textfield').value;
        if (newName === "") {
            newName = "(No Name)";
        }

        if (newName !== oldName) {
            let newNameTransaction = new ListNameChange_Transaction(oldName, newName, this.props.todoList);

            this.props.jsTPSstack.addTransaction(newNameTransaction);
        }

        return this.props.todoList.name;
    }

    setListOwner = () => {
        let oldOwner = this.props.todoList.owner;
        let newOwner = document.getElementById('list_owner_textfield').value;
        if (newOwner === "") {
            newOwner = "(No Owner)";
        }

        if (oldOwner !== newOwner) {
            let newOwnerTransaction = new ListOwnerChange_Transaction(oldOwner, newOwner, this.props.todoList);

            this.props.jsTPSstack.addTransaction(newOwnerTransaction);
        }

        return this.props.todoList.owner;
    }

    render() {

        window.addEventListener("keydown", (e) => this.keysPressed(e), false);
        window.addEventListener("keyup", (e) => this.keysReleased(e), false);

        return (
            <div id="todo_list">
                <ListHeading goHome={this.props.goHome} />
                <ListTrash listName={this.getListName()} deleteList={this.props.deleteList} />
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
                    createListItemCard={this.props.createListItemCard}
                    jsTPSstack={this.props.jsTPSstack} />
            </div>
        )
    }

    keysPressed = (e) => { 
        // store an entry for every key pressed
        keys[e.keyCode] = true;
        
        // Ctrl + Z
        if (keys[17] && keys[90]) {
            // do something
            console.log("Pressed Ctrl + Z");

            console.log("List item order change");
            
            
            keys[17] = false; 
            keys[90] = false;

            // prevent default browser behavior
            e.preventDefault();	

            
            this.props.jsTPSstack.undoTransaction();

            document.getElementById('list_name_textfield').value = this.props.todoList.name;
            document.getElementById('list_owner_textfield').value = this.props.todoList.owner;

            this.props.loadList(this.props.todoList);
        }
        
        // Ctrl + Y
        if (keys[17] && keys[89]) {
            // do something

            console.log("Pressed Ctrl + Y");
            this.props.jsTPSstack.doTransaction();

            keys[17] = false; 
            keys[89] = false;

            // prevent default browser behavior
            e.preventDefault();	

            document.getElementById('list_name_textfield').value = this.props.todoList.name;
            document.getElementById('list_owner_textfield').value = this.props.todoList.owner;

            this.props.loadList(this.props.todoList);
        }

        return;
    }

    keysReleased = (e) => {
        // mark keys that were released
        keys[e.keyCode] = false;
    }
}

export default ListScreen
