import { Header } from "./components/Header";
import { LinkList, LinkButton } from "./components/LinkList";
// Ícones
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

import { Dialog, Trigger, Content } from "./components/Dialog";
import "./components/Dialog.css";

import { coollist, profile, abobrinha } from "../info";

export function App() {
    return (
        <>
            <Header />
            <LinkList>
                {coollist.map((link, i) => {
                    if (link.type) {
                        return (
                            <Dialog type={link.type} key={i}>
                                <Trigger>
                                    <LinkButton
                                        href={link.link}
                                        children={link.title}
                                    />
                                </Trigger>
                                <Content>{link.content}</Content>
                            </Dialog>
                        );
                    } else {
                        return (
                            <LinkButton
                                key={i}
                                href={link.link}
                                children={link.title}
                            />
                        );
                    }
                })}
            </LinkList>
            <LinkList medialist>
                <LinkButton href="https://www.instagram.com/snaggleback/">
                    <FaInstagram />
                </LinkButton>
                <LinkButton href="https://github.com/Snaggleback/">
                    <FaGithub />
                </LinkButton>
                <LinkButton href="https://www.linkedin.com/in/snaggleback/">
                    <FaLinkedinIn />
                </LinkButton>
            </LinkList>
            <footer>
                Feito com ❤️ por{" "}
                {
                    <Dialog type="modal">
                        <Trigger>
                            <a href="#">@{profile.usernames.join("@")}</a>
                        </Trigger>
                        <Content>{abobrinha}</Content>
                    </Dialog>
                }
            </footer>
        </>
    );
}
