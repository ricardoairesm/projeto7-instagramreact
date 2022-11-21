import React from "react";

export default function Usuarios() {
    let [usuario, setUsuario] = React.useState("Catana");
    let [fotoPerfil, setFotoPerfil] = React.useState("assets/img/catanacomics.svg");
    return (
        <div className="usuario" data-test="user">
            <img src= {fotoPerfil} data-test="profile-image" onClick={() => { setFotoPerfil(fotoPerfil = prompt("Qual sua nova foto de perfil?"));}}/>
            <div className="texto">
                <strong>catanacomics</strong>
                <span data-test="name">
                    {usuario}
                    <ion-icon name="pencil" data-test="edit-name" onClick={() => { setUsuario(usuario = prompt("Qual seu novo usuario?"));}}></ion-icon>
                </span>
            </div>
        </div>
    )
}