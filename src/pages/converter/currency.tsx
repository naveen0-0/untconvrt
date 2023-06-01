import NavBar from "@/components/header/NavBar";
import MainHead from "@/seo/MainHead";
import Container from "@/components/common/Container";

const CurrencyConverter = () => {
  return (
    <>
      <MainHead
        url="https://untconvrt.vercel.app/converter/currency"
        title="UntConvrt | Convert various Currency units into one another"
        description="This Page provides Seamlessly conversion of currencies, such as USD, EUR, GBP, and JPY, for accurate exchange rates and smooth financial transactions."
        generatorText="Currency conversion page in nextjs"
      />
      <NavBar />
      <Container>Currency</Container>
    </>
  );
};

export default CurrencyConverter;
