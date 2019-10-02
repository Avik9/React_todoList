/**
 * AddToNum_Transaction.js
 * 
 * This class is a transaction that can be executed and undone. It
 * can be stored in the jsTPS transaction stack and must be constructed
 * with all the data necessary to perform both do and undo.
 * 
 * @author Avik Kadakia
 * @version 1.0
 */
class AddToNum_Transaction extends jsTPS_Transaction 
{
    // THIS IS THE OBJECT IT WILL MANIPULATE
    num = new Num();
    
    // AMOUNT TO ADD/REMOVE FOR NUM
    amountToAdd;

    /**
     * Constructor for this transaction, it initializes this
     * object with all the data needed to both do and undo
     * the transaction.
     * 
     * @param initNum
     * @param initAmountToAdd 
     */
    constructor(initNum, initAmountToAdd) {
        // KEEP THESE FOR LATER
        super();
        var num = initNum;
        var amountToAdd = initAmountToAdd;
    }

    /**
     * This transaction simply adds the value to the num.
     */
    doTransaction() {
        let oldNum = num.getNum();
        let newNum = oldNum + amountToAdd;
        num.setNum(newNum);
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    undoTransaction() {
        let oldNum = num.getNum();
        let newNum = oldNum - amountToAdd;
        num.setNum(newNum);
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
    toString() {
        return "Add " + amountToAdd;
    }
}