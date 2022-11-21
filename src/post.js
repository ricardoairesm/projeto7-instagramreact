import React from "react";

export default function Post() {
  const [contador, setContador] = React.useState(100000);
  const [curtida, setCurtida] = React.useState("heart-outline");
  const [salvarPost, setSalvarPost] = React.useState("bookmark-sharp");
  const post = [{ usuario: "meowed", icone: "assets/img/meowed.svg", conteudo: "assets/img/gato-telefone.svg", curtida: "respondeai", curtidaIcone: "assets/img/respondeai.svg" }, { usuario: "barked", icone: "assets/img/barked.svg", conteudo: "assets/img/dog.svg", curtida: "adorable_animals", curtidaIcone: "assets/img/adorable_animals.svg" }]


  return (
    <div className='posts'>
      {post.map((props, index) => <ul className="post" key={index} data-test="post">
        <div className="topo">
          <div className="usuario" >
            <img src={props.icone} />
            {props.usuario}
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo" data-test="post-image"  onClick={() => { setCurtida("heart-sharp"); setContador(contador + 1);}}>
          <img src={props.conteudo} />
        </div>

        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon  color = "red" name={curtida} data-test="like-post"
                onClick={() => {
                  if (curtida == "heart-outline") {
                    setCurtida("heart-sharp");
                    setContador(contador + 1);
                  }
                  else{
                    setCurtida("heart-outline");
                    setContador(contador - 1);
                  }
                }

                }></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name= {salvarPost} data-test="save-post" onClick={() => {
                  if (salvarPost == "bookmark-outline") {
                    setSalvarPost("bookmark-sharp");
                  }
                  else{
                    setSalvarPost("bookmark-outline")
                  }
                }

                }></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src={props.curtidaIcone} />
            <div className="texto">
              Curtido por <strong>{props.curtida}</strong> e <strong data-test="likes-number">outras {contador} pessoas</strong>
            </div>
          </div>
        </div>
      </ul>)}
    </div>)


}