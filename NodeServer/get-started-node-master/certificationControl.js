const set = {
   certification(mydb,req,res){
     mydb.getDbByName('login').get(req.body.id, function(err, data) {
       if(!err && data.password == req.body.password){
         var user = {
            "_id": req.body.id,
            "_rev": data._rev,
            "password":data.password,
            "name":data.name,
            "maxPoint" : (Number(data.point) + 10 >= Number(data.maxPoint) ? (Number(data.point) + 10) : Number(data.maxPoint)).toString(),
            "point" : (Number(data.point) + 10).toString(),
            "path":data.path,
            "hispath":data.hisPath + " " + req.body.path
         };
         console.log(user.point + " " +data.point + " "+ data.maxPoint) ;
         mydb.getDbByName('login').insert(user, function(err, data) {
           console.log(err);
           if(!err) res.send(data);
           else res.send("Fail");
         });
       }
       else
           res.send("Fail");
     });
    },
   profile(mydb,req,res){
      mydb.getDbByName('login').get(req.body.id, function(err, data) {
        if(!err && data.password == req.body.password){
          console.log("================");

          var user = {
             "_id": req.body.id,
             "_rev": data._rev,
             "password":data.password,
             "name":data.name,
             "maxPoint" : ((Number(data.point) + 10) >= Number(data.maxPoint) ? (Number(data.point) + 10) : Number(data.maxPoint)).toString(),
               "point" : (Number(data.point) + 10).toString(),
               "path":data.path,
            "hispath":data.hisPath + " " + req.body.path
          };
           res.send(user);
          mydb.getDbByName('login').insert(user, function(err, data) {
            console.log(data);
            if(!err) res.send(data);
            else res.send("Fail");
          });
        }
        else
            res.send("Fail");
      });
     },
};

module.exports.set = set;
