/**
 * This driver demonstrates simple usage of the jTPS API.
 * 
 * @author Avik Kadakia
 * @version 1.0
 */
class jsTPS_Tester {
    constructor()
    {    
        // HERE'S OUR TRANSACTION PROCESSING SYSTEM
        this.tps = new jsTPS();

        // HERE'S THE DATA WE'RE MANIPULATING IN THIS DEMO
        this.num = new Num();

        // THESE ARE TO HELP WITH I/O
        document.getElementById("input_button").addEventListener("click", jsTPS_Tester.prototype.main());
        document.getElementById("display").innerHTML += "jsTPS_Tester:";
    }

    /**
     * This runs our demo program. Note that it presents a 
     * menu, retrieves the input, and executes the selected
     * behavior.
     * 
     * @param args Not used in this demo.
     */
    main() {
        // LOOP FLAG VARIABLE
        let keepGoing = true;
        while (keepGoing) {
            // DISPLAY THE CURRENT TPS
            document.getElementById("display").innerHTML += "CURRENT jsTPS: <br>";
            document.getElementById("display").innerHTML += this.tps;
            document.getElementById("display").innerHTML += "<br><br>"
            
            // DISPLAY NUM
            document.getElementById("display").innerHTML += "num is " + this.num.getNum();
            document.getElementById("display").innerHTML += "<br><br>";
            
            // DISPLAY THE MENU
            document.getElementById("display").innerHTML += "ENTER A SELECTION<br>" + 
                                                            "1) Add a Transaction<br>" + 
                                                            "2) Undo a Transaction<br>" +
                                                            "3) Redo a Transaction<br>" +
                                                            "4) Clear All Transactions<br>" +
                                                            "5) Reset Num and Transactions<br>" +
                                                            "-<br><br>";

            // GET THE USER SELECTION
            entry = document.getElementById("output").textContent;
            
            // ADD AND EXECUTE A TRANSACTION
            if (entry.startsWith("1")) {
                System.out.print("\nEnter an amount to add: ");
                entry = input.nextLine();
                let amountToAdd = Integer.parseInt(entry);
                transaction = new AddToNum_Transaction(num, amountToAdd);
                tps.addTransaction(transaction);
            }            
            // UNDO A TRANSACTION
            else if (entry.startsWith("2")) {
                tps.undoTransaction();
            }
            // REDO A TRANSACTION
            else if (entry.startsWith("3")) {
                tps.doTransaction();
            }
            // CLEAR ALL TRANSACTIONS
            else if (entry.startsWith("4")) {
                tps.clearAllTransactions();
            }
            // CLEAR ALL TRANSACTIONS AND RESET NUM TO 0
            else if (entry.startsWith("5")) {
                tps.clearAllTransactions();
                num.setNum(0);
            }
            // QUIT
            else if (entry.startsWith("Q")) {
                keepGoing = false;
            }
        }
        System.document.getElementById("display").innerHTML += "GOODBYE";
    }
}