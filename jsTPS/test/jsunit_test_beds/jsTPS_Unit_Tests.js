/**
 * jsTPS_Unit_Tests.java
 * 
 * This file provides a test bed for the jsTPS framework.
 * 
 * @author Avik Kadakia
 * @version 1.0
 */
class jsTPS_Unit_Tests {

    constructor() {

    }

    run() {
        document.getElementById("input").innerHTML = "jsTPS Unit Testing results<br><br>";
        this.testAdd();
        this.testAndMask();
        this.testOrMask();
        // this.testUndo();
        // this.testRedo();
        // this.testClear();
    }

    /**
     * This JUnit test is for testing the adding of transactions.
     */
    testAdd() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        var tps = new jsTPS();
        var num = new Num();


        // CHECK DEFAULT NUM VALUE == 0
        document.getElementById("input").innerHTML += "Creating a new Num object ...  <br><br>&emsp; &emsp;Checking if the num object is equal to 0: ";

        this.checkEquality(num.getNum(), 0);


        // CHECK NUM == 5
        document.getElementById("input").innerHTML += "Changing the value of num to 5 ... <br><br>&emsp; &emsp;Checking if the num object is equal to 5: ";

        tps.addTransaction(new AddToNum_Transaction(num, 5));

        this.checkEquality(num.getNum(), 5);


        // CHECKING TPS SIZE == 1
        document.getElementById("input").innerHTML += "&emsp; &emsp;Checking if the tps' size is 1: ";

        this.checkEquality(tps.getSize(), 1);


        // CHECK REDO SIZE == 0
        document.getElementById("input").innerHTML += "&emsp; &emsp;Checking if the tps.getRedoSize() is 0: ";

        this.checkEquality(tps.getRedoSize(), 0);


        // CHECK UNDO SIZE == 0
        document.getElementById("input").innerHTML += "&emsp; &emsp;Checking if the tps.getUndoSize() is 1: ";

        this.checkEquality(tps.getUndoSize(), 1);


        // ADD 10 TRANSACTION
        document.getElementById("input").innerHTML += "Adding 10 to transactions ... <br><br>&emsp; &emsp;Checking if the num object is equal to 15: ";

        tps.addTransaction(new AddToNum_Transaction(num, 10));

        this.checkEquality(num.getNum(), 15);


        // CHECKING TPS SIZE == 2
        document.getElementById("input").innerHTML += "&emsp; &emsp;Checking if the tps' size is 2: ";

        this.checkEquality(tps.getSize(), 2);


        // CHECK REDO SIZE == 0
        document.getElementById("input").innerHTML += "&emsp; &emsp;Checking if the tps.getRedoSize() is 0: ";

        this.checkEquality(tps.getRedoSize(), 0);


        // CHECK UNDO SIZE == 2
        document.getElementById("input").innerHTML += "&emsp; &emsp;Checking if the tps.getUndoSize() is 2: ";

        this.checkEquality(tps.getUndoSize(), 2);


        // ADD 20 TRANSACTION
        document.getElementById("input").innerHTML += "Adding 20 to num ... <br><br>&emsp; &emsp;Checking if the num object is equal to 35: ";

        tps.addTransaction(new AddToNum_Transaction(num, 20));

        this.checkEquality(num.getNum(), 35);


        // CHECKING TPS SIZE == 3
        document.getElementById("input").innerHTML += "&emsp; &emsp;Checking if the tps' size is 3: ";

        this.checkEquality(tps.getSize(), 3);


        // CHECK REDO SIZE == 0
        document.getElementById("input").innerHTML += "&emsp; &emsp;Checking if the tps.getRedoSize() is 0: ";

        this.checkEquality(tps.getRedoSize(), 0);


        // CHECK UNDO SIZE == 3
        document.getElementById("input").innerHTML += "&emsp; &emsp;Checking if the tps.getUndoSize() is 3: ";

