/* eslint-disable react/jsx-no-undef */
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Bunner from "./componentes/Bunner";
import Container from "./componentes/Container";
import Card from "./componentes/Card";
import Props from "./componentes/Props";





function App() {
  return (
    <>
    <Header/>
    <Bunner novo="Hello" />
  
    <Container > 
    <h1 id="pais">Conheça Angola</h1>
    <header>
      
      <img src="bg-free-consultation.svg" id="top"/>
      </header>

      


    
    <h2>Geografia</h2>
      <section className="cards" >
    
         <Card/>
          <Card/>
           <Card/>
           <Card/>
           <Card/>
      </section>
      <h2>História</h2>
      <section className="cards" >
    
         <Card/>
          <Card/>
           <Card/>
          
      </section>
    </Container>
  
     <Container>
   
      <h1 id="pais">Realização</h1>
      <hr/>
    
    
      <div className="cont" >
        <img src="gelson.jpg" id="autor"title="Gelson dos Santos" />
        
      <h3>Gelson Rufino Dos Santos</h3>
        <p>
          Desemvolvedor Fullstack
        </p>
      </div>
      <p id="desc">Seja bem-vindo a Ango-World, como já referido eu sou o <code>"Gelson"</code>, estudante de Informática do ITEL(Instituto de Telecomunicações),
      a Ango-Word é uma plataforma que visa dar mais visiblidade sobre o que é feito em Angola e expandir para outros países assim também como dar mais visibilidade para pessoas localmente!<br/>
      Na Ango-World encontrarás filmes , séries, o melhor da  música, espaço para novos talentos,digital influencers, informações relevantes sobre Instituições do saber como escolas primárias, 
      ensino médio, faculdades , centros de formação de Angola, e muito mais!
      </p>
      <a href="#" id="start">Pronto para embarcares nesta grande aventura?</a>
      <footer>
        <img  src="/top-white-wave.png" id="bot" />
      </footer>
     </Container>
  

    <Footer/>
    </>
  
  );
}

export default App;
