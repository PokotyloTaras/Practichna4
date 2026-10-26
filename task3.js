function Power(n){
    if(n === 1){
        console.log(`YES`)
        return
    } 
    if(n % 2 !== 0 || n  < 1){
        console.log(`NO`)
        return
    }
    Power(n / 2)
}

Power(256)