
// import Route from '@ember/routing/route'; 

// // export default Route.extend({
// //     model: function() {
// //         console.log("model fn @ Route.") ;
// //         return ['Router', 'Model', 'View', 'Controller'];
// //     }
// // });
// console.log("in Route.") ;

// export default Route.extend({
//     model: function() {
//         window.console.log("model @ route") ;
//         return ['Android', 'iOS', 'Tizen'];
//     }
// });


// import Route from '@ember/routing/route';

// export default Route.extend({
  // redirect: function(){
  //   window.console.log("redirect() @ routes/index.js")  ;
  //   this.transitionTo("books.new");
  // }
// });



//     export default Route.extend({
//         model: function() {
//             console.log("model @ route") ;
//             return  [{
//                 "name" : "Google",
//                 "headquarters": "Mountain View",
//                 "revenue":"59b"
//                 },{
//                   "name" : "Facebook",
//                   "headquarters":"Menlo Park",
//                   "revenue":"7b"
//                 },{
//                   "name" : "twitter",
//                   "revenue": "664m",
//                   "headquarters":"San Francisco"
//                 }]
//         }
    
    
// });


// import Route from '@ember/routing/route';

// export default Route.extend({
//   model: function() {
//     return {
//         name: "Ravi Kumar",
//         avatar: "https://randomuser.me/api/portraits/thumb/lego/3.jpg",
//         bio: "Famous painter"
//     };
//   }
// });

// export default Route.extend({
//           model: function() {
//               console.log("model @ route") ;
//               return  [{
//                   "yourQuestion" : "Whats ember ",
//                   "name": "Mountain View",
//                   "avatarURL":"59b",
//                   "additionalNotes": "Hello"
//                   },{
//                     "yourQuestion" : "",
//                   "name": "Mountain ",
//                   "avatarURL":"",
//                   "additionalNotes": ""
//                   },{
//                     "yourQuestion" : "",
//                     "name": "Mountain ",
//                     "avatarURL":"",
//                     "additionalNotes": ""
//                   }]
//           }
      
      
//   });

import Route from '@ember/routing/route'; 

export default Route.extend({
  // model() {

  //   return this.store.findAll('question');
  // },

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store
                 .createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
  }

});
