import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./schema/formSchema";

import ProgressBar from "./components/ProgressBar";
import PersonalInfo from "./components/PersonalInfo";
import AccountDetails from "./components/AccountDetails";
import Review from "./components/Review";
import Success from "./components/Success";

function App() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      username: "",
      password: "",
    },
  });

  const nextStep = async () => {
    let valid = false;

    if (step === 1) {
      valid = await trigger(["name", "email"]);
    } else if (step === 2) {
      valid = await trigger(["username", "password"]);
    }

    if (valid) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return <Success />;
  }

  return (
    <div className="container">
      <h1>Multi-Step Onboarding Wizard</h1>

      <ProgressBar step={step} />

      {step === 1 && (
        <PersonalInfo
          register={register}
          errors={errors}
          nextStep={nextStep}
        />
      )}

      {step === 2 && (
        <AccountDetails
          register={register}
          errors={errors}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Review
            data={watch()}
            prevStep={prevStep}
          />
        </form>
      )}
    </div>
  );
}

export default App;