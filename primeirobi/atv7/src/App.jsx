import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Article from './components/Article';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const post = {
    title: 'Aqui voce encontra os melhores livros',
    author: 'Alexandre Andrade',
    date: '16 de setembro de 2025',
    content: 'Nesta livraria, voce podera encontrar uma variedade de livros que abrangem diversos generos e interesses. Desde ficcao, romance, ciencia, historia, ate livros infantis e juvenis, temos algo para todos os gostos. Nossa colecao inclui tanto best-sellers quanto obras de autores independentes, garantindo que voce tenha acesso a uma ampla gama de perspectivas e estilos de escrita. Alem disso, oferecemos um ambiente acolhedor e inspirador para que voce possa explorar novos mundos atraves da leitura. Venha nos visitar e descubra o prazer de ler!',
  };

  return (
    <div className="App">
      <Header />
      <Navigation />
      <div className="main-content">
        <Article 
          title={post.title} 
          author={post.author} 
          date={post.date} 
          content={post.content} 
        />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;

