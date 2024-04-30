import { Dialog, Trigger, Content, BigTitle } from "./";
import { profileInformation } from "../assets";

export function Footer() {
    const { usernames } = profileInformation;
    return (
        <footer className="py-6 text-center">
            Feito com ❤️ por{" "}
            <Dialog type="modal">
                <Trigger>
                    <a className="underline cursor-pointer">
                        @{usernames.join("@")}
                    </a>
                </Trigger>
                <Content>
                    <BigTitle>Eu que fiz!</BigTitle>
                    <p>
                        Sim HAHAHAHHA Este site foi feito por mim (Ítalo),
                        desenvolvido para testar meus conhecimentos com HTML,
                        CSS e JavaScript (com React.js e Tailwind.css)
                    </p>
                </Content>
            </Dialog>
        </footer>
    );
}
