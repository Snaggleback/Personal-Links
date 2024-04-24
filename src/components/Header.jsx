import { profile } from "../../info";
import profileimage from "../assets/profileimage.png";

export function Header() {
    return (
        <header className="w-full max-w-4xl pt-10">
            <div className="flex flex-col items-center">
                <img src={profileimage} alt={profile.imagedesc} />
                <div>
                    @{profile.usernames.join("@")} ({profile.name})
                </div>
                <div className="italic">{profile.desc}</div>
            </div>
        </header>
    );
}
