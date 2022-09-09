import SignupForm from "../Form";

function Contacts() {
    return (
        <>
            <div className="l-page" id="contatos">
                <section>
                    <div className="contatosFlex">
                        <h1 className="title">Posso te ajudar?</h1>

                        <nav className="c-nav">
                            <a className="c-nav__item" href="https://github.com/DylanTokumoto">Github</a>
                            <a className="c-nav__item" href="https://www.linkedin.com/in/dylan-tokumoto/">Linkedin</a>
                            {/* <a className="c-nav__item" href="tel:+5521972190000">Telefone</a> */}
                        </nav>

                        <SignupForm />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Contacts;