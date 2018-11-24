
import Route from '@ember/routing/route';


export default Route.extend({
    model: function() {
        console.log("model @ route") ;
        return  [{
            "name" : "Google",
            "headquarters": "Mountain View",
            "revenue":"59b"
            },{
              "name" : "Facebook",
              "headquarters":"Menlo Park",
              "revenue":"7b"
            },{
              "name" : "twitter",
              "revenue": "664m",
              "headquarters":"San Francisco"
            }]
    }


});