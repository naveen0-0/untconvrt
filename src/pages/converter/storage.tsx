import NavBar from "@/components/header/NavBar";
import MainHead from "@/seo/MainHead";
import Container from "@/components/common/Container";

const StorageConverter = () => {
  return (
    <>
      <MainHead
        url="https://untconvrt.vercel.app/converter/storage"
        title="UntConvrt | Convert various Storage units into one another"
        description="This Page provides Seamlessly conversion of data storage units, including bytes, kilobytes, megabytes, and gigabytes, for precise measurements and seamless transitions."
        generatorText="Storage conversion page in nextjs"
      />
      <NavBar />
      <Container>Storage</Container>
    </>
  );
};

export default StorageConverter;
