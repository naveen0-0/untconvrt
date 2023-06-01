import NavBar from "@/components/header/NavBar";
import MainHead from "@/seo/MainHead";
import Container from "@/components/common/Container";

const PressureConverter = () => {
  return (
    <>
      <MainHead
        url="https://untconvrt.vercel.app/converter/pressure"
        title="UntConvrt | Convert various Pressure units into one another"
        description="This Page provides Seamlessly conversion of pressure units, such as Pascals, atmospheres, pounds per square inch (psi), and millibars, for accurate measurements and convenient transitions."
        generatorText="Pressure conversion page in nextjs"
      />
      <NavBar />
      <Container>Pressure</Container>
    </>
  );
};

export default PressureConverter;
