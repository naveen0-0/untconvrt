import NavBar from "@/components/header/NavBar";
import MainHead from "@/seo/MainHead";
import Container from "@/components/common/Container";
import { useForm } from "react-hook-form";
import { useState } from "react";

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
          <form className="flex flex-col rounded-sm  gap-4 p-4 bg-slate-800">
            <input
              type="text"
              className="shadow-sm shadow-slate-900 bg-slate-900 py-3 px-6 rounded-sm outline-none border-none text-slate-100 text-3xl font-semibold"
              placeholder="Enter the value"
              {...register("first")}
            />
            <input
              type="text"
              className="shadow-sm shadow-slate-900 bg-slate-900 py-3 px-6 rounded-sm outline-none border-none text-slate-100 text-3xl font-semibold"
              placeholder="Enter the value"
              {...register("second")}
            />
          </form>
        </div>
      </Container>
    </>
  );
};

export default DistanceConverter;
