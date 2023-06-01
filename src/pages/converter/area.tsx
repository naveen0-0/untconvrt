import NavBar from "@/components/header/NavBar";
import MainHead from "@/seo/MainHead";
import Container from "@/components/common/Container";

const AreaConverter = () => {
  return (
    <>
      <MainHead
        url="https://untconvrt.vercel.app/converter/area"
        title="UntConvrt | Convert various area units into one another"
        description="This Page provides Seamlessly conversion between different units of area, such as square meters, square feet, acres, and hectares, facilitating accurate measurements and comparisons across various systems."
        generatorText="Area conversion page in nextjs"
      />
      <NavBar />
      <Container>Area</Container>
    </>
  );
};

export default AreaConverter;
