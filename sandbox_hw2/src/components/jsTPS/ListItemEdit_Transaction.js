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
    constructor(newDescription, newAssignedTo, newDueDate, newCompleted, listItemCard) {
        // KEEP THESE FOR LATER
        super();
        this.newDescription = newDescription;
        this.newAssignedTo = newAssignedTo;
        this.newDueDate = newDueDate;
        this.newCompleted = newCompleted;
        this.oldDescription = listItemCard.description;
        this.oldAssignedTo = listItemCard.assigned_to;
        this.oldDueDate = listItemCard.due_date;
        this.oldCompleted = listItemCard.completed;
        this.listItem = listItemCard;
    }

    /**
     * This transaction simply adds the value to the num.
     */
    doTransaction() {
        this.listItem.description = this.newDescription;
        this.listItem.assigned_to = this.newAssignedTo;
        this.oldDueDate = this.listItem.assigned_to;
        this.listItem.due_date = this.newDueDate;
        this.listItem.completed = this.newCompleted;
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    undoTransaction() {
        this.listItem.description = this.oldDescription;
        this.listItem.assigned_to = this.oldAssigned_to;
        this.listItem.due_date = this.oldDueDate;
        this.listItem.due_date = this.oldCompleted;
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

export default ListItemEdit_Transaction