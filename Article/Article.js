// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"


class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;

    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');

    // Add READ button
    this.readButton = this.domElement.querySelector('.readButton');

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Click to expand';

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => {
      this.expandArticle();

      // ADD READ button
      this.readButton.addEventListener('click', () => {
        this.domElement.style.display = 'none';
      });
    });

  }

  // Update text for opening and closing articles
  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.

    // Read button functionality to remove article after expanding/closing the article
    // Press the remove button after expanding/closing the article to remove the article from the page
    // Can ONLY remove the article after the article has been expanded

    if (this.expandButton.textContent === 'Click to expand') {
      this.expandButton.textContent = 'Click to close';

      // Read button
      this.domElement.classList.toggle('article-open')
      TweenMax.to(".article-open", .5, {
        height: 400,
      })

    } else if (this.expandButton.textContent === 'Click to close') {
      this.expandButton.textContent = 'Click to expand';

      // Read button
      TweenMax.to(".article-open", .5, {
        height: 50,
      })
      setTimeout(() => {
        this.domElement.classList.toggle('article-open')
      }, 500)
    }
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');
articles.forEach(article => {
  new Article(article);
});