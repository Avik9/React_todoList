import jsTPS_Transaction from './jsTPS_Transaction'

/**
 *
 * @author Avik Kadakia
 */
class ListNameChange_Transaction extends jsTPS_Transaction {
    /**
     * Constructor for this transaction, it initializes this
     * object with all the data needed to both do and undo
     * the transaction.
     * 
     * @param previousName
     * @param newName     
     * @param toDoList
     */
    constructor(previousName, newName, toDoList) {
        // KEEP THESE FOR LATER
        super();
        this.prevListName = previousName;
        this.newListName = newName;
        this.toDoList = toDoList;
    }

    /**
     * This transaction simply changes the list name to the new name.
     */
    doTransaction() {
        // Change the list to the new name
    }

    /**
     * As the reverse of do, changes the list name to the old name.
     */
    undoTransaction() {
        // Change the list to the old name
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
    toString() {
        return this.prevListName + " changed to " + this.newListName;
    }
}