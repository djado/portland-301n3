(function(module) {
  var repos = {};
<<<<<<< HEAD

  repos.all = [];

  repos.requestRepos = function(callback) {
    // TODO: How would you like to fetch your repos? Don't forget to call the callback.

=======
 
  repos.all = [];

  repos.requestRepos = function(callback) {
    // TODO-DONE: How would you like to fetch your repos? Don't forget to call the callback.
    $.ajax({
        url: 'https://api.github.com/users/jjj430',
        type: 'GET',
        headers: {
          'Authorization': 'token ' + githubToken
        },
        success:function(data) {
          repos.all.push(data);
          callback();
       },
       error: function() {
        console.log('error: this is an error');
      }
    })
>>>>>>> 3ef3c0e630dcaddde39b9c66a7cdcd3ac7447ae9
  };

  // DONE: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
