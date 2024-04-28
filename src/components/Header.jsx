import { profileInformation, profileImagePNG } from "../assets";

export function Header() {
    return (
        <header className="w-full max-w-4xl pt-10">
            <div className="flex flex-col items-center">
                <img
                    src={profileImagePNG}
                    alt={profileInformation.image_description}
                />
                <div>
                    @{profileInformation.usernames.join("@")} (
                    {profileInformation.name})
                </div>
                <div className="italic">{profileInformation.description}</div>
            </div>
        </header>
    );
}
