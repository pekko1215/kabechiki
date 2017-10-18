var twitter = require('twitter');
var twit = new twitter({
    consumer_key: 'bgr4Y01Xr1qJQGPO8tixyRKlu',
    consumer_secret: 'pnGG1HXOjxLnHUuyNRGTNbe4V0X485XihSTCfa8sZuLIkUJzH5',
    access_token_key: '1965603450-aVfpOVNc7bEwz9tbEOfMvM2MiHetU6fuaREe9KZ',
    access_token_secret: 'BnkBYYtz2nGwRAOZ47n0Yo23u0bq2yDsotjrYFizfAVvh'
});
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