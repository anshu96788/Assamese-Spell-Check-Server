const express = require('express')
const port = 3000
var fs = require('fs');
const cors = require('cors'); 
var path = require('path');
const app = express();app.use(cors());
const bodyParser = require('body-parser');
// const ms = require('mediaserver');
var temp="";
var dem=["ক’ত","কেতিয়া","কেনে","কেনে","নাই","নাম","আটাই","সকলো","অলপ","আন","মই","এক","দুই","তিনি","আজি","চাৰি","পাঁচ","ডাঠ","ডাঙৰ","বহল","চুটি","চাপৰ","ঠেক","বহল","তোমালোক","আপোনালোক","সিহঁত",
"এই","কোন", "ইয়াত","আপুনি","খেলিব","আমি","ইহঁত","যাব","তই","তুমি","কি","সি","দীঘল","ৰহিম","ল’ৰা-ছোৱালী","মাছ","দিব","দেউতা","চৰাই","গৈছিলো","ওকণি" ,"আজি","সাপ","ভৰি","ঠেং","ভাল","পুৰুষ",  "মহিলা","দেউতা","বেয়া","তহঁত",
"আৰক্ষী","বৰষুণ","প্ৰধানজনৰ"  ];

/*fs.readFile('assameseword.txt', 'ascii', function(err, contents) {
	dem=contents.toString().split("\n");
	dem.sort;
	console.log(dem)
});*/
console.log(dem)
app.post('/GetError', bodyParser.json(), (req, res) => {
var aa=[];
temp=req.body.title;
tem= temp.split(" ");

for(i=0;i<tem.length;i++)
{
	 n = dem.includes(tem[i]);
	if(n==true)
	{
aa.push(1);
	}
	else
	aa.push(0);

}
//console.log(aa)
    res.send(aa);

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))