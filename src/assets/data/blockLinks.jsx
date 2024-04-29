import { BigTitle } from "../../components/BigTitle";
import { NormalLink } from "../../components/NormalLink";

export default [
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
        content: (
            <>
                <BigTitle className="text-sm">Sobre:</BigTitle>
                <p>
                    Repositórios Utilizados para Estudo e Aquisição de
                    Conhecimento em Tecnologia (em Geral)
                </p>
                <p>
                    <NormalLink href="https://github.com/stars/Snaggleback/lists/educa%C3%A7%C3%A3o">
                        Acesse a lista
                    </NormalLink>
                </p>
            </>
        ),
    },
    {
        title: "Expanda seu CONHECIMENTO",
        type: "modal",
        content: (
            <>
                <BigTitle>PlayList de estudos 🗿🧃</BigTitle>
                <p>
                    Aprimore seu conhecimento com esta playlist, praticamente um
                    canal de TV, que é atualizada diariamente com conteúdo sobre
                    desenvolvimento, programação e tecnologia em geral.
                </p>
                <br />
                <p>
                    Acesse no{" "}
                    <NormalLink href="https://www.youtube.com/playlist?list=PLG77rut17t6wTxjhhb-iF_5dRdqGt9ZT8">
                        YouTube
                    </NormalLink>
                </p>
            </>
        ),
    },
    {
        title: "Quem sou eu?",
        type: "modal",
        content: (
            <>
                <BigTitle>Opa, eae?</BigTitle>
                <p>
                    <em>Sou um carinha simples e programo por hobbie</em>
                </p>
                <h2 className="text-sm font-bold py-2">Um pouco sobre mim</h2>
                <ul className="list-disc px-6">
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
                        <NormalLink href="https://github.com/Snaggleback/">
                            GitHub
                        </NormalLink>{" "}
                        ou{" "}
                        <NormalLink href="https://www.linkedin.com/in/snaggleback/">
                            LinkedIn
                        </NormalLink>{" "}
                        para saber mais sobre mim :)
                    </p>
                </ul>
            </>
        ),
    },
];
