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
        this.passedAllCases = true;
        this.numFailedCases = 0;
        this.printer = this.printer;
    }

    run() {
        this.printer = "jsTPS Unit Testing results:<br><br>";
        this.testAdd();
        this.testAndMask();
        this.testOrMask();
        this.testUndo();
        this.testRedo();
        this.testClear();

        if (this.passedAllCases) {
            this.printer += "<br><br>&emsp; &emsp; &emsp; &emsp; &emsp; CONGRATULATIONS! You passed all the test cases! =)"
        }
        else {
            this.printer += "<br><br>&emsp; &emsp; &emsp; &emsp; &emsp; Sorry, you failed " + this.numFailedCases + " cases. =("
        }
    }

    /**
     * This JUnit test is for testing the adding of transactions.
     */
    testAdd() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        var tps = new jsTPS();
        var num = new Num();


        // CHECK DEFAULT NUM VALUE == 0
        this.printer += "TEST ADD CASES:<br><br><br> Creating a new Num object ...  <br><br>&emsp; &emsp;Checking if the num object is equal to 0: ";
        this.checkEquality(num.getNum(), 0);

        // CHECK NUM == 5
        this.printer += "Changing the value of num to 5 ... <br><br>&emsp; &emsp;Checking if the num object is equal to 5: ";
        tps.addTransaction(new AddToNum_Transaction(num, 5));


        // ADD 5 TRANSACTION
        this.checkEquality(num.getNum(), 5);

        // CHECKING TPS SIZE == 1
        this.printer += "&emsp; &emsp;Checking if the tps' size is 1: ";
        this.checkEquality(tps.getSize(), 1);

        // CHECK REDO SIZE == 0
        this.printer += "&emsp; &emsp;Checking if the tps.getRedoSize() is 0: ";
        this.checkEquality(tps.getRedoSize(), 0);

        // CHECK UNDO SIZE == 0
        this.printer += "&emsp; &emsp;Checking if the tps.getUndoSize() is 1: ";
        this.checkEquality(tps.getUndoSize(), 1);


        // ADD 10 TRANSACTION
        this.printer += "Adding 10 to transactions ... <br><br>&emsp; &emsp;Checking if the num object is equal to 15: ";
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        this.checkEquality(num.getNum(), 15);

        // CHECKING TPS SIZE == 2
        this.printer += "&emsp; &emsp;Checking if the tps' size is 2: ";
        this.checkEquality(tps.getSize(), 2);

        // CHECK REDO SIZE == 0
        this.printer += "&emsp; &emsp;Checking if the tps.getRedoSize() is 0: ";
        this.checkEquality(tps.getRedoSize(), 0);

        // CHECK UNDO SIZE == 2
        this.printer += "&emsp; &emsp;Checking if the tps.getUndoSize() is 2: ";
        this.checkEquality(tps.getUndoSize(), 2);


        // ADD 20 TRANSACTION
        this.printer += "Adding 20 to num ... <br><br>&emsp; &emsp;Checking if the num object is equal to 35: ";
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        this.checkEquality(num.getNum(), 35);

        // CHECKING TPS SIZE == 3
        this.printer += "&emsp; &emsp;Checking if the tps' size is 3: ";
        this.checkEquality(tps.getSize(), 3);

        // CHECK REDO SIZE == 0
        this.printer += "&emsp; &emsp;Checking if the tps.getRedoSize() is 0: ";
        this.checkEquality(tps.getRedoSize(), 0);

        // CHECK UNDO SIZE == 3
        this.printer += "&emsp; &emsp;Checking if the tps.getUndoSize() is 3: ";
        this.checkEquality(tps.getUndoSize(), 3);
    }

    /**
     * This JUnit test is for testing the Bitwise And of transactions.
     */
    testAndMask() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();

        // CHECK DEFAULT NUM VALUE == 0
        this.printer += "TEST ANDMASK CASES:<br><br><br> Creating a new num ...  <br><br>&emsp; &emsp;Checking if the num object is equal to 0: ";
        this.checkEquality(num.getNum(), 0);


        // ADD 12 TRANSACTION
        this.printer += "Adding 12 to transactions ...<br><br>";
        tps.addTransaction(new AddToNum_Transaction(num, 12));

        // AND MASKING 12 WITH 4
        this.printer += "Adding Mask Taransaction between 12 and 4 ...<br><br>";
        tps.addTransaction(new AndMask_Transaction(num, num.getNum(), 4));
        this.printer += "&emsp; &emsp;Checking if the num is now equal to 4: ";
        this.checkEquality(num.getNum(), 4);

        // CHECKING TPS SIZE == 2
        this.printer += "&emsp; &emsp;Checking if the tps' size is 2: ";
        this.checkEquality(tps.getSize(), 2);


        // UNDO TRANSACTION
        this.printer += "Undoing the tps ...<br><br>";
        tps.undoTransaction();

        //CHECK SIZE == 3
        this.printer += "&emsp; &emsp;Checking if the tps' size is 1: ";
        this.checkEquality(tps.getNumTrasactionsToUndo(), 1);

        // CHECK NUM == 12
        this.printer += "&emsp; &emsp;Checking if the num is now equal to 12: ";
        this.checkEquality(num.getNum(), 12);

        //CHECK SIZE == 2
        this.printer += "&emsp; &emsp;Checking if the tps' size is 1: ";
        this.checkEquality(tps.getNumTrasactionsToUndo(), 1);

        //CHECK tps.getRedoSize() == 1
        this.printer += "&emsp; &emsp;Checking if tps.getRedoSize() is 1: ";
        this.checkEquality(tps.getRedoSize(), 1);

        //CHECK tps.getUndoSize() == 1
        this.printer += "&emsp; &emsp;Checking if tps.getUndoSize() is 1: ";
        this.checkEquality(tps.getUndoSize(), 1);
    }

    /**
     * This JUnit test is for testing the Bitwise Or of transactions.
     */
    testOrMask() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();

        // CHECK DEFAULT NUM VALUE == 0
        this.printer += "TEST ORMASK CASES:<br><br><br>Creating a new num ...  <br><br>&emsp; &emsp;Checking if the num object is equal to 0: ";
        this.checkEquality(num.getNum(), 0);


        // ADD 12 TRANSACTION
        this.printer += "Adding 12 to transactions ...<br><br>";
        tps.addTransaction(new AddToNum_Transaction(num, 12));

        // OR MASKING 12 WITH 4
        this.printer += "Adding Mask Taransaction between 12 and 4 ...<br><br>";
        tps.addTransaction(new OrMask_Transaction(num, num.getNum(), 4));
        this.printer += "&emsp; &emsp;Checking if the num is now equal to 12: ";
        this.checkEquality(num.getNum(), 12);

        // CHECKING TPS SIZE == 2
        this.printer += "&emsp; &emsp;Checking if the tps' size is 2: ";
        this.checkEquality(tps.getSize(), 2);


        // UNDO TRANSACTION
        this.printer += "Undoing the tps ...<br><br>";
        tps.undoTransaction();

        //CHECK SIZE == 3
        this.printer += "&emsp; &emsp;Checking if the tps' size is 1: ";
        this.checkEquality(tps.getNumTrasactionsToUndo(), 1);

        // CHECK NUM == 12
        this.printer += "&emsp; &emsp;Checking if the num is now equal to 12: ";
        this.checkEquality(num.getNum(), 12);

        //CHECK SIZE == 2
        this.printer += "&emsp; &emsp;Checking if the tps' size is 1: ";
        this.checkEquality(tps.getNumTrasactionsToUndo(), 1);

        //CHECK tps.getRedoSize() == 1
        this.printer += "&emsp; &emsp;Checking if tps.getRedoSize() is 1: ";
        this.checkEquality(tps.getRedoSize(), 1);

        //CHECK tps.getUndoSize() == 1
        this.printer += "&emsp; &emsp;Checking if tps.getUndoSize() is 1: ";
        this.checkEquality(tps.getUndoSize(), 1);
    }

    /**
     * This JUnit test is for testing the undoing of transactions.
     */
    testUndo() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();

        // CHECK DEFAULT NUM VALUE == 0
        this.printer += "TEST UNDO CASES:<br><br><br> Creating a new Num object ...  <br><br>&emsp; &emsp;Checking if the num object is equal to 0: ";
        this.checkEquality(num.getNum(), 0);

        // CHECK THAT TPS HAS TRANSACTION TO UNDO === FALSE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToUndo() === false: ";
        this.checkEquality(tps.hasTransactionToUndo(), false);

        // CHECK THAT TPS HAS TRANSACTION TO REDO === FALSE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToRedo() === false: ";
        this.checkEquality(tps.hasTransactionToRedo(), false);


        // ADD 3 TRANSACTIONS (5, 10, and 15)
        this.printer += "Adding 3 Transactions (5, 10, and 15):<br><br>";
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));

        // CHECK THAT TPS HAS TRANSACTION TO UNDO === TRUE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToUndo() === true: ";
        this.checkEquality(tps.hasTransactionToUndo(), true);

        // CHECK THAT TPS HAS TRANSACTION TO REDO === FALSE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToRedo() === false: ";
        this.checkEquality(tps.hasTransactionToRedo(), false);

        // CHECK DEFAULT NUM VALUE == 35
        this.printer += "&emsp; &emsp;Checking if the num object is equal to 35: ";
        this.checkEquality(num.getNum(), 35);

        // CHECK THAT TPS HAS TRANSACTION TO UNDO === TRUE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToUndo() === true: ";
        this.checkEquality(tps.hasTransactionToUndo(), true);

        //CHECK SIZE == 3
        this.printer += "&emsp; &emsp;Checking if the tps' size is 3: ";
        this.checkEquality(tps.getSize(), 3);

        //CHECK tps.getRedoSize() == 0
        this.printer += "&emsp; &emsp;Checking if tps.getRedoSize() is 0: ";
        this.checkEquality(tps.getRedoSize(), 0);

        //CHECK tps.getUndoSize() == 3
        this.printer += "&emsp; &emsp;Checking if tps.getUndoSize() is 3: ";
        this.checkEquality(tps.getUndoSize(), 3);


        // UNDO A TRANSACTION
        this.printer += "Undoing the tps ...<br><br>";
        tps.undoTransaction();

        // CHECK THAT TPS HAS TRANSACTION TO UNDO === TRUE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToUndo() === true: ";
        this.checkEquality(tps.hasTransactionToUndo(), true);

        // CHECK THAT TPS HAS TRANSACTION TO REDO === TRUE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToRedo() === true: ";
        this.checkEquality(tps.hasTransactionToRedo(), true);

        // CHECK NUM == 15
        this.printer += "&emsp; &emsp;Checking if the num is now equal to 15: ";
        this.checkEquality(num.getNum(), 15);

        //CHECK SIZE == 3
        this.printer += "&emsp; &emsp;Checking if the tps' size is 3: ";
        this.checkEquality(tps.getSize(), 3);

        //CHECK tps.getRedoSize() == 1
        this.printer += "&emsp; &emsp;Checking if tps.getRedoSize() is 1: ";
        this.checkEquality(tps.getRedoSize(), 1);

        //CHECK tps.getUndoSize() == 2
        this.printer += "&emsp; &emsp;Checking if tps.getUndoSize() is 2: ";
        this.checkEquality(tps.getUndoSize(), 2);


        // UNDO ANOTHER TRANSACTION
        this.printer += "Undoing the tps ...<br><br>";
        tps.undoTransaction();

        // CHECK THAT TPS HAS TRANSACTION TO UNDO === TRUE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToUndo() === true: ";
        this.checkEquality(tps.hasTransactionToUndo(), true);

        // CHECK THAT TPS HAS TRANSACTION TO REDO === TRUE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToRedo() === true: ";
        this.checkEquality(tps.hasTransactionToRedo(), true);

        // CHECK NUM == 5
        this.printer += "&emsp; &emsp;Checking if the num is now equal to 5: ";
        this.checkEquality(num.getNum(), 5);

        //CHECK SIZE == 3
        this.printer += "&emsp; &emsp;Checking if the tps' size is 3: ";
        this.checkEquality(tps.getSize(), 3);

        //CHECK tps.getRedoSize() == 2
        this.printer += "&emsp; &emsp;Checking if tps.getRedoSize() is 2: ";
        this.checkEquality(tps.getRedoSize(), 2);

        //CHECK tps.getUndoSize() == 1
        this.printer += "&emsp; &emsp;Checking if tps.getUndoSize() is 1: ";
        this.checkEquality(tps.getUndoSize(), 1);


        // AND ANOTHER TRANSACTION
        this.printer += "Undoing the tps again ...<br><br>";
        tps.undoTransaction();

        // CHECK THAT TPS HAS TRANSACTION TO UNDO === FALSE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToUndo() === false: ";
        this.checkEquality(tps.hasTransactionToUndo(), false);

        // CHECK THAT TPS HAS TRANSACTION TO REDO === TRUE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToRedo() === true: ";
        this.checkEquality(tps.hasTransactionToRedo(), true);

        // CHECK NUM == 0
        this.printer += "&emsp; &emsp;Checking if the num is now equal to 0: ";
        this.checkEquality(num.getNum(), 0);

        //CHECK SIZE == 3
        this.printer += "&emsp; &emsp;Checking if the tps' size is 3: ";
        this.checkEquality(tps.getSize(), 3);

        //CHECK tps.getRedoSize() == 3
        this.printer += "&emsp; &emsp;Checking if tps.getRedoSize() is 3: ";
        this.checkEquality(tps.getRedoSize(), 3);

        //CHECK tps.getUndoSize() == 0
        this.printer += "&emsp; &emsp;Checking if tps.getUndoSize() is 0: ";
        this.checkEquality(tps.getUndoSize(), 0);


        // WE HAVE NO MORE TO UNDO SO THIS SHOULD DO NOTHING
        this.printer += "Undoing the tps again ...<br>(This should not change anything since no more to undo) <br><br>";
        tps.undoTransaction();

        // CHECK THAT TPS HAS TRANSACTION TO UNDO === FALSE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToUndo() === false: ";
        this.checkEquality(tps.hasTransactionToUndo(), false);

        // CHECK THAT TPS HAS TRANSACTION TO REDO === TRUE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToRedo() === true: ";
        this.checkEquality(tps.hasTransactionToRedo(), true);

        // CHECK NUM == 0
        this.printer += "&emsp; &emsp;Checking if the num is now equal to 0: ";
        this.checkEquality(num.getNum(), 0);

        //CHECK SIZE == 3
        this.printer += "&emsp; &emsp;Checking if the tps' size is 3: ";
        this.checkEquality(tps.getSize(), 3);

        //CHECK tps.getRedoSize() == 3
        this.printer += "&emsp; &emsp;Checking if tps.getRedoSize() is 3: ";
        this.checkEquality(tps.getRedoSize(), 3);

        //CHECK tps.getUndoSize() == 0
        this.printer += "&emsp; &emsp;Checking if tps.getUndoSize() is 0: ";
        this.checkEquality(tps.getUndoSize(), 0);
    }

    /**
     * This JUnit test is for testing the redoing of transactions.
     */
    testRedo() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();

        // CHECK DEFAULT NUM VALUE == 0
        this.printer += "TEST REDO CASES:<br><br><br> Creating a new Num object ...  <br><br>&emsp; &emsp;Checking if the num object is equal to 0: ";
        this.checkEquality(num.getNum(), 0);

        // ADD 3 TRANSACTIONS (5, 10, and 15)
        this.printer += "Adding 3 Transactions (5, 10, and 15):<br><br>";
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));

        // CHECK THAT TPS HAS TRANSACTION TO UNDO === TRUE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToUndo() === true: ";
        this.checkEquality(tps.hasTransactionToUndo(), true);

        // CHECK THAT TPS HAS TRANSACTION TO REDO === FALSE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToRedo() === false: ";
        this.checkEquality(tps.hasTransactionToRedo(), false);

        // CHECK DEFAULT NUM VALUE == 35
        this.printer += "&emsp; &emsp;Checking if the num object is equal to 35: ";
        this.checkEquality(num.getNum(), 35);

        //CHECK SIZE == 3
        this.printer += "&emsp; &emsp;Checking if the tps' size is 3: ";
        this.checkEquality(tps.getSize(), 3);

        //CHECK tps.getRedoSize() == 0
        this.printer += "&emsp; &emsp;Checking if tps.getRedoSize() is 0: ";
        this.checkEquality(tps.getRedoSize(), 0);

        //CHECK tps.getUndoSize() == 3
        this.printer += "&emsp; &emsp;Checking if tps.getUndoSize() is 3: ";
        this.checkEquality(tps.getUndoSize(), 3);


        // UNDO A TRANSACTION AND THEN REDO IT
        this.printer += "Undoing the tps and redoing it...<br><br>";
        tps.undoTransaction();
        tps.doTransaction();

        // CHECK THAT TPS HAS TRANSACTION TO UNDO === TRUE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToUndo() === true: ";
        this.checkEquality(tps.hasTransactionToUndo(), true);

        // CHECK THAT TPS HAS TRANSACTION TO REDO === FALSE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToRedo() === false: ";
        this.checkEquality(tps.hasTransactionToRedo(), false);

        // CHECK NUM == 35
        this.printer += "&emsp; &emsp;Checking if the num is now equal to 35: ";
        this.checkEquality(num.getNum(), 35);

        //CHECK SIZE == 3
        this.printer += "&emsp; &emsp;Checking if the tps' size is 3: ";
        this.checkEquality(tps.getSize(), 3);

        //CHECK tps.getRedoSize() == 1
        this.printer += "&emsp; &emsp;Checking if tps.getRedoSize() is 1: ";
        this.checkEquality(tps.getRedoSize(), 0);

        //CHECK tps.getUndoSize() == 2
        this.printer += "&emsp; &emsp;Checking if tps.getUndoSize() is 2: ";
        this.checkEquality(tps.getUndoSize(), 3);


        // UNDO TWO TRANSACTIONS AND THEN REDO THEM
        this.printer += "Undoing the tps twice and redoing the 2 transactions...<br><br>";
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();

        // CHECK THAT TPS HAS TRANSACTION TO UNDO === TRUE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToUndo() === true: ";
        this.checkEquality(tps.hasTransactionToUndo(), true);

        // CHECK THAT TPS HAS TRANSACTION TO REDO === FALSE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToRedo() === false: ";
        this.checkEquality(tps.hasTransactionToRedo(), false);

        // CHECK NUM == 35
        this.printer += "&emsp; &emsp;Checking if the num is now equal to 35: ";
        this.checkEquality(num.getNum(), 35);

        //CHECK SIZE == 3
        this.printer += "&emsp; &emsp;Checking if the tps' size is 3: ";
        this.checkEquality(tps.getSize(), 3);

        //CHECK tps.getRedoSize() == 1
        this.printer += "&emsp; &emsp;Checking if tps.getRedoSize() is 1: ";
        this.checkEquality(tps.getRedoSize(), 0);

        //CHECK tps.getUndoSize() == 2
        this.printer += "&emsp; &emsp;Checking if tps.getUndoSize() is 2: ";
        this.checkEquality(tps.getUndoSize(), 3);


        // UNDO THREE TRANSACTIONS AND THEN REDO THEM
        this.printer += "Undoing the tps thrice and redoing the 3 transactions...<br><br>";
        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();

        // CHECK THAT TPS HAS TRANSACTION TO UNDO === TRUE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToUndo() === true: ";
        this.checkEquality(tps.hasTransactionToUndo(), true);

        // CHECK THAT TPS HAS TRANSACTION TO REDO === FALSE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToRedo() === false: ";
        this.checkEquality(tps.hasTransactionToRedo(), false);

        // CHECK NUM == 35
        this.printer += "&emsp; &emsp;Checking if the num is now equal to 35: ";
        this.checkEquality(num.getNum(), 35);

        //CHECK SIZE == 3
        this.printer += "&emsp; &emsp;Checking if the tps' size is 3: ";
        this.checkEquality(tps.getSize(), 3);

        //CHECK tps.getRedoSize() == 1
        this.printer += "&emsp; &emsp;Checking if tps.getRedoSize() is 1: ";
        this.checkEquality(tps.getRedoSize(), 0);

        //CHECK tps.getUndoSize() == 2
        this.printer += "&emsp; &emsp;Checking if tps.getUndoSize() is 2: ";
        this.checkEquality(tps.getUndoSize(), 3);


        // UNDO THREE TRANSACTIONS AND REDO TWO
        this.printer += "Undoing the tps thrice and redoing the last 2 transactions...<br><br>";
        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();

        // CHECK THAT TPS HAS TRANSACTION TO UNDO === TRUE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToUndo() === true: ";
        this.checkEquality(tps.hasTransactionToUndo(), true);

        // CHECK THAT TPS HAS TRANSACTION TO REDO === TRUE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToRedo() === true: ";
        this.checkEquality(tps.hasTransactionToRedo(), true);

        // CHECK NUM == 35
        this.printer += "&emsp; &emsp;Checking if the num is now equal to 35: ";
        this.checkEquality(num.getNum(), 15);

        //CHECK SIZE == 3
        this.printer += "&emsp; &emsp;Checking if the tps' size is 3: ";
        this.checkEquality(tps.getSize(), 3);

        //CHECK tps.getRedoSize() == 1
        this.printer += "&emsp; &emsp;Checking if tps.getRedoSize() is 1: ";
        this.checkEquality(tps.getRedoSize(), 1);

        //CHECK tps.getUndoSize() == 2
        this.printer += "&emsp; &emsp;Checking if tps.getUndoSize() is 2: ";
        this.checkEquality(tps.getUndoSize(), 2);


        // UNDO ALL THREE TRANSACTIONS AND REDO FOUR, WHICH
        // SHOULD NOT PRODUCE AN ERROR BUT THE LAST
        // REDO SHOULD DO NOTHING
        this.printer += "Undoing the tps thrice and redoing the last 2 transactions...<br><br>";
        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();

        // CHECK THAT TPS HAS TRANSACTION TO UNDO === TRUE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToUndo() === true: ";
        this.checkEquality(tps.hasTransactionToUndo(), true);

        // CHECK THAT TPS HAS TRANSACTION TO REDO === FALSE
        this.printer += "&emsp; &emsp;Checking if tps.hasTransactionToRedo() === false: ";
        this.checkEquality(tps.hasTransactionToRedo(), false);

        // CHECK NUM == 35
        this.printer += "&emsp; &emsp;Checking if the num is now equal to 35: ";
        this.checkEquality(num.getNum(), 35);

        //CHECK SIZE == 3
        this.printer += "&emsp; &emsp;Checking if the tps' size is 3: ";
        this.checkEquality(tps.getSize(), 3);

        //CHECK tps.getRedoSize() == 1
        this.printer += "&emsp; &emsp;Checking if tps.getRedoSize() is 1: ";
        this.checkEquality(tps.getRedoSize(), 0);

        //CHECK tps.getUndoSize() == 2
        this.printer += "&emsp; &emsp;Checking if tps.getUndoSize() is 2: ";
        this.checkEquality(tps.getUndoSize(), 3);
    }

    /**
     * This JUnit test is for testing clearing of transactions.
     */
    testClear() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();

        // CHECK DEFAULT NUM VALUE == 0
        this.printer += "TEST CLEAR CASES:<br><br><br> Creating a new Num object ...  <br><br>&emsp; &emsp;Checking if the num object is equal to 0: ";
        this.checkEquality(num.getNum(), 0);


        // ADD 3 TRANSACTIONS (5, 10, and 15)
        this.printer += "Adding 3 Transactions (5, 10, and 15):<br><br>";
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));

        // CHECK DEFAULT NUM VALUE == 35
        this.printer += "&emsp; &emsp;Checking if the num object is equal to 35: ";
        this.checkEquality(num.getNum(), 35);

        //CHECK SIZE == 3
        this.printer += "&emsp; &emsp;Checking if the tps' size is 3: ";
        this.checkEquality(tps.getSize(), 3);

        //CHECK tps.getRedoSize() == 0
        this.printer += "&emsp; &emsp;Checking if tps.getRedoSize() is 0: ";
        this.checkEquality(tps.getRedoSize(), 0);

        //CHECK tps.getUndoSize() == 3
        this.printer += "&emsp; &emsp;Checking if tps.getUndoSize() is 3: ";
        this.checkEquality(tps.getUndoSize(), 3);


        // CLEAR ALL THE TRANSACTIONS
        this.printer += "Clearing jsTPS:<br><br>";
        tps.clearAllTransactions();

        // CHECK DEFAULT NUM VALUE == 35
        this.printer += "&emsp; &emsp;Checking if the num object is equal to 35: ";
        this.checkEquality(num.getNum(), 35);

        //CHECK SIZE == 3
        this.printer += "&emsp; &emsp;Checking if the tps' size is 3: ";
        this.checkEquality(tps.getSize(), 0);

        //CHECK tps.getRedoSize() == 0
        this.printer += "&emsp; &emsp;Checking if tps.getRedoSize() is 0: ";
        this.checkEquality(tps.getRedoSize(), 0);

        //CHECK tps.getUndoSize() == 3
        this.printer += "&emsp; &emsp;Checking if tps.getUndoSize() is 3: ";
        this.checkEquality(tps.getUndoSize(), 0);


        // ADD 3 TRANSACTIONS (5, 10, and 15)
        this.printer += "Adding 3 Transactions (5, 10, and 15):<br><br>";
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));

        // CHECK DEFAULT NUM VALUE == 70
        this.printer += "&emsp; &emsp;Checking if the num object is equal to 70: ";
        this.checkEquality(num.getNum(), 70);

        //CHECK SIZE == 3
        this.printer += "&emsp; &emsp;Checking if the tps' size is 3: ";
        this.checkEquality(tps.getSize(), 3);

        //CHECK tps.getRedoSize() == 0
        this.printer += "&emsp; &emsp;Checking if tps.getRedoSize() is 0: ";
        this.checkEquality(tps.getRedoSize(), 0);

        //CHECK tps.getUndoSize() == 3
        this.printer += "&emsp; &emsp;Checking if tps.getUndoSize() is 3: ";
        this.checkEquality(tps.getUndoSize(), 3);


        // CLEAR THEM ALL OUT AGAIN
        this.printer += "Clearing jsTPS:<br><br>";
        tps.clearAllTransactions();

        // CHECK DEFAULT NUM VALUE == 70
        this.printer += "&emsp; &emsp;Checking if the num object is equal to 70: ";
        this.checkEquality(num.getNum(), 70);

        //CHECK SIZE == 3
        this.printer += "&emsp; &emsp;Checking if the tps' size is 3: ";
        this.checkEquality(tps.getSize(), 0);

        //CHECK tps.getRedoSize() == 0
        this.printer += "&emsp; &emsp;Checking if tps.getRedoSize() is 0: ";
        this.checkEquality(tps.getRedoSize(), 0);

        //CHECK tps.getUndoSize() == 3
        this.printer += "&emsp; &emsp;Checking if tps.getUndoSize() is 3: ";
        this.checkEquality(tps.getUndoSize(), 0);


        // ADD 3 TRANSACTIONS (5, 10, and 15)
        this.printer += "Adding 3 Transactions (5, 10, and 15):<br><br>";
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));

        // CHECK DEFAULT NUM VALUE == 105
        this.printer += "&emsp; &emsp;Checking if the num object is equal to 105: ";
        this.checkEquality(num.getNum(), 105);

        //CHECK SIZE == 3
        this.printer += "&emsp; &emsp;Checking if the tps' size is 3: ";
        this.checkEquality(tps.getSize(), 3);

        //CHECK tps.getRedoSize() == 0
        this.printer += "&emsp; &emsp;Checking if tps.getRedoSize() is 0: ";
        this.checkEquality(tps.getRedoSize(), 0);

        //CHECK tps.getUndoSize() == 3
        this.printer += "&emsp; &emsp;Checking if tps.getUndoSize() is 3: ";
        this.checkEquality(tps.getUndoSize(), 3);
    }

    /**
     * Checks equality between two values
     * @param {Integer/Boolean} value1 
     * @param {Integer/Boolean} value2 
     */
    checkEquality(value1, value2) {
        if (value1 === value2) {
            this.printer += "Condition Passed <br><br><br>";
        }
        else {
            this.passedAllCases = false;
            this.numFailedCases++;
            this.printer += "Condition Failed <br><br><br>";
        }
    }
}