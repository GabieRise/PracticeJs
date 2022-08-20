function palin(value) {
    var alpha = /[^A-Za-z0-9]/g;
    value = value.toLowerCase().replace(alpha, '');
    var len = value.length;
    for (var i = 0; i < len/2; i++) {
      if (value[i] != value[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   console.log(palindrome("303"));