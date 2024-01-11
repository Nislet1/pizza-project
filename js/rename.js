
document.getElementById("rename-input").style.display = 'none'
document.getElementById("rename-btn").onclick = function(){
    document.getElementById("rename-input").style.display = ''
    document.getElementById("rename-btn").style.display = 'none'
    document.getElementById("rename-input").onkeyup = function(){
        document.getElementById('new-name').innerHTML = document.getElementById("rename-input").value;
    }
    document.getElementById("rename-input").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            document.getElementById("rename-input").style.display = 'none'
            document.getElementById("rename-btn").style.display = ''
        }
    });
}