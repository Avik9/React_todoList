import jsTPS from './jsTPS'

/**
 *
 * @author Avik Kadakia
 */
class ListOwnerChange_Transaction extends jsTPS{
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
        this.toDoList.owner = this.newOwnerName;
    }

    /**
     * As the reverse of do, this method changes the list owner to the old owner.
     */
    undoTransaction() {
        this.toDoList.owner = this.prevOwnerName;
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

export default ListOwnerChange_Transaction