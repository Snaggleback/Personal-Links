import { Header } from "./components/Header";
import { LinkList, LinkButton } from "./components/LinkList";
// Ícones
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

import "./components/Dialog.css";
import {
    Dropdown,
    DropdownContent,
    DropdownTrigger,
} from "./components/Dropdown";
import { Modal, ModalTrigger, ModalContent } from "./components/Modal";

import { coollist, profile, abobrinha } from "../info";

export function App() {
    return (
        <>
            <Header />
            <LinkList>
                {coollist.map((link, i) => {
                    switch (link.type) {
                        case "dropdown":
                            return (
                                <Dropdown key={i}>
                                    <DropdownTrigger>
                                        <LinkButton
                                            href={link.link}
                                            children={link.title}
                                        />
                                    </DropdownTrigger>
                                    <DropdownContent>
                                        {link.content}
                                    </DropdownContent>
                                </Dropdown>
                            );
                        case "modal":
                            return (
                                <Modal key={i}>
                                    <ModalTrigger>
                                        <LinkButton
                                            href={link.link}
                                            children={link.title}
                                        />
                                    </ModalTrigger>
                                    <ModalContent>{link.content}</ModalContent>
                                </Modal>
                            );
                        default:
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
                <Modal>
                    <ModalTrigger>
                        <a href="#">@{profile.usernames.join("@")}</a>
                    </ModalTrigger>
                    <ModalContent>{abobrinha}</ModalContent>
                </Modal>
            </footer>
        </>
    );
}
