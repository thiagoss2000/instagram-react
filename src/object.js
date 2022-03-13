const user = {
  usuario:"catanacomics", 
  image:"assets/img/catanacomics.svg",
  name:"Catana"
};

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

let obj = {user, stories, posts, sugestao}; 
export default obj; 


