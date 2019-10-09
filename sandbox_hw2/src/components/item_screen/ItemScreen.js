import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ItemScreen extends Component {
    render() {
        return (
            <div id='todo_item'>
                <div id="item_container">Item</div>
                <div id="item_name_container" class="text_toolbar">
                    <span id="description_prompt">Description:</span>
                    <input type="text" id="item_description_textfield" />
                </div>
                <div id="assigned_to_container" class="text_toolbar">
                    <span id="assigned_to_prompt">Assigned To:</span>
                    <input type="text" id="assigned_to_textfield" />
                </div>
                <div id="due_date_container" class="text_toolbar">
                    <span id="due_date_prompt">Due Date:</span>
                    <input type="date" id="due_date_dropdown" />
                </div>
                <div id="completed_container" class="text_toolbar">
                    <span id="completed_prompt">Completed:</span>
                    <input type="checkbox" id="completed_checkbox" />
                </div>
                <div id="list_submit_buttons">
                    <button id="list_submit_list">Submit</button>
                    <button id="list_cancel_submit_list">Cancel</button>
                </div>
            </div>
        )
    }
}

ItemScreen.propTypes = {
    currentScreen: PropTypes.string.isRequired,
    todoItem: PropTypes.object.isRequired
}

export default ItemScreen
