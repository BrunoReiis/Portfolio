import './Contact.css'

export const Contact = () => {
    const enviarButton = () => {
        alert("Formulario apenas de enfeite, para entrar em contato use as redes sociais!");

        document.getElementById("nome").value = "";
        document.getElementById("emailContato").value = "";
        document.getElementById("mensagem").value = "";
    }
    return (

    <section id="contato">
      <form id="form">
        <div class="contatoForm">
          <div class="itemContato">
            <label class="labelContato"> Nome </label>
            <input
              type="text"
              name="nome"
              class="inputContato"
              id="nome"
            />
          </div>
          <div class="itemContato" id="email">
            <label class="labelContato"> E-mail </label>
            <input
              type="email"
              name="email"
              class="inputContato"
              id="emailContato"
            />
          </div>
          <div class="itemContato">
            <label class="labelContato">
              Mensagem?
            </label>
            <textarea
              name="denuncia"
              class="text-area"
              id="mensagem"
             
            ></textarea>
          </div>
          <button onClick={e => enviarButton(e)} class="enviarButton">Enviar</button>
        </div>
      </form>
    </section>
    );
}