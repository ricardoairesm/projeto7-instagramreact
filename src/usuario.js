import React from "react";
let usuarioPadrao = "Catana";
let fotoPadrao = "assets/img/catanacomics.svg";

export default function Usuarios() {
    let [usuario, setUsuario] = React.useState(usuarioPadrao);
    let [fotoPerfil, setFotoPerfil] = React.useState(fotoPadrao);
   
    return (
        <div className="usuario" data-test="user">
            <img src= {!fotoPerfil ? fotoPadrao : fotoPerfil} data-test="profile-image" onClick={() => { const fotoPerfilAtualizada = prompt("Qual sua nova foto de perfil?");
                setFotoPerfil(fotoPerfilAtualizada)}}/>
            <div className="texto">
                <strong>catanacomics</strong>
                <span data-test="name">
                    {!usuario ? usuarioPadrao : usuario}
                    <ion-icon name="pencil" data-test="edit-name" onClick={() => { setUsuario(usuario = prompt("Qual seu novo usuario?"));}}></ion-icon>
                </span>
            </div>
        </div>
    )
}