function FromTo(n, i){
    console.log(n)
    if(n === i){
        return;
    }
    if (n < i){
        FromTo(n + 1, i)
    }
    else{
        FromTo(n - 1,i)
    }
}
FromTo(7, 1)