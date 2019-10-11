import React, { Component } from 'react'
import ListItemCard from './ListItemCard'

var addCard = require('../../images/Add.png');

export class ListItemsTable extends Component {

    state = {
        currentItemSortCriteria: null
    }
    /**
     * This function is called in response to when the user clicks
     * on the Task header in the items table.
     */
    sortItemsByTask = () => {
        // IF WE ARE CURRENTLY INCREASING BY TASK SWITCH TO DECREASING
        if (this.isCurrentItemSortCriteria('SORT_BY_TASK_INCREASING')) {
            this.sortTasks('SORT_BY_TASK_DECREASING');
        }
        // ALL OTHER CASES SORT BY INCREASING
        else {
            this.sortTasks('SORT_BY_TASK_INCREASING');
        }
    }

    /**
     * This function is called in response to when the user clicks
     * on the Status header in the items table.
     */
    sortItemsByStatus = () => {
        // IF WE ARE CURRENTLY INCREASING BY STATUS SWITCH TO DECREASING
        if (this.isCurrentItemSortCriteria('SORT_BY_STATUS_INCREASING')) {
            this.sortTasks('SORT_BY_STATUS_DECREASING');
        }
        // ALL OTHER CASES SORT BY INCREASING
        else {
            this.sortTasks('SORT_BY_STATUS_INCREASING');
        }
    }

    /**
     *  This function is called in response to when the user clicks
     *  on the Due Date header in the items table.
     */
    sortItemsByDueDate = () => {
        // IF WE ARE CURRENTLY INCREASING BY STATUS SWITCH TO DECREASING
        if (this.isCurrentItemSortCriteria('SORT_BY_DUE_DATE_INCREASING')) {
            this.sortTasks('SORT_BY_DUE_DATE_DECREASING');
        }
        // ALL OTHER CASES SORT BY INCREASING
        else {
            this.sortTasks('SORT_BY_DUE_DATE_INCREASING');
        }
    }

    /**
     * This method sorts the todo list items according to the provided sorting criteria.
     * 
     * @param sortingCriteria Sorting criteria to use.
     */
    sortTasks = async(sortingCriteria) => {
        await this.setState({currentItemSortCriteria: sortingCriteria});
        this.props.todoList.items.sort(this.compare);
        this.setState({currentItemSortCriteria: sortingCriteria});
    }

    /**
     * This method tests to see if the current sorting criteria is the same as the argument.
     * 
     * @param testCriteria Criteria to test for.
     */
    isCurrentItemSortCriteria = (testCriteria) => {
        return this.state.currentItemSortCriteria === testCriteria;
    }

    /**
     * This method compares two items for the purpose of sorting according to what
     * is currently set as the current sorting criteria.
     * 
     * @param {TodoListItem} item1 First item to compare.
     * @param {TodoListItem} item2 Second item to compare.
     */
    compare = (item1, item2) => {

        // IF IT'S A DECREASING CRITERIA SWAP THE ITEMS
        if (this.isCurrentItemSortCriteria('SORT_BY_TASK_DECREASING')
            || this.isCurrentItemSortCriteria('SORT_BY_STATUS_DECREASING')
            || this.isCurrentItemSortCriteria('SORT_BY_DUE_DATE_DECREASING')) {
            let temp = item1;
            item1 = item2;
            item2 = temp;
        }
        // SORT BY ITEM DESCRIPTION
        if (this.isCurrentItemSortCriteria('SORT_BY_TASK_INCREASING')
            || this.isCurrentItemSortCriteria('SORT_BY_TASK_DECREASING')) {
            if (item1.description < item2.description)
                return -1;
            else if (item1.description > item2.description)
                return 1;
            else
                return 0;
        }
        // SORT BY DUE DATE
        else if (this.isCurrentItemSortCriteria('SORT_BY_DUE_DATE_INCREASING')
            || this.isCurrentItemSortCriteria('SORT_BY_DUE_DATE_DECREASING')) {
            if (item1.due_date < item2.due_date)
                return -1;
            else if (item1.due_date > item2.due_date)
                return 1;
            else
                return 0;
        }

        // SORT BY COMPLETED
        else 
        {
            if (item1.completed < item2.completed)
                return -1;
            else if (item1.completed > item2.completed)
                return 1;
            else
                return 0;
        }
    }

    render() {
        return (
            <div id="list_items_container">
                <div className="list_item_header_card">
                    <div className="list_item_task_header" onClick={this.sortItemsByTask}>Task</div>
                    <div className="list_item_due_date_header" onClick={this.sortItemsByDueDate}>Due Date</div>
                    <div className="list_item_status_header" onClick={this.sortItemsByStatus}>Status</div>
                </div>

                {
                    this.props.todoList.items.map((todoItem) => (
                        <ListItemCard
                            key={todoItem.key}
                            listItem={todoItem}
                            todoList={this.props.todoList}
                            loadList={this.props.loadList}
                            editListItemCard={this.props.editListItemCard}  />
                    ))
                }
                <div className='list_item_add_card' onClick={this.props.createListItemCard}>
                    <img src={addCard} className="list_item_add_card" alt=""/>
                </div>
            </div>
        )
    }
}

export default ListItemsTable