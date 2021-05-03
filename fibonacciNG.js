
function Fibonacci(num){
    let num_1=0;
    let num_2=1;
    let n_num;
    for (let i = 0;i<num;i++){
        n_num = num_1+num_2;
        num_1=num_2;
        num_2=n_num;
    }
    return(num_1)
}



exports.Fibonacci = Fibonacci;