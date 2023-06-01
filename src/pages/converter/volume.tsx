import NavBar from "@/components/header/NavBar";
import MainHead from "@/seo/MainHead";
import Container from "@/components/common/Container";

const VolumeConverter = () => {
  return (
    <>
      <MainHead
        url="https://untconvrt.vercel.app/converter/volume"
        title="UntConvrt | Convert various Volume units into one another"
        description="This Page provides Seamlessly conversion between area units, like sq. meters, sq. feet, acres, and hectares, ensuring precise measurements and comparisons across systems."
        generatorText="Volume conversion page in nextjs"
      />
      <NavBar />
      <Container>Volume</Container>
    </>
  );
};

export default VolumeConverter;
