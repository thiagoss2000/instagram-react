import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import obj from "./object";

const user = obj.user;

export default function Corpo() {
    return (
        <div className="corpo">
            <div className="esquerda">          
            <Stories />
            <Posts />
            </div>
            <Sidebar 
                usuario={user.usuario} 
                image={user.image} 
                name={user.name}
            />
        </div>
    );
}