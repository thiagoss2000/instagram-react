import Sugestao from "./Sugestao";
import obj from "./object";

const sugestao = obj.sugestao;

export default function Sidebar(props) {
  const {usuario, image, name} = props;
  return (
    <div className="sidebar">
      <div className="usuario">
        <img src={image} alt="img"/>
        <div className="texto">
          <strong>{usuario}</strong>
          {name}
        </div>
      </div>

      <div className="sugestoes">
        <div className="titulo">
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

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  );
}