import React from "react";

import "../assets/css/reset.css";
import "../assets/css/root.css";
import "../assets/css/card.css";

function Card() {
  function getUser() {
    const apiUrl = "https://api.github.com/users/";
    var input = document.querySelector(".inptuser").value;

    const user = input;

    const finalurl = apiUrl + user;

    let request = new XMLHttpRequest();

    request.open("GET", finalurl, false);

    request.send();

    return request.responseText;
  }

  function montaCard() {
    var data = getUser();

    var dadosusuario = JSON.parse(data);

    console.log(dadosusuario.message);

    var foto = document.querySelector(".divFoto");
    var nome = document.querySelector(".nome");
    var bio = document.querySelector(".bio");
    var followers = document.querySelector(".followers");
    var following = document.querySelector(".following");
    var public_repos = document.querySelector(".public_repos");

    if (dadosusuario.message == "Not Found") {
      foto.innerHTML = `<img src=${"https://user-images.githubusercontent.com/69609443/156448025-9bd78192-239e-4a29-bd43-d8e32cbc0dbc.png"} alt=${"Não encontrado"} />`;
      nome.innerHTML = "Vish não achei :(";
      bio.innerHTML = "Por gentileza, verifique o nome de usuário";
      followers.innerHTML = `<i class="bx bxs-group"></i>`;
      following.innerHTML = `<i class="bx bx bxs-heart"></i>`;
      public_repos.innerHTML = `<i class="bx bxs-folder"></i>`;
    } else {
      foto.innerHTML = `<img src=${dadosusuario.avatar_url} alt=${dadosusuario.name} />`;
      nome.innerHTML = dadosusuario.name;
      bio.innerHTML = dadosusuario.bio;
      followers.innerHTML = `<i class="bx bxs-group"></i>${dadosusuario.followers}`;
      following.innerHTML = `<i class="bx bx bxs-heart"></i>${dadosusuario.following}`;
      public_repos.innerHTML = `<i class="bx bxs-folder"></i>${dadosusuario.public_repos}`;
    }
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    const { name, email } = this.state;
  };

  return (
    <div className="Container">
      <form onSubmit={onFormSubmit}>
        <div className="inputebutton">
          <input type="text" tabindex="1" className="inptuser" />{" "}
          <button
            type="submit"
            className="button"
            tabindex="2"
            onClick={montaCard}
          >
            Pesquisar
          </button>
        </div>
      </form>

      <div className="card">
        <div className="divFoto">
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
            alt=""
          />
        </div>

        <div className="direita">
          <h1 className="nome">bem-vindo(a)</h1>
          <p className="bio">Pesquise acima seu nome de usuário do github :)</p>

          <ul>
            <li className="followers">
              <i class="bx bxs-group"></i>
            </li>
            <li className="following">
              <i class="bx bx bxs-heart"></i>
            </li>
            <li className="public_repos">
              <i class="bx bxs-folder"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
