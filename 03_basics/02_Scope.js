function one(){
    const username="hitesh"
    function two(){
        const website ="Youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}

// one()

if(true){
    const username="Aaditya"
    if(username==="Aaditya"){
        const website=" youtube"
        // console.log(username+website);
    }
}


//++++++++++++ hoisting concept ++++++++++++++++++++++++++++
console.log(addone(5))

function addone(num){
    return num+1
}


const addTwo=function(num){
    return num+2
}
console.log(addTwo(5))
