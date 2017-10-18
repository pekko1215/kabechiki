var twitter = require('twitter');
var twit = new twitter(require('token'));
twit.stream('statuses/filter', { 'track': "#slp-kbit" }, function(stream) {
    stream.on('data', function(data) {
        createNicoNico(data.text);
        console.log(data)
        return
    });
});

var len = 9;
var arr = Array(len).fill(false);

var height = 0;
function createNicoNico(text){
    var wrap = document.createElement('div');
    wrap.id = "wrap"
    var e = document.createElement("div");
    e.id = "word"
    e.innerText = text;
    var left = window.screen.width
    e.style.left = left+"pt";

    var hindex = arr.findIndex((b)=>{
        return !b;
    })

    if(hindex==-1){
        arr = arr.fill(false);
        hindex = 0;
    }

    e.style.top = (window.screen.height/len*hindex) + 'px';
    arr[hindex] = true;
    var inter = setInterval(()=>{
        left-=5;
        e.style.left = left + "pt"
        if(left<-e.clientWidth){
            clearInterval(inter);
            document.body.removeChild(wrap)
        }
    },50)
    wrap.appendChild(e);
    document.body.appendChild(wrap)

}