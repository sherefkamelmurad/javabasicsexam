//JavaScript doesn’t support functions that return multiple values

function values() {

    var value1 = "sheref"
    var value2  = "murad"
    ;
    return  { value1,value2} 
} 
let names = values();

let firstName = names.firstName,
    lastName  = names.lastName;