import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelsList,
} from "@/constants/options";
import { chatSession } from "@/service/AIModal";
import React, { useEffect } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useForm, Controller } from "react-hook-form";

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

  const onSubmit = async (tripFormData) => {
    console.log(!isValid, { tripFormData });
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
  };

  useEffect(() => {
    // This is recomended way to reset forms in react-hook-form
    if (isSubmitSuccessful)
      reset({
        favouriteDestination: "",
        totalDays: "",
        budget: "",
        travellers: "",
      });
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

          <div>
            <h2 className=" text-xl my-3 font-medium text-orange-600">
              👉 What is your budget?
            </h2>
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

          <div>
            <h2 className="text-xl my-3 font-medium text-orange-600">
              👉 Where do you plane to travel with whom?
            </h2>
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
          <Button className="mt-" type="submit">
            Generate Trip
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreateTrip;
