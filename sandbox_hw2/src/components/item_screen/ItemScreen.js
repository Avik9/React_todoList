import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ListItemEdit_Transaction from '../jsTPS/ListItemEdit_Transaction';

export class ItemScreen extends Component {

    /**
     *  This function is called when the user presses the submit button in the Edit/Add item screen
     */
    submitItemChanges = () => {

        if (this.props.currentItem) {
            this.updateItem();
        }

        else {
            this.createNewItem();
        }

        this.emptyItemPanel();

        this.props.loadList(this.props.todoList);
    }

    /**
     *  This function is called when the user presses the cancel button in the Edit/Add item screen
     */
    cancelItemChanges = () => {
        this.emptyItemPanel();

        this.props.loadList(this.props.todoList);
    }

    /**
     *  This function is called to update the item currently being editted by the user
     */
    updateItem = () => {
        let description = document.getElementById('item_description_textfield').value;
        let assignedTo = document.getElementById('assigned_to_textfield').value;
        let dueDate = document.getElementById('due_date_dropdown').value;
        let completed = document.getElementById('completed_checkbox').checked;

        if(this.props.currentItem.description !== description 
            || this.props.currentItem.assigned_to !== assignedTo
            || this.props.currentItem.due_date !== dueDate
            || this.props.currentItem.completed !== completed)
        {
            let editItemTransaction = new ListItemEdit_Transaction(description, assignedTo, dueDate, completed, this.props.currentItem);

            this.props.jsTPSstack.addTransaction(editItemTransaction);

            this.props.loadList(this.props.todoList);
        }

        return;
    }

    /**
     *  This function is called to clear the edit/add item screen for the user
     */
    emptyItemPanel = () => {
        let description = document.getElementById('item_description_textfield');
        description.value = "";

        let assignedTo = document.getElementById('assigned_to_textfield');
        assignedTo.value = "";

        let dueDate = document.getElementById('due_date_dropdown');
        dueDate.value = "";

        let completed = document.getElementById('completed_checkbox');
        completed.checked = false;
    }

    getLength = () => {
        let counter = 0;

        this.props.todoList.items.forEach(() => {
            counter++;
        });

        return counter;
    }

    /**
     *  This function is called to create a item by the user
     */
    createNewItem = () => {
        let position = this.getLength();

        let newItem = {
            key: position,
            description: document.getElementById('item_description_textfield').value === "" ? "(No Description)" : document.getElementById('item_description_textfield').value,
            assigned_to: document.getElementById('assigned_to_textfield').value === '' ? ('Not assigned') : document.getElementById('assigned_to_textfield').value,
            due_date: document.getElementById('due_date_dropdown').value,
            completed: document.getElementById('completed_checkbox').checked
        }

        this.props.todoList.items.push(newItem);
        this.props.loadList(this.props.todoList);
    }

    render() {
        if (this.props.currentItem) {
            let itemToLoad = this.props.currentItem;
            return (
                <div id='todo_item'>
                    <div id="item_container">Item</div>
                    <div id="item_name_container" class="text_toolbar">
                        <span id="description_prompt">Description:</span>
                        <input type="text" defaultValue={itemToLoad.description} id="item_description_textfield" />
                    </div>
                    <div id="assigned_to_container" class="text_toolbar">
                        <span id="assigned_to_prompt">Assigned To:</span>
                        <input type="text" defaultValue={itemToLoad.assigned_to} id="assigned_to_textfield" />
                    </div>
                    <div id="due_date_container" class="text_toolbar">
                        <span id="due_date_prompt">Due Date:</span>
                        <input type="date" defaultValue={itemToLoad.due_date} id="due_date_dropdown" />
                    </div>
                    <div id="completed_container" class="text_toolbar">
                        <span id="completed_prompt">Completed:</span>
                        <input type="checkbox" checked={itemToLoad.completed} id="completed_checkbox" />
                    </div>
                    <div id="list_submit_buttons">
                        <button id="list_submit_list" onClick={this.submitItemChanges}>Submit</button>
                        <button id="list_cancel_submit_list" onClick={this.cancelItemChanges}>Cancel</button>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div id='todo_item'>
                    <div id="item_container">Item</div>
                    <div id="item_name_container" class="text_toolbar">
                        <span id="description_prompt">Description:</span>
                        <input type="text" defaultValue={""} id="item_description_textfield" />
                    </div>
                    <div id="assigned_to_container" class="text_toolbar">
                        <span id="assigned_to_prompt">Assigned To:</span>
                        <input type="text" defaultValue={""} id="assigned_to_textfield" />
                    </div>
                    <div id="due_date_container" class="text_toolbar">
                        <span id="due_date_prompt">Due Date:</span>
                        <input type="date" defaultValue={""} id="due_date_dropdown" />
                    </div>
                    <div id="completed_container" class="text_toolbar">
                        <span id="completed_prompt">Completed:</span>
                        <input type="checkbox" defaultValue={false} id="completed_checkbox" />
                    </div>
                    <div id="list_submit_buttons">
                        <button id="list_submit_list" onClick={this.submitItemChanges}>Submit</button>
                        <button id="list_cancel_submit_list" onClick={this.cancelItemChanges}>Cancel</button>
                    </div>
                </div>
            )
        }
    }
}

ItemScreen.propTypes = {
    currentScreen: PropTypes.string.isRequired,
    todoItem: PropTypes.object.isRequired
}

export default ItemScreen
