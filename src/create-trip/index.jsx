import HeaderSeperatorImg from "@/components/custom/Header-Seperator-Img";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelsList,
} from "@/constants/options";
import { chatSession } from "@/service/AIModal";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function CreateTrip() {
  const {
    register,
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      favouriteDestination: "",
      totalDays: "",
      budget: "",
      travellers: "",
    },
    mode: "onChange",
    progressive: true,
  }); // HEre mode is used to fire validation onInput change value.

  const navigate = useNavigate();
  const [isSending, setSending] = useState(false);

  const onSubmit = async (tripFormData) => {
    console.log(!isValid, { tripFormData });
    setSending(true);
    const FINAL_PROMPTS = AI_PROMPT.replace(
      "{favouriteDestination}",
      tripFormData.favouriteDestination
    )
      .replace("{totalDays}", tripFormData.totalDays)
      .replace("{budget}", tripFormData.budget)
      .replace("{travellers}", tripFormData.travellers);

    console.log(FINAL_PROMPTS);
    const result = await chatSession.sendMessage(FINAL_PROMPTS);

    console.log(result?.response?.text());
    setSending(false);
    navigate(`/view-trip/${tripFormData.favouriteDestination}`, {
      state: {
        tripData: JSON.parse(result.response.text()),
        userSelection: tripFormData,
      },
    });
  };

  useEffect(() => {
    // This is recomended way to reset forms in react-hook-form
    if (isSubmitSuccessful) {
      reset({
        favouriteDestination: "",
        totalDays: "",
        budget: "",
        travellers: "",
      });
      setSending(false);
    }
  }, [reset, isSubmitSuccessful]);
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 px-5 mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="font-bold text-3xl text-orange-800">
          Describe your ideal travel preferences to us
        </h2>
        <p className="mt-3 text-gray-500 text-xl">
          Simply provide some key details, and our trip planner will craft a
          customized itinerary just for you.
        </p>
        <div className="mt-20 flex flex-col gap-9">
          <div>
            <h2 className="text-xl my-3 font-medium text-orange-600">
              👉 What&apos;s your favourite destination?
            </h2>
            {/* <GooglePlacesAutocomplete apiKey=''/> */}
            <Input
              {...register("favouriteDestination", { required: true })}
              placeholder={"Ex. Paris"}
            />
            {errors?.favouriteDestination?.type === "required" && (
              <span className="text-gray-600 font-medium">
                This is required
              </span>
            )}
          </div>
          <div>
            <h2 className="text-xl my-3 font-medium text-orange-600">
              👉 How May days are you planning your trip?
            </h2>
            <Input
              {...register("totalDays", { required: true, max: 10 })}
              placeholder={"Ex. 5"}
              type={"number"}
            />
            {errors?.totalDays?.type === "required" && (
              <span>This is required</span>
            )}
            {errors?.totalDays?.type === "max" && (
              <span className="text-gray-600 font-medium">
                Max length exceeded. Allowed numbers are upto 10
              </span>
            )}
          </div>
          <HeaderSeperatorImg />
          <div>
            <h2 className=" text-xl my-3 font-medium text-orange-600">
              👉 What is your budget?
            </h2>
            <p className="text-sm text-gray-500">Select one of the option</p>
            {errors?.budget && (
              <div className="flex items-center gap-5">
                <span className="font-medium text-gray-600">
                  {errors?.budget?.message}
                </span>
                <h4 className="animate-bounce w-6 h-6 fill-orange-950 ">
                  {" "}
                  👇{" "}
                </h4>
              </div>
            )}

            <Controller
              rules={{
                required: {
                  value: true,
                  message: "Must select one of the budget.",
                },
              }}
              control={control}
              name="budget"
              render={({ field: { value, ref, onChange, ...fieldProps } }) => (
                <div className="grid grid-cols-3 gap-5 mt-5">
                  {SelectBudgetOptions.map((item, index) => (
                    <div
                      {...fieldProps}
                      onClick={() => onChange(item.titlle)}
                      key={index}
                      className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                        getValues("budget") === item.titlle &&
                        "shadow-lg bg-orange-50 border-orange-600"
                      } `}>
                      <h2 className="text-4xl">{item.icon}</h2>
                      <h2 className="font-bold text-lg">{item.titlle}</h2>
                      <h2 className="text-sm text-gray-500">{item.desc}</h2>
                    </div>
                  ))}
                </div>
              )}
            />
          </div>
          <HeaderSeperatorImg />
          <div>
            <h2 className="text-xl my-3 font-medium text-orange-600">
              👉 Where do you plane to travel with whom?
            </h2>
            <p className="text-sm text-gray-500">Select one of the option</p>
            {errors?.travellers && (
              <div className="flex items-center gap-5">
                <span className="font-medium text-gray-600">
                  {errors?.travellers?.message}
                </span>
                <h4 className="animate-bounce w-6 h-6 fill-orange-950 ">
                  {" "}
                  👇{" "}
                </h4>
              </div>
            )}
            <Controller
              rules={{
                required: {
                  value: true,
                  message: "Must select any one travellers.",
                },
              }}
              control={control}
              name="travellers"
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <div className="grid grid-cols-3 gap-5 mt-5">
                  {SelectTravelsList.map((item, index) => (
                    <div
                      onClick={() => onChange(item.people)}
                      key={index}
                      className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                        getValues("travellers") === item.people &&
                        "shadow-lg bg-orange-50 border-orange-600"
                      }`}>
                      <h2 className="text-4xl">{item.icon}</h2>
                      <h2 className="font-bold text-lg">{item.titlle}</h2>
                      <h2 className="text-sm text-gray-500">{item.desc}</h2>
                    </div>
                  ))}
                </div>
              )}
            />
          </div>
        </div>
        <div className="divide-x-0 border border-opacity-10 my-10"></div>
        <div className="my-10 flex justify-end ">
          <Button className="mt-" type="submit" disabled={isSending}>
            {!isSending ? (
              "Generate Trip"
            ) : (
              <div className="flex items-center">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="mr-2 animate-spin h-5 w-5"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                </svg>
                <span>Calculating...</span>
              </div>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreateTrip;
