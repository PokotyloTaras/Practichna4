function suma(num){
    num = Math.abs(num);

    if(num < 10){
        return num
    }
    return (num % 10) + suma(Math.floor(num / 10))
}

console.log(suma(223125))