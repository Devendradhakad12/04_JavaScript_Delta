     //while loop - loops a block based on a specific condition
    //do-while loo - while loos variant which runs atleast one

    //1.while loop
    let n = prompt("Enter the value of n")
    n = Number.parseInt(n)
    let i = 0
    while(i<n){
        console.log(i)
        i++;
    }


    //2.do-while loop
    let m = prompt("Enter the value of n")
    m = Number.parseInt(n)
    let j = 0
    do{
        console.log(j)
        j++;
    }while(j>m);
