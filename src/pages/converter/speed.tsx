import NavBar from "@/components/header/NavBar";
import MainHead from "@/seo/MainHead";
import Container from "@/components/common/Container";

const SpeedConverter = () => {
  return (
    <>
      <MainHead
        url="https://untconvrt.vercel.app/converter/speed"
        title="UntConvrt | Convert various speed units into one another"
        description="This Page provides Seamlessly conversion of speed units, such as kilometers per hour (km/h), miles per hour (mph), meters per second (m/s), and knots, for accurate calculations and efficient transitions."
        generatorText="Speed conversion page in nextjs"
      />
      <NavBar />
      <Container>Speed</Container>
    </>
  );
};

export default SpeedConverter;
