import NavBar from "@/components/header/NavBar";
import MainHead from "@/seo/MainHead";
import Container from "@/components/common/Container";

const TimeConverter = () => {
  return (
    <>
      <MainHead
        url="https://untconvrt.vercel.app/converter/time"
        title="UntConvrt | Convert various Time units into one another"
        description="This Page provides Seamlessly conversion of time units, including seconds, minutes, hours, and days, for precise measurements and smooth transitions."
        generatorText="Time conversion page in nextjs"
      />
      <NavBar />
      <Container>Time</Container>
    </>
  );
};

export default TimeConverter;
