import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

// Router.map(function() {
  // window.console.log("Router.map() @ Router.js") ;
  // this.route("products",{ path: "/products" });
  // this.route("products");  //alt way of defining route.
//   this.route("products",function(){
//     this.route("new");
//   });
//   this.route("about",{ path: "/hello" });
// window.console.log("Router.map() @ router.js") ;
//   this.route("commits",function(){
//     window.console.log("commits  --> Router.map() @ router.js") ;
//     this.route("commit",{path:":sha"});
//   });

//   Router.map(function() {
//     this.route('books', function(){
//       this.route('book',{path: "/:id"});
//       this.route('new');
//     });
//   // });
  
// });


// Router.map(function() {
//   window.console.log("Router.map() @ router.js") ;
//   this.route("commits",function(){
//     window.console.log("commits  --> Router.map() @ router.js") ;
//     this.route("commit",{path:":sha"});
//   });
// });


///

Router.map(function() {
  // this.route('index', function(){
    
  // });
});

// Router.map(function() {
//   this.route('question', {path: '/question/:question_id'});
// });
export default Router;
