import reactDom from "react-dom";

let stories = [
    {image:"assets/img/9gag.svg",
    name:"9gag"}, 
    {image:"assets/img/meowed.svg", 
    name:"meowed"}, 
    {image:"assets/img/barked.svg", 
    name:"barked"},
    {image:"assets/img/nathanwpylestrangeplanet.svg",
    name:"nathanwpylestrangeplanet"},
    {image:"assets/img/wawawicomics.svg", 
    name:"wawawicomics"},
    {image:"assets/img/respondeai.svg", 
    name:"respondeai"},
    {image:"assets/img/filomoderna.svg", 
    name:"filomoderna"},
    {image:"assets/img/memeriagourmet.svg", 
    name:"memeriagourmet"}
  ];
  
  let posts = [
    { 
      image:"assets/img/meowed.svg", 
      name:"meowed", 
      conteudo:"assets/img/gato-telefone.svg", 
      curtidaImg:"assets/img/respondeai.svg", 
      curtidaTxt:"respondeai", 
      numCurtidas:"101.523" 
    },
    {
      image:"assets/img/barked.svg", 
      name:"barked", 
      conteudo:"assets/img/dog.svg", 
      curtidaImg:"assets/img/adorable_animals.svg", 
      curtidaTxt:"adorable_animals",
      numCurtidas:"99.159" 
    }
  ];
  
  let sugestao = [
    {
      image:"assets/img/bad.vibes.memes.svg", 
      name:"bad.vibes.memes", 
      razao:"Segue você" 
    },
    {
      image:"assets/img/chibirdart.svg", 
      name:"chibirdart", 
      razao:"Segue você"
    },
    {
      image:"assets/img/razoesparaacreditar.svg", 
      name:"razoesparaacreditar", 
      razao:"Novo no Instagram" 
    },
    {
      image:"assets/img/adorable_animals.svg", 
      name:"adorable_animals", 
      razao:"Segue você" 
    },
    {
      image:"assets/img/smallcutecats.svg", 
      name:"smallcutecats", 
      razao:"Segue você" 
    }
  ];

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
    const{image, name}=props;
    return (
        <div class="story">
            <div class="imagem">
            <img src={image} alt={name}/>
            </div>
            <div class="usuario">
            {name}
            </div>
        </div>
    );
}

function Stories() {
    return (
        <div class="stories">     
            {stories.map((st) => (
                <Storie image={st.image} name={st.name} />
            ))}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

function Post(props) {
    const{image, name, conteudo, curtidaImg, curtidaTxt, numCurtidas}=props;
    return (
        <div class="post">
        <div class="topo">
            <div class="usuario">
            <img src={image} alt={name}/>
            {name}
            </div>
            <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div class="conteudo">
            <img src={conteudo} alt="falha ao carregar!"/>
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
            <img src={curtidaImg} alt="img"/>
            <div class="texto">
                Curtido por <strong>{curtidaTxt}</strong> e <strong>outras {numCurtidas} pessoas</strong>
            </div>
            </div>
        </div>
        </div>
    );
}

function Posts() {
  return (
    <div class="posts">
        {posts.map((pt) => (
            <Post 
            image={pt.image}
            name={pt.name}
            conteudo={pt.conteudo}
            curtidaImg={pt.curtidaImg}
            curtidaTxt={pt.curtidaTxt}
            numCurtidas={pt.numCurtidas}
            />
        ))}
    </div>
  );
}

function Sugestao(props) {
    const{image, name, razao}=props;
    return (
        <div class="sugestao">
        <div class="usuario">
            <img src={image} alt={name}/>
            <div class="texto">
            <div class="nome">{name}</div>
            <div class="razao">{razao}</div>
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
            {sugestao.map((sg) => (
                <Sugestao 
                    image={sg.image}
                    name={sg.name}
                    razao={sg.razao}
                />
            ))}
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