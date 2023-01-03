import '../components/article-list.js';
import articles from '../data/articles.js';

const containerElement = document.querySelector('.container');

const articleListElement = document.createElement('article-list');
articleListElement.articles = articles;

containerElement.appendChild(articleListElement);