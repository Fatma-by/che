function palindrome(str) {

    let e = str[str.length-1];
    
    let s = str[0];
    
    if (s!==e) {
        return false
       }
       if (str.length==1){
        return true;
       }

       else if(s===e){
        return palindrome(str.slice(1, -1));
    }

}
console.log(palindrome("radara"));
