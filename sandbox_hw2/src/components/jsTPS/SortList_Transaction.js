import jsTPS_Transaction from './jsTPS_Transaction'

/**
 *
 * @author Avik Kadakia
 */
class SortList_Transaction extends jsTPS_Transaction{
    /**
     * Constructor for this transaction, it initializes this
     * object with all the data needed to both do and undo
     * the transaction.
     * 
     * @param prevList
     * @param newList
     */
    constructor(todoList, prevList, newList) {
        // KEEP THESE FOR LATER
        super();
        // New Values
        this.previousList = prevList;
        this.newList = newList;
        this.todoList = todoList;
    }

    /**
     * This transaction simply adds the value to the num.
     */
    doTransaction() {
        this.todoList = this.newList;
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    undoTransaction() {
        this.todoList.items = []; // this.previousList;
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

export default SortList_Transaction