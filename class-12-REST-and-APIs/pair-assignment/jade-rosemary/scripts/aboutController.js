(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    // REVIEW: Look at this method chaning. What is being accomplished here?
    $('#about').show().siblings().hide();

<<<<<<< HEAD
    // TODO: Call a function to 'request' our repo data.
=======
    // TODO-DONE: Call a function to 'request' our repo data.
     repos.requestRepos(repoView.index);
>>>>>>> 3ef3c0e630dcaddde39b9c66a7cdcd3ac7447ae9
    // Pass in a view function as a callback, so our repos will render after the data is loaded.
  };

  module.aboutController = aboutController;
})(window);
