export default {
    xhrGet(req) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // console.log(this.responseText);
                // console.log(req);
                req.res = this.responseText
                req.naz = 'just me'
            }
            return req;
        };
        xhttp.open("GET", req.url, true);
        xhttp.send();
    },



    dxhrGet(url) {
        var res = 'test from xhr';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                // document.getElementById("demo").innerHTML =
                // this.responseText;
                // req.res = this.responseText;
                // res = xhttp.responseText
            }
            return res;
        };
        // return url;
        xhttp.open("GET", url, true);
        xhttp.send();
    },
    xxhrGet(g) {
        var res = '';
        res = 'testing'
        // console.log(res);
        
        return res;
    }

}