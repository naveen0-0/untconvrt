import NavBar from "@/components/header/NavBar";
import MainHead from "@/seo/MainHead";
import Container from "@/components/common/Container";

const PowerConverter = () => {
  return (
    <>
      <MainHead
        url="https://untconvrt.vercel.app/converter/power"
        title="UntConvrt | Convert various Power units into one another"
        description="This Page provides Seamlessly conversion of power units, such as watts, kilowatts, horsepower, and BTUs per hour, for accurate measurements and convenient transitions."
        generatorText="Power conversion page in nextjs"
      />
      <NavBar />
      <Container>Power</Container>
    </>
  );
};

export default PowerConverter;
