class Customer{
    constructor(id, customerNumber){
        this.id = id
        this.customerNumber = customerNumber
    }
}
//prototyping
let customer = new Customer(1, 12345);
customer.name = "Murat Kurtboğan"
console.log(customer.name);

//Classa yapılan prototyping
Customer.bisey = "Bişey"
console.log(Customer.bisey);

console.log(customer.customerNumber)

class IndividualCustomer extends Customer{

    constructor(firstName, id, customerNumber){
        super(id, customerNumber)
        this.firstName = firstName
    }
}

class CorporateCustomer extends Customer{

    constructor(companyName, id, customerNumber){
        super(id,customerNumber)
        this.companyName = companyName
    }
}