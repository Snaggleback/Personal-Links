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
    Footer,
    CoolList,
    CoolButton,
    MediaList,
    MediaButton,
    Dialog,
    Trigger,
    Content,
} from "./components";
// Importando os dados que serão usados no site
import { listOfBlockLinks } from "./assets";

export function App() {
    return (
        <main className="flex flex-col items-center justify-center">
            <Header />
            <CoolList>
                {listOfBlockLinks.map((link, i) => {
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
            <Footer />
        </main>
    );
}
