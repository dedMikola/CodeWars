// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


function validatePIN (pin) {
    const numbers = 1234567890
    const arr_numbers = Array.from(numbers.toString())
    if(pin.length === 4 || pin.length === 6){
        return pin.split('').filter(element => arr_numbers.includes(element)).length === pin.length
    } else {
        return false
    }
}
