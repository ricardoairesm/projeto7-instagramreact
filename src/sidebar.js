import Sugestoes from './sugestoes'
import Usuarios from './usuario'
export default function Sidebar() {
    return (
        <div className='sidebar'>
            <Usuarios />
            <Sugestoes />
            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )

}