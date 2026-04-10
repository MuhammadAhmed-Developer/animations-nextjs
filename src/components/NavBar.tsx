import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 z-50 md:p-9 p-3">
      <Image
        src={"/images/nav-logo.svg"}
        alt="nav-logo"
        height={90}
        width={90}
        className="md:w-24 w-20"
      />
    </nav>
  );
}
