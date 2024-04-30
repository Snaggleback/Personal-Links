import { profileInformation, profileImagePNG } from "../assets";

export function Header() {
    const { name, description, usernames, image_description } =
        profileInformation;
    return (
        <header className="w-full max-w-4xl pt-10">
            <div className="flex flex-col items-center">
                <img
                    src={profileImagePNG}
                    width={200}
                    height={200}
                    alt={image_description}
                />
                <div>
                    @{usernames.join("@")} ({name})
                </div>
                <div className="italic">{description}</div>
            </div>
        </header>
    );
}
