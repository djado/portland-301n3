(function(module) {
  var repoView = {};

  // DONE: Private methods declared here live only within the scope of the wrapping IIFE.
  var ui = function() {
    var $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

<<<<<<< HEAD
  // TODO: Remember that new Handlebars template? Let's compile it!
  // Save the result in this `render` variable.
  var render;
=======
  // TODO-DONE: Remember that new Handlebars template? Let's compile it!
  // Save the result in this `render` variable.
  var render = function(data) {
    var template = Handlebars.compile($('#repo-template').text());

    return template(data);
  };

// var render = function(article) {
//     var template = Handlebars.compile($('#article-template').text());

//     article.daysAgo = parseInt((new Date() - new Date(article.publishedOn))/60/60/24/1000);
//     article.publishStatus = article.publishedOn ? 'published ' + article.daysAgo + ' days ago' : '(draft)';
//     article.body = marked(article.body);

//     return template(article);
//   };

>>>>>>> 3ef3c0e630dcaddde39b9c66a7cdcd3ac7447ae9

  // DONE: If all the data is loaded, we can prep the UI and render the repos.
  repoView.index = function() {
    ui();

    // The jQuery `append` method lets us append an entire array of HTML elements at once,
    // So we can use a little FP to transform our data-set into DOM nodes:
    $('#about ul').append(
      // REVIEW: we added the `name` property here as our initial filter property. Try
      // changing it to see what happens!
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
