import jsTPS_Transaction from './jsTPS_Transaction'

/**
 *
 * @author Avik Kadakia
 */
class ListItemEdit_Transaction extends jsTPS_Transaction{
    /**
     * Constructor for this transaction, it initializes this
     * object with all the data needed to both do and undo
     * the transaction.
     * 
     * @param prevItem
     * @param newItem
     * @param toDoList
     */
    constructor(prevItem, newItem, toDoList) {
        // KEEP THESE FOR LATER
        super();
        this.previousItem = prevItem;
        this.newItem = newItem;
        this.toDoList = toDoList;
    }

    /**
     * This transaction simply adds the value to the num.
     */
    doTransaction() {
        // Change the old item to the new item
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    undoTransaction() {
        // Change the new item to the old item
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
    toString() {
        return this.previousItem + " was editted";
    }
}