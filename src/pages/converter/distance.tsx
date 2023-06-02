import NavBar from "@/components/header/NavBar";
import MainHead from "@/seo/MainHead";
import Container from "@/components/common/Container";
import { useForm } from "react-hook-form";
import { useState } from "react";
import CustomDropDown from "@/components/formControls/CustomDropDown";

const DistanceConverter = () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useForm();

  return (
    <>
      <MainHead
        url="https://untconvrt.vercel.app/converter/distance"
        title="UntConvrt | Convert various distance units into one another"
        description="This Page provides Seamlessly conversion of length units, like meters, feet, miles, and kilometers, for precise measurements and convenient transitions."
        generatorText="Distance conversion page in nextjs"
      />
      <NavBar />
      <Container>
        <div className="m-4">
          <CustomDropDown />
        </div>
      </Container>
    </>
  );
};

export default DistanceConverter;
