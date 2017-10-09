// Test
// var http = require('http');

// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello, Node!\n');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');

var duck = {
        duckSinging: function(){
            console.log( '嘎嘎嘎' );
        }
    };

    var chicken = {
        duckSinging: function(){
            console.log( '嘎嘎嘎' );
        }
    };

    var choir = []; // 合唱团
    var joinChoir = function( animal ){
        if ( animal && typeof animal.duckSinging === 'function' ){
            choir.push( animal );
            console.log( '恭喜加入合唱团' );
            console.log( '合唱团已有成员数量:' + choir.length );
        }
    };

    joinChoir( duck ); 
    joinChoir( chicken );



// aliyun
// 139.196.210.82
