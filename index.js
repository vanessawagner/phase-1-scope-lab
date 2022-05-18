var customerName = 'bob'
function upperCaseCustomerName() {

    //console.log(customerName)
    customerName = customerName.toUpperCase()
    //console.log(customerName)
    return customerName
}
//upperCaseCustomerName()


function setBestCustomer() {
    bestCustomer = 'not bob'

    return bestCustomer
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
    return bestCustomer
}

const leastFavoriteCustomer = 'some value'
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'something else'
    return leastFavoriteCustomer
}