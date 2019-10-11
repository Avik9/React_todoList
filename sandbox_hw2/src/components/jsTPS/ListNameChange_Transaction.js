import jsTPS from './jsTPS'

/**
 *
 * @author Avik Kadakia
 */
class ListNameChange_Transaction extends jsTPS {
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
        this.todoList = toDoList;
    }

    /**
     * This transaction simply changes the list name to the new name.
     */
    doTransaction() {
        this.todoList.name = this.newListName;
    }

    /**
     * As the reverse of do, changes the list name to the old name.
     */
    undoTransaction() {
        this.todoList.name = this.prevListName;
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

export default ListNameChange_Transaction