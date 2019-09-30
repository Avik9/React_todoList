import jsTPS_Transaction from jsTPS_Transaction;

/**
 *
 * @author Avik Kadakia
 */

 class OrMask_Transaction extends jsTPS_Transaction{

    num = new Num();

    intNum;

    mask;

    constructor(initNum, initIntNum, initMask)
    {
        // KEEP THESE FOR LATER
        this.num = initNum;
        this.intNum = initIntNum;
        this.mask = initMask;
    }

    /**
     * This transaction simply adds the value to the num.
     */
    doTransaction()
    {
        this.num.orMask(this.mask)
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    undoTransaction() {
        this.num.setNum(this.intNum);
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
    toString() {
        return "Or Mask " + this.mask;
    }
 } 