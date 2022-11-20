export default function Post() {
  const post = [{ usuario: "meowed", icone: "assets/img/meowed.svg", conteudo: "assets/img/gato-telefone.svg", curtida: "respondeai", curtidaIcone: "assets/img/respondeai.svg" }, { usuario: "barked", icone: "assets/img/barked.svg", conteudo: "assets/img/dog.svg", curtida: "adorable_animals", curtidaIcone: "assets/img/adorable_animals.svg" }]
  const postInfo = post.map(function (props, index) {

    return (
      <ul className="post" key={index}>
        <div className="topo">
          <div className="usuario" >
            <img src={props.icone} />
            {props.usuario}
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo" >
          <img src={props.conteudo} />
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
            <img src={props.curtidaIcone} />
            <div className="texto">
              Curtido por <strong>{props.curtida}</strong> e <strong>outras 99.159 pessoas</strong>
            </div>
          </div>
        </div>
      </ul>

    )
  })

  return (
    <div className='posts'>
      {postInfo}
    </div>)


}