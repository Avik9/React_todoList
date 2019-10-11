import jsTPS_Transaction from './jsTPS_Transaction'

/**
 *
 * @author Avik Kadakia
 */
class ListItemRemoval_Transaction extends jsTPS_Transaction{
    /**
     * Constructor for this transaction, it initializes this
     * object with all the data needed to both do and undo
     * the transaction.
     * 
     * @param pos
     * @param item
     * @param toDoList
     */
    constructor(pos, item, toDoList) {
        // KEEP THESE FOR LATER
        super();
        this.positionInList = pos;
        this.ListItemCard = item;
        this.toDoList = toDoList;
    }

    /**
     * This transaction simply adds the value to the num.
     */
    doTransaction() {
        // Remove the item from the list
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    undoTransaction() {
        // Add the item back to the list
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
    toString() {
        return this.ListItemCard.description + " was removed";
    }
}