import jsTPS from './jsTPS'

/**
 *
 * @author Avik Kadakia
 */
class ListItemOrderChange_Transaction extends jsTPS {
    /**
     * Constructor for this transaction, it initializes this
     * object with all the data needed to both do and undo
     * the transaction.
     * 
     * @param prevPos
     * @param newPos
     * @param itemCard
     * @param todoList
     */
    constructor(prevPos, newPos, itemCard, todoList) {
        // KEEP THESE FOR LATER
        super();
        this.previousPosition = prevPos;
        this.newPosition = newPos;
        this.listItemCard = itemCard;
        this.todoList = todoList;
    }

    /**
     * This transaction simply adds the value to the num.
     */
    doTransaction() {
        let temp = this.todoList.items[this.newPosition];
        this.todoList.items[this.newPosition] = this.listItemCard;
        this.todoList.items[this.previousPosition] = temp;
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    undoTransaction() {
        let temp = this.todoList.items[this.previousPosition];
        this.todoList.items[this.previousPosition] = this.listItemCard;
        this.todoList.items[this.newPosition] = temp;
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
    toString() {
        if(this.newPosition < this.previousPosition)
        {
            return this.listItemCard.description + " was moved up"
        }
        else{
            return this.listItemCard.description + " was moved down"
        }
    }
}

export default ListItemOrderChange_Transaction