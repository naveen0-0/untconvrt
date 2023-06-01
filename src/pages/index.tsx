import UnitIntroCard from "@/components/cards/UnitIntroCard";
import Container from "@/components/common/Container";
import DashBoardBanner from "@/components/common/DashBoardBanner";
import NavBar from "@/components/header/NavBar";
import MainHead from "@/seo/MainHead";
import { DASHBOARD_CARDS_INFO } from "@/utils/constants";

function AllTheAvailableConversions() {
  return (
    <>
      <MainHead
        url="https://untconvrt.vercel.app"
        title="UntConvrt | All the Conversions you would want"
        description="This Page provides a wide variety of conversions like Energy, Temperature and File conversions"
        generatorText="A Unit and File Conversion App in Nextjs"
      />
      <NavBar />
      <Container>
        <DashBoardBanner />
        <div className="p-4 grid grid-cols-dashBoardColumns gap-4 pb-32 pt-8">
          {DASHBOARD_CARDS_INFO.map((card) => (
            <UnitIntroCard key={card.id} card={card} />
          ))}
        </div>
      </Container>
    </>
  );
}

export default AllTheAvailableConversions;
