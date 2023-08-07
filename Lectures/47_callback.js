    //CWH
    
    //Callback function
       function loadscript(src,Callback) {
            var script = document.createElement('script')
            script.src = src;
           script.onload =  function () {
                console.log("loaded script with SRC: " + src)
                Callback(src);
            }
            document.body.appendChild(script)

        }
        function hello(src) {
            alert("script loaded "+ src)
        }
        loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",hello) 





// Error Handling 
function loadscript(src,Callback) {
    var script = document.createElement('script')
    script.src = src;
   script.onload =  function () {
        console.log("loaded script with SRC: " + src)
        Callback(null,src);
    }
    script.onerror = function () {
        console.log("error loading script with SRC: " + src)
        Callback(new Error("src got some error"));
    }
    document.body.appendChild(script)

}
function hello(error, src) {
    if(error){
        console.log(error)
        return;
    }
    alert("script loaded "+ src)
}
loadscript("https://cdn.delijjnjnvr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",hello)