var xhr = new XMLHttpRequest();
var url = './news_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function () {
    if (xhr.status === 200) {
        var articles = xhr.response;
        var articlesDiv = document.getElementById('articles');

        articles.forEach(function (article) {
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            var title = document.createElement('h2');
            title.textContent = article.title;

            var description = document.createElement('p');
            description.textContent = article.description;

            var author = document.createElement('h3');
            author.textContent = 'By ' + article.author;

            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(author);

            articlesDiv.appendChild(articleDiv);
        });
    }
};

xhr.send();

