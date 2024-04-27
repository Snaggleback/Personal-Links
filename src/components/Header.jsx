import { profile, profileImagePNG } from "../assets";

export function Header() {
    return (
        <header className="w-full max-w-4xl pt-10">
            <div className="flex flex-col items-center">
                <img src={profileImagePNG} alt={profile.image_description} />
                <div>
                    @{profile.usernames.join("@")} ({profile.name})
                </div>
                <div className="italic">{profile.description}</div>
            </div>
        </header>
    );
}
