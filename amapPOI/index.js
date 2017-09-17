var request = require('request');
var qs = require('querystring');

var fs=require('fs');
var path=require('path');

var file=path.resolve(__dirname, "data.json");
var inputdata=JSON.parse(fs.readFileSync(file));

    let datalength = inputdata.length;
    
    for(var i=0; i<datalength; i++){
        ( 
            function(i){
                let data = {
                    key:'9cd92ee402ee6ac890ed22d7ca6f4825',
                    location: inputdata[i].jingdu+','+inputdata[i].weidu,
                    radius:100,
                    output:'json'
                }
            
                let parameters = qs.stringify(data);
            
                let url = 'http://restapi.amap.com/v3/place/around?'+parameters;
    
                request(url, function (error, response, body) {
                    console.log(inputdata[i].id);

                    if (!error && response.statusCode == 200) {
                        let result = JSON.parse(body);

                        console.log(result);

                        //TODO: 进一步判断返回的的错误信息，没有错误再进行下一步循环

                            for(let j=0; j < result.pois.length; j++){
                                inputdata[i].POI=inputdata[i].POI+result.pois[j].type+',';
                                inputdata[i].city=result.pois[j].cityname;
                                inputdata[i].adname=result.pois[j].adname;
                            }
                        
                            console.log(inputdata[i])//最终数据
                    
                    }else{
                        console.log(error);
                    }
                })
            }
        )(i)
    }



// var resultjson = JSON.stringify(inputdata);
// fs.writeFile('myjsonfile.json', resultjson, 'utf8', (err)=>{
//     console.log(err);
// });
