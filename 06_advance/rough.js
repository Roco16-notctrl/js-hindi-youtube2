const xhr=new XMLHttpRequest()
xhr.open("GET","https://api.github.com/users/Roco16-notctrl",true)

//Set a User-Agent header (required for some API requests)
xhr.setRequestHeader("User-Agent","Mozilla/5.0");
xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status===200){
           console.log("Response:",xhr.responseText)
    }
};

xhr.onerror=()=>{
    console.error("Request failed")
}
xhr.send()