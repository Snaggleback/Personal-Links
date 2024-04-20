export const profile = {
    name: "Ítalo",
    desc: "Sou um carinha simples e programo por hobbie",
    imagedesc:
        "Pixel art de um cachorro salsicha no espaço, com planetas e um foguete de fundo",
    usernames: ["Snaggleback", "TheSnaggleback"],
};

export const coollist = [
    {
        title: "Projetos pessoais, currículo e portfólio",
        link: "https://github.com/Snaggleback",
    },
    {
        title: "Conheças meus repositórios no GitHub",
        link: "https://github.com/Snaggleback?tab=repositories",
    },
    {
        title: "Repositórios utilizados para estudo",
        type: "dropdown",
        link: "#",
        content: (
            <>
                <h2>Sobre:</h2>
                <p>
                    Repositórios Utilizados para Estudo e Aquisição de
                    Conhecimento em Tecnologia (em Geral)
                </p>
                <p>
                    <a href="https://github.com/stars/Snaggleback/lists/educa%C3%A7%C3%A3o">
                        Acesse a lista
                    </a>
                </p>
            </>
        ),
    },
    {
        title: "Expanda seu CONHECIMENTO",
        type: "modal",
        link: "#",
        content: (
            <>
                <h2>PlayList de estudos 🗿🧃</h2>
                <p>
                    Aprimore seu conhecimento com esta playlist, praticamente um
                    canal de TV, que é atualizada diariamente com conteúdo sobre
                    desenvolvimento, programação e tecnologia em geral.
                </p>
                <br />
                <p>
                    <iframe
                        style={{ width: 560, height: 315, maxWidth: "100%" }}
                        src="https://www.youtube.com/embed/videoseries?si=Ltya4roiLfWMd40g&amp;list=PLG77rut17t6wTxjhhb-iF_5dRdqGt9ZT8"
                        title="Expanda seu CONHECIMENTO 📖"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </p>
                <br />
                <p>
                    <a href="https://www.youtube.com/playlist?list=PLG77rut17t6wTxjhhb-iF_5dRdqGt9ZT8">
                        Acesse no YouTube
                    </a>
                </p>
            </>
        ),
    },
    {
        title: "Quem sou eu?",
        link: "#",
        type: "modal",
        content: (
            <>
                <h2>Opa, eae?</h2>
                <p>
                    <em>Sou um carinha simples e programo por hobbie</em>
                </p>
                <h3>Um pouco sobre mim</h3>
                <ul>
                    <li>
                        Me chamo Ítalo, muito prazer! Tenho 16 anos e sou um
                        entusiasta da tecnologia desde pequeno, começando aos
                        meus 12 anos
                    </li>
                    <li>
                        Uso Linux como meu sistema operacional principal e único
                        em minha máquina. Nunca fui muito fã do Windows e agora
                        definitivamente não sou. I use arch btw ;)
                    </li>
                    <li>
                        Estou aqui para contribuir e criar meus próprios
                        projetos de código aberto. Sintam-se à vontade para
                        abrir uma issue em meu projeto! Programo em diversas
                        linguagens e estou sempre disposto a aprender mais, seja
                        a lógica ou novas linguagens!
                    </li>
                    <li>
                        <b>Funfact</b>: Estudando sobre redes de computadores e
                        redes descentralizadas, acabei testando e criando um
                        site na deep web aos 13 anos. Coisa de criança, quem
                        nunca? :)
                    </li>
                    <p>
                        <br />
                        Acesse meu{" "}
                        <a href="https://github.com/Snaggleback/">
                            GitHub
                        </a> ou{" "}
                        <a href="https://www.linkedin.com/in/snaggleback/">
                            LinkedIn
                        </a>{" "}
                        para saber mais sobre mim :)
                    </p>
                </ul>
            </>
        ),
    },
];

export const footerAtr = (
    <>
        <h2>Eu que fiz!</h2>
        <p>
            Sim HAHAHAHHA Este site foi feito por mim (Ítalo), desenvolvido para
            testar meus conhecimentos com HTML, CSS e JAVASCRIPT (com React.js)
        </p>
    </>
);
