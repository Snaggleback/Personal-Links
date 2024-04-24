import React from "react";
// Importando os ícones que serão usados no site
import {
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaMastodon,
} from "react-icons/fa6";
// Importando os componentes que serão usados no site
import {
    Header,
    LinkList,
    LinkButton,
    Dialog,
    Trigger,
    Content,
    BigTitle
} from "./components";
// Importando os dados que serão usados no site
import {
    profile,
    coollist,
} from "./assets/data";

export function App() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Header />
            <LinkList>
                {coollist.map((link, i) => {
                    return link.type ? (
                        <Dialog type={link.type} key={i}>
                            <Trigger>
                                <LinkButton href={link.link}>
                                    {link.title}
                                </LinkButton>
                            </Trigger>
                            <Content>{link.content}</Content>
                        </Dialog>
                    ) : (
                        <LinkButton key={i} href={link.link}>
                            {link.title}
                        </LinkButton>
                    );
                })}
            </LinkList>
            <LinkList type="medialist">
                <LinkButton href="https://www.instagram.com/snaggleback/">
                    <FaInstagram />
                </LinkButton>
                <LinkButton href="https://github.com/Snaggleback/">
                    <FaGithub />
                </LinkButton>
                <LinkButton href="https://mastodon.social/@Snaggleback">
                    <FaMastodon />
                </LinkButton>
                <LinkButton href="https://www.linkedin.com/in/snaggleback/">
                    <FaLinkedinIn />
                </LinkButton>
            </LinkList>
            <footer className="py-6 text-center">
                Feito com ❤️ por{" "}
                <Dialog type="modal">
                    <Trigger>
                        <a href="#" className="underline">
                            @{profile.usernames.join("@")}
                        </a>
                    </Trigger>
                    <Content>
                        <BigTitle>Eu que fiz!</BigTitle>
                        <p>
                            Sim HAHAHAHHA Este site foi feito por mim (Ítalo),
                            desenvolvido para testar meus conhecimentos com
                            HTML, CSS e JAVASCRIPT (com React.js e Tailwind.css)
                        </p>
                    </Content>
                </Dialog>
            </footer>
        </div>
    );
}
