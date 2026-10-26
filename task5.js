function printingRightToLeft(num){
    num = Math.abs(num);

    if(num < 10){
        console.log(num)
        return
    }
    console.log(num % 10) //повертає остачу, тобто при 135 / 10 остача 5, тому в консолі буде 5
    printingRightToLeft(Math.floor(num / 10))


}
printingRightToLeft(525353)