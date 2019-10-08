import React, { Component } from 'react'

var moveUp = require('../../images/Up.png');
var moveDown = require('../../images/Down.png');
var deleteCard = require('../../images/Delete.png');

export class ListItemCard extends Component {
    render() {
        return (
            <div className='list_item_card' onClick = ''>
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
                <div className='list_item_move_up'>
                    {<img src={moveUp}></img>}
                </div>
                <div className='list_item_move_down'>
                    {<img src={moveDown}></img>}      
                </div>
                <div className='list_item_card_delete'>
                    {<img src={deleteCard}></img>}
                </div>
            </div> 
        )
    }
}

export default ListItemCard
