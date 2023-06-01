import NavBar from "@/components/header/NavBar";
import MainHead from "@/seo/MainHead";
import Container from "@/components/common/Container";

const EnergyConverter = () => {
  return (
    <>
      <MainHead
        url="https://untconvrt.vercel.app/converter/energy"
        title="UntConvrt | Convert various Energy units into one another"
        description="This Page provides Seamlessly conversion of convert energy units, including joules, calories, kilowatt-hours (kWh), and electron volts (eV), for precise measurements and effortless transitions."
        generatorText="Energy conversion page in nextjs"
      />
      <NavBar />
      <Container>Energy</Container>
    </>
  );
};

export default EnergyConverter;
