import React, { Component } from 'react'
import ListItemRemoval_Transaction from '../jsTPS/ListItemRemoval_Transaction';
import ListItemOrderChange_Transaction from '../jsTPS/ListItemOrderChange_Transaction';

var moveUp = require('../../images/Up.png');
var moveDown = require('../../images/Down.png');
var deleteCard = require('../../images/Delete.png');

export class ListItemCard extends Component {
    
    getLength = () =>
    {
        let counter = 0;

        this.props.todoList.items.forEach(() => {
            counter++;
          });

        return counter;
    }

    moveItemUp = (e) =>
    {
        let indexOfItem = this.props.todoList.items.indexOf(this.props.listItem);

        if (indexOfItem > 0) {
            let moveUpTransaction = new ListItemOrderChange_Transaction(indexOfItem, indexOfItem - 1, this.props.listItem, this.props.todoList);
            
            this.props.jsTPSstack.addTransaction(moveUpTransaction);
        }
        this.props.loadList(this.props.todoList);
        e.stopPropagation();
    }

    moveItemDown = (e) =>
    {
        let indexOfItem = this.props.todoList.items.indexOf(this.props.listItem);

        if (indexOfItem < this.getLength() - 1) {
            let moveUpTransaction = new ListItemOrderChange_Transaction(indexOfItem, indexOfItem + 1, this.props.listItem, this.props.todoList);
            
            this.props.jsTPSstack.addTransaction(moveUpTransaction);
        }
        this.props.loadList(this.props.todoList);
        e.stopPropagation();
    }

    deleteItem = (e) =>
    {
        let indexOfItem = this.props.todoList.items.indexOf(this.props.listItem);

        let removeitemCardTransaction = new ListItemRemoval_Transaction(indexOfItem, this.props.listItem, this.props.todoList);

        this.props.jsTPSstack.addTransaction(removeitemCardTransaction);

        this.props.loadList(this.props.todoList);
        e.stopPropagation();
    }

    render() {
        return (
            <div className='list_item_card' onClick={() => this.props.editListItemCard(this.props.listItem)}>
                <div className='list_item_card_description'>
                    {this.props.listItem.description}
                </div>
                <div className='list_item_card_assigned_to'>
                    Assigned To: <strong>{this.props.listItem.assigned_to}</strong>
                </div>
                <div className='list_item_card_due_date'>
                    {this.props.listItem.due_date}
                </div>
                <div className='list_item_card_completed'>
                    {this.props.listItem.completed === true && <span>Completed</span>}
                </div>
                <div className='list_item_card_not_completed'>
                    {this.props.listItem.completed === false && <span>Pending</span>}
                </div>
                <div className=
                {this.props.todoList.items.indexOf(this.props.listItem) === 0 ? 'list_item_move_up_first' : 'list_item_move_up'}
                        onClick={(e) => this.moveItemUp(e)}>
                    {<img src={moveUp} alt=""></img>}
                </div>
                <div className=
                {(this.props.todoList.items.indexOf(this.props.listItem)) === (this.getLength() - 1) ? 'list_item_move_down_last' : 'list_item_move_down'}
                        onClick={(e) => this.moveItemDown(e)}>
                    {<img src={moveDown} alt=""></img>}      
                </div>
                <div className='list_item_card_delete'
                        onClick={(e) => this.deleteItem(e)}>
                    {<img src={deleteCard} alt=""></img>}
                </div>
            </div>
        )
    }
}

export default ListItemCard
