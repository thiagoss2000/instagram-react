import obj from "./object";

let stories = obj.stories;

function Storie(props) {
  const{image, name}=props;
  return (    
    <div className="story">
      <div className="imagem">
        <img src={image} alt={name}/>
      </div>
      <div className="usuario">
        {props.name}
      </div>
    </div>    
  );
}
  
export default function Stories() {
  return (    
    <div className="stories">
      {stories.map((st) => (
        <Storie key={st.name} image={st.image} name={st.name} />
      ))}
      <div className="setinha">
        <ion-icon key="seta" name="chevron-forward-circle"></ion-icon>
      </div>
    </div>    
  );
}