(function(module) {
  var articlesController = {};

  Article.createTable();  // Ensure the database table is properly initialized

  articlesController.index = function(ctx, next) {
    articleView.index(ctx.articles);
  };

  // COMMENT: What does this method do?  What is it's execution path?
  // Answer: using the :id routing feature to fetch an article by a specific id
  // Execution path: Called in routes.js as a part of /article/:id routing method
  articlesController.loadById = function(ctx, next) {
    // Will be passed an article
    var articleData = function(article) {
        // will attach passed article to ctx object
      ctx.articles = article;
    // Tells page js to proceed to next function
      next();
    };
    // feed articleData function as a callback to .findWhere method
    // articleData will take an article as an argument via .findWhere
    Article.findWhere('id', ctx.params.id, articleData);
  };

  // COMMENT: What does this method do?  What is it's execution path?
  // Answer: Called by routes.js (/author/:authorName), defines a callback, feeds that callback to .findWhere method
  articlesController.loadByAuthor = function(ctx, next) {
    var authorData = function(articlesByAuthor) {
      ctx.articles = articlesByAuthor;
      next();
    };
  // Then call function in article.js
  // Manipulate authorName to replace +'s with spaces then make query...
    Article.findWhere('author', ctx.params.authorName.replace('+', ' '), authorData);
  };

  // COMMENT: What does this method do?  What is it's execution path?
  // Answer: Shows articles of certain category
  articlesController.loadByCategory = function(ctx, next) {
    // Defines a callback function
    var categoryData = function(articlesInCategory) {
      ctx.articles = articlesInCategory;
      next();
    };

    // call .findWhere method, pass along the categoryData callback
    Article.findWhere('category', ctx.params.categoryName, categoryData);
  };

  // COMMENT: What does this method do?  What is its execution path?
  // See below...
  articlesController.loadAll = function(ctx, next) {
    var articleData = function(allArticles) {
        // set context within this callback
      ctx.articles = Article.all;
      next();
    };

    if (Article.all.length) {
      ctx.articles = Article.all;
      next();
    } else {
        // if no articles exist yet, fetch them by passing along the callback
      Article.fetchAll(articleData);
    }
  };


  module.articlesController = articlesController;
})(window);
