
function fact(num){
    if(num == 0 || num == 1) return 1
    else return num * fact(num - 1)
}
console.log(fact(2))


function fib(num){
    if(num < 0) return "invalid num"
    else if(num == 0)return 0
    else if(num == 1 || num == 2) return 1
    else return fib(num-1) + fibonacci(num-2)
}
console.log(fib(2))
console.log(fib(3))
console.log(fib(5))

