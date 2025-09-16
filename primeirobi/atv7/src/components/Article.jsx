import React from 'react';

function Article({ title, author, date, content }) {
  return (
    <article>
      <h2>{title}</h2>
      <p><strong>Autor:</strong> {author}</p>
      <p><strong>Data:</strong> {date}</p>
      <div>
        <p>{content}</p>
      </div>
    </article>
  );
}

export default Article;
