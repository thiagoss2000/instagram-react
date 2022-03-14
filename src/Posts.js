import obj from "./object";

const posts = obj.posts;

function Post(props) {
    const{image, name, conteudo, curtidaImg, curtidaTxt, numCurtidas}=props;
    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                <img src={image} alt={name}/>
                {name}
                </div>
                <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={conteudo} alt="falha ao carregar!"/>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                    </div>

                    <div className="curtidas">
                    <img src={curtidaImg} alt="img"/>
                    <div className="texto">
                        Curtido por <strong>{curtidaTxt}</strong> e <strong>outras {numCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Posts() {
    return (
            <div className="posts">
            {posts.map((pt) => (
                <Post 
                key={pt.image+pt.name}
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