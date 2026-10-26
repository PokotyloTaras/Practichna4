function FromTo(n){
    // let i = 0
    if (n === 0){
        return n
    } else{
        // console.log(i + n)
        FromTo(n - 1)
        console.log(n)
    }
}
FromTo(17)