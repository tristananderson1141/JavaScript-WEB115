function calculateChange() {

    var cents = document.getElementById("cents").value;
    
    var quarters;
    var dimes;
    var nickels;
    var pennies;

    if (cents >= 0 && cents < 100) {

        quarters = Math.floor(cents / 25);
        cents = cents % 25;

        dimes = Math.floor(cents / 10);
        cents = cents % 10;

        nickels = Math.floor(cents / 5);
        cents = cents % 5;

        pennies = cents;

        document.getElementById("quarters").value = `${quarters}`;
        document.getElementById("dimes").value = `${dimes}`;
        document.getElementById("nickels").value = `${nickels}`;
        document.getElementById("pennies").value = `${pennies}`;
    }
    else {
        alert("Out of range");
    }
}

document.getElementById("calculate").addEventListener("click", calculateChange);
