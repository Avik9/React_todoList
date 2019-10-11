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
     */
    constructor(prevItem, newItem) {
        // KEEP THESE FOR LATER
        super();
        this.previousItem = prevItem;
        this.newItem = newItem;
    }

    /**
     * This transaction simply adds the value to the num.
     */
    doTransaction() {
        let oldNum = this.num.getNum();
        let newNum = oldNum + this.amountToAdd;
        this.num.setNum(newNum);
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    undoTransaction() {
        let oldNum = this.num.getNum();
        let newNum = oldNum - this.amountToAdd;
        this.num.setNum(newNum);
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
    toString() {
        return "Add " + this.amountToAdd;
    }
}