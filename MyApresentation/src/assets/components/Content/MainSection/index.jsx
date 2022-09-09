import Typing from "../../Typing";

function MainSection(){
    return(
        <div className="l-page bg__profile">
            <main>
              <Typing text={'Ollá, me chamo Dylan'}/>
              <p className="description">Seja bem vindo ao meu currículo on-line.</p>

              <nav className="c-nav u-my-3">
                <a className="c-nav__item" href="https://github.com/DylanTokumoto">Github</a>
                <a className="c-nav__item" href="https://www.linkedin.com/in/dylan-tokumoto/">Linkedin</a>
              </nav>

              <a className="c-btn u-my-3" href="#sobre-mim">sobre mim</a>
            </main>
          </div>
    )
}

export default MainSection;