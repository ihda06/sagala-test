import IconGithub from "@/components/icons/github-icon";
import Link from "next/link";
import IconLinkedin from "@/components/icons/linkedin-icon";
import IconInstagram from "@/components/icons/instagram-icons";
import IconWhatsappFill from "@/components/icons/whatsapp";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between">
      <p className=" text-gray-500 dark:text-white">
        All Rights Reserved. Made with love by <b>Ihda Anwari</b>
      </p>
      <div className="flex gap-2">
        <Link
          href="https://github.com/ihda06"
          className="text-gray-500 p-2 rounded-lg hover:bg-gray-200 duration-200 dark:bg-midnight-900 hover:dark:bg-blue-950 dark:text-white"
        >
          <IconGithub className="size-5" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ihda-anwari/"
          className="text-gray-500 p-2 rounded-lg hover:bg-gray-200 duration-200 dark:bg-midnight-900 hover:dark:bg-blue-950 dark:text-white"
        >
          <IconLinkedin className="size-5" />
        </Link>
        <Link
          href="https://www.instagram.com/ihda.anwari/"
          className="text-gray-500 p-2 rounded-lg hover:bg-gray-200 duration-200 dark:bg-midnight-900 hover:dark:bg-blue-950 dark:text-white"
        >
          <IconInstagram className="size-5" />
        </Link>
        <Link
          href="https://www.wa.me/6282262598163/"
          className="text-gray-500 p-2 rounded-lg hover:bg-gray-200 duration-200 dark:bg-midnight-900 hover:dark:bg-blue-950 dark:text-white"
        >
          <IconWhatsappFill className="size-5" />
        </Link>
      </div>
    </footer>
  );
}
