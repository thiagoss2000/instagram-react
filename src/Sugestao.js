export default function Sugestao(props) {
  const{image, name, razao}=props;
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={image} alt={name}/>
        <div className="texto">
          <div className="nome">{name}</div>
          <div className="razao">{razao}</div>
        </div>
      </div>
      <div className="seguir">Seguir</div>
    </div>
  );
}