import NavBar from "@/components/header/NavBar";
import MainHead from "@/seo/MainHead";
import Container from "@/components/common/Container";

const TemperatureConverter = () => {
  return (
    <>
      <MainHead
        url="https://untconvrt.vercel.app/converter/temperature"
        title="UntConvrt | Convert various Temperature units into one another"
        description="This Page provides Seamlessly conversion of temperature units, including Celsius, Fahrenheit, Kelvin, and Rankine, for precise measurements and effortless transitions."
        generatorText="Temperature conversion page in nextjs"
      />
      <NavBar />
      <Container>Temperature</Container>
    </>
  );
};

export default TemperatureConverter;
