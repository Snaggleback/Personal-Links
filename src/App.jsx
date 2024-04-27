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
    CoolList,
    CoolButton,
    MediaList,
    MediaButton,
    Dialog,
    Trigger,
    Content,
    BigTitle,
} from "./components";
// Importando os dados que serão usados no site
import { profile, coollist } from "./assets/data";

export function App() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Header />
            <CoolList>
                {coollist.map((link, i) => {
                    return link.type ? (
                        <Dialog type={link.type} key={i}>
                            <Trigger>
                                <CoolButton href={link.link}>
                                    {link.title}
                                </CoolButton>
                            </Trigger>
                            <Content>{link.content}</Content>
                        </Dialog>
                    ) : (
                        <CoolButton key={i} href={link.link}>
                            {link.title}
                        </CoolButton>
                    );
                })}
            </CoolList>
            {
                <MediaList>
                    <MediaButton href="https://www.instagram.com/snaggleback/">
                        <FaInstagram />
                    </MediaButton>
                    <MediaButton href="https://github.com/Snaggleback/">
                        <FaGithub />
                    </MediaButton>
                    <MediaButton href="https://mastodon.social/@Snaggleback">
                        <FaMastodon />
                    </MediaButton>
                    <MediaButton href="https://www.linkedin.com/in/snaggleback/">
                        <FaLinkedinIn />
                    </MediaButton>
                </MediaList>
            }
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
