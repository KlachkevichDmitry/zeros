module.exports = function getZerosCount(number) {
        var count=0;
        var arr=[];

        for (var x=5; x<=number; x+=5) {
            arr.push(x);}
        for (var i=0; i<arr.length; i++) {
            while (arr[i] > 1) {
                if (arr[i] % 5 == 0) {
                    count++;
                    arr[i] = arr[i] / 5;
                } else break;
            }
        }
        return count;
}
