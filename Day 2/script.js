let str = 'Hello';
str = 'Madam%$'

function isPalindrome(text){
    let cleanedstr = text.replace(/[^a-zA-Z0-9]/g , '').toLowerCase();

    let reversedstr = cleanedstr.split('').reverse().join('');

    return cleanedstr === reversedstr;

}

console.log(isPalindrome(str))