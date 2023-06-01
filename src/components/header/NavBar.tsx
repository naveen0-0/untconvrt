import Link from "next/link";
import Container from "@/components/common/Container";

const NavBar = () => {
  return (
    <div className="text-3xl font-bold shadow-md p-4 italic text-black">
      <Container>
        <Link href="/" className="hover:underline">
          UntConvrt
        </Link>
      </Container>
    </div>
  );
};

export default NavBar;
