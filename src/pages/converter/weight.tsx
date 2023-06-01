import NavBar from "@/components/header/NavBar";
import MainHead from "@/seo/MainHead";
import Container from "@/components/common/Container";

const WeightConverter = () => {
  return (
    <>
      <MainHead
        url="https://untconvrt.vercel.app/converter/weight"
        title="UntConvrt | Convert various Weight units into one another"
        description="This Page provides Seamlessly conversion of weight units, like kilograms, pounds, ounces, and grams, for accurate measurements and convenient transitions."
        generatorText="Weight conversion page in nextjs"
      />
      <NavBar />
      <Container>Weight</Container>
    </>
  );
};

export default WeightConverter;
