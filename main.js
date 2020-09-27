let assets = {
    debit: 0,
    credit: 0
};

let expenses = {
    debit: 0,
    credit: 0
};
let incomes = {
    debit: 0,
    credit: 0
};
let liabilities = {
    debit: 0,
    credit: 0
};
let equity = {
    debit: 0,
    credit: 0
};

// let x = parseInt(document.getElementById('amount').value);
function findValue(x) {
    if (document.getElementById("inputGroupSelect01").value === "1") {
        expenses.debit = expenses.debit + x;
        document.getElementById("amount").value = null
        return expenses.debit

    }
    //to decrease the value of expense.
    else if (document.getElementById("inputGroupSelect01").value == "2") {
        expenses.credit = expenses.credit + x;
        document.getElementById("amount").value = null
        return expenses.credit
    }
    // Increase Assets
    else if (document.getElementById("inputGroupSelect01").value == "3") {
        assets.debit = assets.debit + x;
        document.getElementById("amount").value = null
        return assets.debit

    }
    // decrease asset
    else if (document.getElementById("inputGroupSelect01").value == "4") {
        assets.credit = assets.credit + x;
        document.getElementById("amount").value = null
        return assets.credit

    }
    // Increase Income
    else if (document.getElementById("inputGroupSelect01").value == "5") {
        incomes.credit = incomes.credit + x;
        document.getElementById("amount").value = null
        return income.credit
    }
    // decrease income
    else if (document.getElementById("inputGroupSelect01").value == "6") {
        incomes.debit = incomes.debit + x;
        document.getElementById("amount").value = null
        return incomes.debit

    }
    // liabilities increased
    else if (document.getElementById("inputGroupSelect01").value == "7") {
        liabilities.credit = liabilities.credit + x;
        document.getElementById("amount").value = null
        return liabilities.credit

    }
    // liabilities decreased
    else if (document.getElementById("inputGroupSelect01").value == "8") {
        liabilities.debit = liabilities.debit + x;
        document.getElementById("amount").value = null
        return liabilities.debit
    }

    // equity increased
    else if (document.getElementById("inputGroupSelect01").value == "9") {
        equity.credit = equity.credit + x;
        document.getElementById("amount").value = null
        return equity.credit
    }
    // equity decreased
    else if (document.getElementById("inputGroupSelect01").value == "10") {
        equity.debit = equity.debit + x;
        document.getElementById("amount").value = null
        return equity.debit
    } else {
        alert("Invalid Head")
    }
}

let finalValue = {
    expenses: expenses.debit - expenses.credit,
    assets: assets.debit - assets.credit,
    incomes: incomes.credit - incomes.debit,
    liabilities: liabilities.credit - liabilities.debit,
    equity: equity.credit - equity.debit
}