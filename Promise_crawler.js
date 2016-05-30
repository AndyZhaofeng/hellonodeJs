var http=require('http')
var cheerio=require('/Users/zhaofeng/Library/nodeJsLibrary/node_modules/cheerio')
var iconv=require('/Users/zhaofeng/Library/nodeJsLibrary/node_modules/iconv-lite')
var promise=require('/Users/zhaofeng/Library/nodeJsLibrary/node_modules/promise')
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
                              paneNewsData.push(news);
                              })
                  })
    return paneNewsData;
}

function printNewsList(newsList){
    newsList.forEach(function(item){
                     console.log(item);
                     })
}

function getPageAsync(url){
    return new Promise(function(resolve,reject){
            console.log('我在爬 '+url);
               http.get(url,function(res){
                        var html=[];
                        
                        res.on('data',function(data){
                               html.push(data);
                               });
                        res.on('end',function(){
                               var decodeBody=iconv.decode(Buffer.concat(html),'gbk');
                               resolve(decodeBody);
                               })
                        }).on('error',function(e){
                              reject(e);
                              console.log('获取数据出错！');
                              })
    })
}

getPageAsync(url)
    .then(function(page){
           return filterFocusNews(page);
       }).catch(function(error){
                console.log(error);
                })
    .then(function(filterData){
            printNewsList(filterData);
          });

