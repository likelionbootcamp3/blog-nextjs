import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-screen-md px-4 mx-auto md:px-6">
        <div className="flex items-center justify-center py-8 md:py-12">
          <ul className="flex items-center gap-6 sm:gap-8">
            <li>
              <Link href={"/"}>Blog</Link>
            </li>
            <li>
              <Link href={"/about"}>About me</Link>
            </li>
            <li>
              <Link href={"/feed"}>RSS</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
