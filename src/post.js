import React from "react";


export default function Posts() {


  return (
    <div className="posts">
      <Post key="1" usuario="meowed" icone="assets/img/meowed.svg" conteudo="assets/img/gato-telefone.svg" curtida="respondeai" curtidaIcone="assets/img/respondeai.svg" />
      <Post key="2" usuario="barked" icone="assets/img/barked.svg" conteudo="assets/img/dog.svg" curtida="adorable_animals" curtidaIcone="assets/img/adorable_animals.svg" />
    </div>
  )


  function Post(props) {

    const [contador, setContador] = React.useState(100000);
    const [curtida, setCurtida] = React.useState("heart-outline");
    const [salvarPost, setSalvarPost] = React.useState("bookmark-outline");
    const [estilo, setEstilo] = React.useState("");



    return (
      <>
        <ul className="post" data-test="post">
          <div className="topo">
            <div className="usuario" >
              <img src={props.icone} />
              {props.usuario}
            </div>
            <div className="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div className="conteudo" data-test="post-image" onClick={() => { if (curtida == "heart-outline") {setCurtida("heart-sharp"); setContador(contador + 1); }}}>
            <img src={props.conteudo} />
          </div>

          <div className="fundo">
            <div className="acoes">
              <div>
                
                <ion-icon  name={curtida} data-test="like-post"
                  onClick={() => {
                    if (curtida == "heart-outline") {
                      setCurtida("heart-sharp");
                      setContador(contador + 1);
                      setEstilo("vermelho");
                    }
                    else {
                      setCurtida("heart-outline");
                      setContador(contador - 1);
                      setEstilo("");
                    }
                  }

                  }></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name={salvarPost} data-test="save-post" onClick={() => {
                  if (salvarPost == "bookmark-outline") {
                    setSalvarPost("bookmark-sharp");
                  }
                  else {
                    setSalvarPost("bookmark-outline")
                  }
                }

                }></ion-icon>
              </div>
            </div>

            <div className="curtidas">
              <img src={props.curtidaIcone} />
              <div className="texto">
                Curtido por <strong>{props.curtida}</strong> e <strong>outras </strong><strong data-test = "likes-number">{contador} </strong><strong>pessoas</strong>
              </div>
            </div>
          </div>
        </ul>
      </>)
  }
}