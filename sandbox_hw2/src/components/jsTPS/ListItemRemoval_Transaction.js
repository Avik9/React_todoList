import jsTPS from './jsTPS'

/**
 *
 * @author Avik Kadakia
 */
class ListItemRemoval_Transaction extends jsTPS{
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
        this.toDoList.items.splice(this.positionInList, 1);
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    undoTransaction() {
        this.toDoList.items.splice(this.positionInList, 0, this.ListItemCard);
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

export default ListItemRemoval_Transaction