        this.checkEquality(tps.getUndoSize(), 3);
    }

    /**
     * 
     */
    testAndMask() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();


        // CHECK DEFAULT NUM VALUE == 0
        document.getElementById("input").innerHTML += "Creating a new num ...  <br><br>&emsp; &emsp;Checking if the num object is equal to 0: ";

        this.checkEquality(num.getNum(), 0);


        // ADD 12 TRANSACTION
        document.getElementById("input").innerHTML += "Adding 12 to transactions ...<br><br>";

        tps.addTransaction(new AddToNum_Transaction(num, 12));


        // AND MASKING 12 WITH 4
        document.getElementById("input").innerHTML += "Adding Mask Taransaction between 12 and 4 ...<br><br>";

        // tps.addTransaction(new AndMask_Transaction(num, num.getNum(), 4));

        document.getElementById("input").innerHTML += "&emsp; &emsp;Checking if the num is now equal to 4: ";

        this.checkEquality(num.getNum(), 4);


        // CHECKING TPS SIZE == 3
        document.getElementById("input").innerHTML += "&emsp; &emsp;Checking if the tps' size is 3: ";

        this.checkEquality(tps.getSize(), 3);


        // UNDO TRANSACTION
        document.getElementById("input").innerHTML += "Undoing the tps ...<br><br>";

        // tps.undoTransaction();

        //CHECK SIZE == 3
        document.getElementById("input").innerHTML += "&emsp; &emsp;Checking if the tps' size is 3: ";

        this.checkEquality(tps.getSize(), 3);

        // CHECK NUM == 12
        document.getElementById("input").innerHTML += "&emsp; &emsp;Checking if the num is now equal to 12: ";

        this.checkEquality(num.getNum(), 12);

        //CHECK SIZE == 2
        document.getElementById("input").innerHTML += "&emsp; &emsp;Checking if the tps' size is 2: ";

        this.checkEquality(tps.getSize(), 2);


        //CHECK tps.getRedoSize() == 1
        document.getElementById("input").innerHTML += "&emsp; &emsp;Checking if tps.getRedoSize() is 1: ";

        this.checkEquality(tps.getRedoSize(), 1);


        //CHECK tps.getUndoSize() == 1
        document.getElementById("input").innerHTML += "&emsp; &emsp;Checking if tps.getUndoSize() is 1: ";

        this.checkEquality(tps.getUndoSize(), 1);
    }

    testOrMask() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();


        // CHECK DEFAULT NUM VALUE == 0
        document.getElementById("input").innerHTML += "Creating a new num ...  <br><br>&emsp; &emsp;Checking if the num object is equal to 0: ";

        this.checkEquality(num.getNum(), 0);


        // ADD 12 TRANSACTION
        document.getElementById("input").innerHTML += "Adding 12 to transactions ...<br><br>";

        tps.addTransaction(new AddToNum_Transaction(num, 12));


        // AND MASKING 12 WITH 4
        document.getElementById("input").innerHTML += "Adding Mask Taransaction between 12 and 4 ...<br><br>";

        tps.addTransaction(new OrMask_Transaction(num, num.getNum(), 4));

        document.getElementById("input").innerHTML += "&emsp; &emsp;Checking if the num is now equal to 4: ";

        this.checkEquality(num.getNum(), 4);


        // CHECKING TPS SIZE == 3
        document.getElementById("input").innerHTML += "&emsp; &emsp;Checking if the tps' size is 3: ";

        this.checkEquality(tps.getSize(), 3);


        // UNDO TRANSACTION
        document.getElementById("input").innerHTML += "Undoing the tps ...<br><br>";

        // tps.undoTransaction();

        //CHECK SIZE == 3
        document.getElementById("input").innerHTML += "&emsp; &emsp;Checking if the tps' size is 3: ";

        this.checkEquality(tps.getSize(), 3);

        // CHECK NUM == 12
        document.getElementById("input").innerHTML += "&emsp; &emsp;Checking if the num is now equal to 12: ";

        this.checkEquality(num.getNum(), 12);

        //CHECK SIZE == 2
        document.getElementById("input").innerHTML += "&emsp; &emsp;Checking if the tps' size is 2: ";

        this.checkEquality(tps.getSize(), 2);


        //CHECK tps.getRedoSize() == 1
        document.getElementById("input").innerHTML += "&emsp; &emsp;Checking if tps.getRedoSize() is 1: ";

        this.checkEquality(tps.getRedoSize(), 1);


        //CHECK tps.getUndoSize() == 1
        document.getElementById("input").innerHTML += "&emsp; &emsp;Checking if tps.getUndoSize() is 1: ";

        this.checkEquality(tps.getUndoSize(), 1);
    }

    /**
     * This JUnit test is for testing the undoing of transactions.
     */
    testUndo() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();
        Assert.assertEquals(num.getNum(), 0);
        Assert.assertFalse(tps.hasTransactionToUndo());
        Assert.assertFalse(tps.hasTransactionToRedo());

        // ADD 3 TRANSACTIONS (5, 10, and 15)
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        Assert.assertTrue(tps.hasTransactionToUndo());
        Assert.assertFalse(tps.hasTransactionToRedo());
        Assert.assertEquals(35, num.getNum());
        Assert.assertTrue(tps.hasTransactionToUndo());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(3, tps.getUndoSize());

        // UNDO A TRANSACTION
        tps.undoTransaction();
        Assert.assertTrue(tps.hasTransactionToUndo());
        Assert.assertTrue(tps.hasTransactionToRedo());
        Assert.assertEquals(15, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(1, tps.getRedoSize());
        Assert.assertEquals(2, tps.getUndoSize());

        // UNDO ANOTHER
        tps.undoTransaction();
        Assert.assertTrue(tps.hasTransactionToUndo());
        Assert.assertTrue(tps.hasTransactionToRedo());
        Assert.assertEquals(5, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(2, tps.getRedoSize());
        Assert.assertEquals(1, tps.getUndoSize());

        // AND ANOTHER
        tps.undoTransaction();
        Assert.assertFalse(tps.hasTransactionToUndo());
        Assert.assertTrue(tps.hasTransactionToRedo());
        Assert.assertEquals(0, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(3, tps.getRedoSize());
        Assert.assertEquals(0, tps.getUndoSize());

        // WE HAVE NO MORE TO UNDO SO THIS SHOULD DO NOTHING
        tps.undoTransaction();
        Assert.assertFalse(tps.hasTransactionToUndo());
        Assert.assertTrue(tps.hasTransactionToRedo());
        Assert.assertEquals(0, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(3, tps.getRedoSize());
        Assert.assertEquals(0, tps.getUndoSize());
    }

    /**
     * This JUnit test is for testing the redoing of transactions.
     */
    testRedo() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();
        Assert.assertEquals(num.getNum(), 0);

        // ADD 3 TRANSACTIONS (5, 10, and 15)
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        Assert.assertTrue(tps.hasTransactionToUndo());
        Assert.assertFalse(tps.hasTransactionToRedo());
        Assert.assertEquals(35, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(3, tps.getUndoSize());

        // UNDO A TRANSACTION AND THEN REDO IT
        tps.undoTransaction();
        tps.doTransaction();
        Assert.assertTrue(tps.hasTransactionToUndo());
        Assert.assertFalse(tps.hasTransactionToRedo());
        Assert.assertEquals(35, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(3, tps.getUndoSize());

        // UNDO TWO TRANSACTIONS AND THEN REDO THEM
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        Assert.assertTrue(tps.hasTransactionToUndo());
        Assert.assertFalse(tps.hasTransactionToRedo());
        Assert.assertEquals(35, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(3, tps.getUndoSize());

        // UNDO ALL THREE TRANSACTIONS AND REDO THEM
        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        Assert.assertTrue(tps.hasTransactionToUndo());
        Assert.assertFalse(tps.hasTransactionToRedo());
        Assert.assertEquals(35, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(3, tps.getUndoSize());

        // UNDO THREE TRANSACTIONS AND REDO TWO
        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        Assert.assertTrue(tps.hasTransactionToUndo());
        Assert.assertTrue(tps.hasTransactionToRedo());
        Assert.assertEquals(15, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(1, tps.getRedoSize());
        Assert.assertEquals(2, tps.getUndoSize());

        // UNDO ALL THREE TRANSACTIONS AND REDO FOUR, WHICH
        // SHOULD NOT PRODUCE AN ERROR BUT THE LAST
        // REDO SHOULD DO NOTHING
        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        Assert.assertTrue(tps.hasTransactionToUndo());
        Assert.assertFalse(tps.hasTransactionToRedo());
        Assert.assertEquals(35, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(3, tps.getUndoSize());
    }

    /**
     * This JUnit test is for testing clearing of transactions.
     */
    testClear() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();
        Assert.assertEquals(num.getNum(), 0);

        // ADD 3 TRANSACTIONS (5, 10, and 15)
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        Assert.assertEquals(35, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(3, tps.getUndoSize());

        // CLEAR ALL THE TRANSACTIONS
        tps.clearAllTransactions();
        Assert.assertEquals(35, num.getNum());
        Assert.assertEquals(0, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(0, tps.getUndoSize());

        // ADD 3 TRANSACTIONS (5, 10, and 15)
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        Assert.assertEquals(70, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(3, tps.getUndoSize());

        // CLEAR THEM ALL OUT AGAIN
        tps.clearAllTransactions();
        Assert.assertEquals(70, num.getNum());
        Assert.assertEquals(0, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(0, tps.getUndoSize());

        // ADD 3 TRANSACTIONS (5, 10, and 15)
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        Assert.assertEquals(105, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(3, tps.getUndoSize());
    }

    checkEquality(value1, value2) {
        if (value1 === value2) {
            document.getElementById("input").innerHTML += "Condition Passed <br><br><br>";
        }
        else {
            document.getElementById("input").innerHTML += "Condition Failed <br><br><br>";
        }
    }
}