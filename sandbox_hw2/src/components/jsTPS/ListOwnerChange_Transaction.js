import jsTPS_Transaction from './jsTPS_Transaction'

/**
 *
 * @author Avik Kadakia
 */
class ListOwnerChange_Transaction extends jsTPS_Transaction{
    /**
     * Constructor for this transaction, it initializes this
     * object with all the data needed to both do and undo
     * the transaction.
     * 
     * @param prevOwnerName
     * @param newOwnerName
     * @param toDoList
     */
    constructor(previousOwner, newOwner, toDoList) {

        super();
        this.prevOwnerName = previousOwner;
        this.newOwnerName = newOwner;
        this.toDoList = toDoList;
    }

    /**
     * This transaction changes the list owner to new owner.
     */
    doTransaction() {
        // Change the list to the new owner
    }

    /**
     * As the reverse of do, this method changes the list owner to the old owner.
     */
    undoTransaction() {
        // Change the list to the old owner
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
    toString() {
        return this.prevOwnerName + " changed to " + this.newOwnerName;
    }
}