import { profile } from "../../info";
import profileimage from "../assets/profileimage.png";
import "./Header.css";

export function Header() {
    return (
        <header>
            <div className="profile">
                <img src={profileimage} alt={profile.imagedesc} />
                <div className="usernames">
                    @{profile.usernames.join("@")} ({profile.name})
                </div>
                <div className="desc">{profile.desc}</div>
            </div>
        </header>
    );
}
