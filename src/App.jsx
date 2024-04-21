import React from "react";
import { Header } from "./components/Header";
import { LinkList, LinkButton } from "./components/LinkList";
import { FaGithub, FaInstagram, FaLinkedinIn, FaMastodon } from "react-icons/fa6";
import { Dialog, Trigger, Content } from "./components/Dialog";
import "./components/Dialog.css";
import { coollist, profile, footerAtr } from "../info";

export function App() {
    return (
        <>
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
            <LinkList medialist>
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
            <footer>
                Feito com ❤️ por{" "}
                <Dialog type="modal">
                    <Trigger>
                        <a href="#">@{profile.usernames.join("@")}</a>
                    </Trigger>
                    <Content>{footerAtr}</Content>
                </Dialog>
            </footer>
        </>
    );
}
