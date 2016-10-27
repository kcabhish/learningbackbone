// Backbone model

var Blog = Backbone.Model.extend({
    defaults :{
        author :'',
        title :'',
        url:''
    }
});

//Backbone Collection

var Blogs = Backbone.Collection.extend({});

//instantiate two Blogs

var blog1 =  new Blog({
    author:"Avsek",
    title:"Avsek Blog",
    url:"http://avsek.blog.com"
});

var blog2= new Blog({
    author:"Haku",
    title:"Haku Blog",
    url:"http://haku.blog.com"
});


//Instiate collection
var blogs = new Blogs([blog1,blog2]);