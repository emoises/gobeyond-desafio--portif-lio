<p align="center">
  <img src="https://raw.githubusercontent.com/emoises/gobeyond-desafio--portif-lio/main/public/images/header.png">
  <br/>
  <h1 align="center">Portifólio Eduardo desenvolvido com Nextjs</h1>
</p>

## Introdução

Projeto desenvolvido para o no treinamento Gobeyond da Corebiz.
O projeto foi desenvolvido em Next e React utilizando typescript.

## Instalação

Clone o repositório com:

```
git clone https://github.com/emoises/gobeyond-desafio--portif-lio.git
```

Em seguida abra o terminal e rode:

```
yarn
```

e o projeto será instalado.

## O projeto

### Header

O projeto é composto por um Header com um banner e foto do perfil nome e título.

```HTML
<section className={styles.section}>
    <div className={styles.banner}></div>
    <div className={styles.imgContainer}>
    <Image className={styles.heroImg} src={heroImg} alt="Vercel Logo" width={100} height={100}  />
    </div>
    <h1 className={styles.heroName}>Eduardo Moisés da Silva</h1>
    <h2 className={styles.heroFunction}>Front-end Developer</h2>
</section>
```

Essas tags simples são inseridas dentro de um compenent react que importadas em ./pages/index.tsx.

### Contacts

Foi desenvolvida em uma section com três links para contato com o desenvolvedor.
Foi utilizado o pacote FontAwsome para os icones da barra.

```HTML
<section className={styles.container}>
  <a className={styles.links} href="https://api.whatsapp.com/send?phone=5599987654321"
    target="_blank" rel="noreferrer"
  >
    <FontAwesomeIcon className={styles.images} icon={faWhatsapp} color="#333" size={"2x"} />
    <span className={styles.span}>Whatsapp</span>
  </a>
  <a className={styles.links} href="https://www.linkedin.com/in/eduardomoises/"
  target="_blank" rel="noreferrer"
  >
    <FontAwesomeIcon className={styles.images} icon={faLinkedinIn} color="#333" size={"2x"} />
    <span className={styles.span}>Linkedin</span>
  </a>
  <a className={styles.links} href="https://github.com/emoises"
  target="_blank" rel="noreferrer"
  >
    <FontAwesomeIcon className={styles.images} icon={faGithubAlt} color="#333" size={"2x"} />
    <span className={styles.span}>Github</span>
  </a>
</section>
```

## NavBar

Após consumir dados de uma simulação de API o NavBar é renderizado dinâmicamente com a quantidade de disciplina presentes na API.
Utilizei um `Array.map()` para varrer a API e renderizar cada Botão.

```HTML
<nav className={styles.nav}>
  {
    apiData?.disciplines.map( (disciple, idx) => {
      return (

          <button
          key={idx}
          className={index === idx ? styles.buttonActive :styles.button}
          onClick={() => handleIndexState(idx)}
          >
              <p>{disciple.title}</p>
          </button>
        )

      })
  }
</nav>
```

## Posts

Similar ao que foi feito com o NavBar os posts são renderizados com o método ` Array.map()`.

```HTML
<section className={styles.section}>
    {
          apiData?.disciplines[index].posts.map( (post, idx) => {
                return(

                    <div key={idx} className={styles.container}>
                      <a
                      className={styles.link}
                      href={post?.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                          backgroundImage: `url(${post?.imgUrl})`
                      }}  >
                          <h3 className={styles.h3}>{post?.title}</h3>
                      </a>
                      <div className={styles.filter}></div>
                    </div>
                )
            })


    }
</section>
```

Ainda utilizei um loading com HTML e CSS puro e o inseri em um componente.
Abaixo segue o componente em sua totalidade.

```js
import React from "react";
import styles from "../../../styles/loading.module.css";
const Loading: React.FC = () => {
  return (
    <div className={styles.ldsCircle}>
      <div></div>
    </div>
  );
};

export default Loading;
```

Abaixo segue o css completo para este componente.

```css
.ldsCircle {
  display: inline-block;
  transform: translateZ(1px);
}
.ldsCircle > div {
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  background: #000;
  opacity: 0.6;
  animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 0.1) infinite;
}
@keyframes lds-circle {
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
}
```

Esse componente foi executado a partir do código disponibilizado em [loading.io/css](https://loading.io/css).

## **Resultado Final**

<img src="https://raw.githubusercontent.com/emoises/gobeyond-desafio--portif-lio/main/public/images/desktop.png">
<br/>
<h3 align="center">Portifólio em desktop</h3>

<img  src="https://raw.githubusercontent.com/emoises/gobeyond-desafio--portif-lio/main/public/images/mobile.png">
<br/>
<h3 align="center">Portifólio em Mobile</h3>

[Visite](https://gobeyond-portifolio-edumoises.vercel.app/) a página do resultado final deste projeto.

# **OBRIGADO.**
