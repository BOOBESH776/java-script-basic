
function isprime(n){

    for(let i=2;i<n;i++){
        if(n%i===0){
            return false
        }
        
    }
    
    return true
}
for(let i=2;i<=50;i++){
    if(isprime(i)){
        console.log(i);
    }
}
