/**
 * This driver demonstrates simple usage of the jTPS API.
 * 
 * @author Avik Kadakia
 * @version 1.0
 */
class jsTPS_Tester {
    constructor() {
        // HERE'S OUR TRANSACTION PROCESSING SYSTEM
        this.tps = new jsTPS();

        // HERE'S THE DATA WE'RE MANIPULATING IN THIS DEMO
        this.num = new Num();

        this.printer = document.getElementById("display");

        // LOOP FLAG VARIABLE
        this.keepGoing = true;

        // THESE ARE TO HELP WITH I/O
        document.getElementById("input_button").addEventListener("click", () => this.main());
        this.printer.innerHTML += "jsTPS_Tester: <br><br>";
        document.getElementById("output").value = "";
    }

    run() {
        while (this.keepGoing) {
            this.menu();
            this.main();
        }
    }

    /**
     * This runs our demo program. Note that it presents a 
     * menu, retrieves the input, and executes the selected
     * behavior.
     * 
     * @param args Not used in this demo.
     */
    menu() {
        // DISPLAY THE CURRENT TPS
        this.printer.innerHTML += "CURRENT jsTPS: <br>";
        this.printer.innerHTML += this.tps.toString();

        // DISPLAY NUM
        this.printer.innerHTML += "<br><br> Num is " + this.num.getNum() + "<br><br>";

        // DISPLAY THE MENU
        this.printer.innerHTML += "ENTER A SELECTION<br>" +
            "1) Add a Transaction<br>" +
            "2) Undo a Transaction<br>" +
            "3) Redo a Transaction<br>" +
            "4) Clear All Transactions<br>" +
            "5) Reset Num and Transactions<br>" +
            "-<br><br>";
    }

    main() {
        // GET THE USER SELECTION

        if(!document.getElementById('output'))
        {
            window.alert('Does not exist');
        }
        else{
            console.log('exists');
        }

        let element = document.getElementById("output");

        let entry = element.value;

        // ADD AND EXECUTE A TRANSACTION
        if (entry === "1") {
            this.printer.innerHTML += "<br>Enter an amount to add: ";
            entry = input.nextLine();
            let amountToAdd = Integer.parseInt(entry);
            transaction = new AddToNum_Transaction(num, amountToAdd);
            tps.addTransaction(transaction);
        }
        // UNDO A TRANSACTION
        else if (entry === "2") {
            tps.undoTransaction();
        }
        // REDO A TRANSACTION
        else if (entry === "3") {
            tps.doTransaction();
        }
        // CLEAR ALL TRANSACTIONS
        else if (entry === "4") {
            tps.clearAllTransactions();
        }
        // CLEAR ALL TRANSACTIONS AND RESET NUM TO 0
        else if (entry === "5") {
            tps.clearAllTransactions();
            num.setNum(0);
        }
        // QUIT
        else if (entry.startsWith("Q")) {
            this.keepGoing = false;

            this.printer.innerHTML += "GOODBYE";
        }
    
        this.run();
    }
}