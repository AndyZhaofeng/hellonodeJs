var http=require('http')
var cheerio=require('/Users/zhaofeng/Library/nodeJsLibrary/node_modules/cheerio')
var iconv=require('/Users/zhaofeng/Library/nodeJsLibrary/node_modules/iconv-lite')
var url='http://news.baidu.com/'

function filterFocusNews(html){
    var $ = cheerio.load(html);
    var paneNews = $('.mod-tab-content .mod-tab-pane');
    var paneNewsData=[];
    paneNews.each(function(item){
                  var ulist=$(this);
                  var titles=ulist.find('ul').children('li');
                  titles.each(function(subItem){
                              var news=$(this).find('a').text();
//                              var str=iconv.decode(new Buffer(news,'binary'),'utf-16');
                              console.log(news);
//                              var newsTitle=news.text();
//                              paneNewsData.push(newsTitle);
                             })
                  })
    return paneNewsData;
}

function printNewsList(newsList){
    newsList.forEach(function(item){
                     console.log(item+'\n');
                     })
}
http.get(url,function(res){
         var html=[];
         
         res.on('data',function(data){
                html.push(data);
                });
         res.on('end',function(){
                var decodeBody=iconv.decode(Buffer.concat(html),'gbk');
                var newsList=filterFocusNews(decodeBody);
//                console.log(decodeBody);
//                printNewsList(newsList);
                })
         }).on('error',function(){
               console.log('获取数据出错！');
               })



