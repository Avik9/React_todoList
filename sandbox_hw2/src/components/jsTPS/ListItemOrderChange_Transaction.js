import jsTPS_Transaction from './jsTPS_Transaction'

/**
 *
 * @author Avik Kadakia
 */
class ListItemOrderChange_Transaction{
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
        // Move the item up or down
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    undoTransaction() {
        // Move the item to the opposite direction
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