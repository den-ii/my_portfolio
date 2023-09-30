import { BsLink45Deg } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { BsChatDots } from "react-icons/bs";
import { IoSendSharp } from "react-icons/io5";
import Section from "../section";
const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section
      id="contact"
      className="mt-16 px-5 pb-20 md:px-0 relative overflow-clip"
    >
      <Section>
        <h1 className="text-3xl text-primary-100 text-center font-bold">
          <div className="flex items-center justify-center gap-2 dark:text-gray-100">
            <BsChatDots className="dark:text-dark-secondary" />
            Contact Me
          </div>
        </h1>
        <form
          className="w-[320] md:w-[600px] mx-auto"
          target="_blank"
          onSubmit={onSubmit}
          action="https://formsubmit.co/wisdomochiche@gmail.com"
          method="POST"
        >
          <input
            type="text"
            placeholder="john doe"
            className="block w-full dark:bg-gray-100 border border-primary-100 focus:outline-2 focus:outline-secondary-100 rounded-lg mt-5 p-2 "
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.name && (
            <p className="mt-1 text-primary-100 dark:text-dark-secondary">
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLength" && "Max length is 100 char."}
            </p>
          )}
          <input
            type="text"
            placeholder="johndoe@gmail.com"
            className="block w-full border dark:bg-gray-100 border-primary-100 focus:outline-2 focus:outline-secondary-100 rounded-lg mt-5 p-2 "
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className="mt-1 text-primary-100 dark:text-dark-secondary">
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "pattern" && "Invalid email address."}
            </p>
          )}

          <textarea
            placeholder="I want to hire you"
            className="block w-full border dark:bg-gray-100 border-primary-100 focus:outline-2 focus:outline-secondary-100 rounded-lg mt-5 p-2 h-40 "
            {...register("message", {
              required: true,
              maxLength: 2000,
            })}
          />
          {errors.message && (
            <p className="mt-1 text-primary-100">
              {errors.message.type === "required" && "This field is required."}
              {errors.message.type === "maxLength" &&
                "Max length is 2000 char."}
            </p>
          )}
          <div className="flex justify-center">
            <button className="bg-primary-100 flex px-2 items-center justify-center gap-2 py-2 w-24 mt-3 rounded-lg font-bold text-white dark:text-dark-secondary dark:border border-dark-secondary">
              <IoSendSharp />
              <p>Send</p>
            </button>
          </div>
        </form>
      </Section>
      <div className="hidden md:block h-[20vh] bg-primary-100 dark:bg-dark-secondary w-[25vw] absolute -right-40 bottom-0 -rotate-45 -z-1"></div>
    </section>
    // <section id="contact" className="px-5 md:px-0 mt-14">

    //   <div className=" bg-primary-100 w-[20]  -rotate-45 -z-1"></div>
    //   <div className="absolute -right-10 top-0">
    //     <BsLink45Deg size={130} color="#4a00e0" />
    //     <TbUnlink size={130} color="#4a00e0" />
    //   </div>
    // </section>
  );
};

export default Contact;
