import reactDom from "react-dom";

function Navbar() {
  return (
    <div class="navbar">
      <div class="container">
        <div class="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div class="separador"></div>
          <img src="assets/img/logo.png" alt="instagran"/>
        </div>

        <div class="logo-mobile">
          <ion-icon name="logo-instagram"></ion-icon>
        </div>

        <div class="instagram-mobile">
          <img src="assets/img/logo.png" alt="instagran"/>
        </div>

        <div class="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div class="icones">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>

        <div class="icones-mobile">
          <ion-icon name="paper-plane-outline"></ion-icon>     
        </div>
      </div>
    </div>
  );
}

function Storie(props) {
  return (
    <div class="story">
        <div class="imagem">
          <img src={props.image} alt={props.name}/>
        </div>
        <div class="usuario">
          {props.name}
        </div>
      </div>
  );
}

function Stories() {
  return (
    <div class="stories">     
        <Storie image="assets/img/9gag.svg" name="9gag" />
        <Storie image="assets/img/9gag.svg" name="9gag" />
        <Storie image="assets/img/9gag.svg" name="9gag" />
        <Storie image="assets/img/9gag.svg" name="9gag" />
        <Storie image="assets/img/9gag.svg" name="9gag" />
        <Storie image="assets/img/9gag.svg" name="9gag" />
        <Storie image="assets/img/9gag.svg" name="9gag" />
        <Storie image="assets/img/9gag.svg" name="9gag" />

        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
  );
}

function Post(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.image} alt={props.name}/>
          {props.name}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.conteudo} alt="falha ao carregar!"/>
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.curtidaImg} alt="img"/>
          <div class="texto">
            Curtido por <strong>{props.curtidaTxt}</strong> e <strong>outras {props.numCurtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function Posts() {
  return (
    <div class="posts">
        <Post 
        image="assets/img/meowed.svg"
        name="meowed"
        conteudo="assets/img/gato-telefone.svg"
        curtidaImg="assets/img/respondeai.svg"
        curtidaTxt="respondeai"
        numCurtidas="101.523"
        />
        <Post 
        image="assets/img/meowed.svg"
        name="meowed"
        conteudo="assets/img/gato-telefone.svg"
        curtidaImg="assets/img/respondeai.svg"
        curtidaTxt="respondeai"
        numCurtidas="101.523"
        />
    </div>
  );
}

function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.image} alt={props.name}/>
        <div class="texto">
          <div class="nome">{props.name}</div>
          <div class="razao">{props.razao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}

function Sidebar() {
  return (
    <div class="sidebar">
      <div class="usuario">
        <img src="assets/img/catanacomics.svg" alt="img"/>
        <div class="texto">
          <strong>catanacomics</strong>
          Catana
        </div>
      </div>

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        <Sugestao 
        image="assets/img/bad.vibes.memes.svg"
        name="bad.vibes.memes"
        razao="Segue você"
        />
          <Sugestao 
        image="assets/img/bad.vibes.memes.svg"
        name="bad.vibes.memes"
        razao="Segue você"
        />
          <Sugestao 
        image="assets/img/bad.vibes.memes.svg"
        name="bad.vibes.memes"
        razao="Segue você"
        />
          <Sugestao 
        image="assets/img/bad.vibes.memes.svg"
        name="bad.vibes.memes"
        razao="Segue você"
        />
          <Sugestao 
        image="assets/img/bad.vibes.memes.svg"
        name="bad.vibes.memes"
        razao="Segue você"
        />
      </div>

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  );
}

function Corpo() {
  return (
    <div class="corpo">
        <div class="esquerda">          
          <Stories />
          <Posts />
        </div>
        <Sidebar />
      </div>
  );
}

function FundoMobile() {
  return (
    <div class="fundo-mobile">
      <ion-icon name="home"></ion-icon>
      <ion-icon name="search-outline"></ion-icon>
      <ion-icon name="add-circle-outline"></ion-icon>
      <ion-icon name="heart-outline"></ion-icon>
      <ion-icon name="person-outline"></ion-icon>
    </div>
  );
}

function Pagina() {
  return (
    <div>
      <Navbar />
      <Corpo />
      <FundoMobile />
    </div>
  );
}
const render = Pagina();


const divRoot = document.querySelector(".root");
reactDom.render(render, divRoot);