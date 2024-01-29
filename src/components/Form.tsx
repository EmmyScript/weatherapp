import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const regex = /[^a-zA-Z0-9]/g

 console.log( regex.test("$$$$dsd"))
  return (
    <>
      <div className=" container">
        <form
          className="mb-3"
          target="_blank"
          onSubmit={onSubmit}
          action="https:formsubmit.co/idokoemmanuel19308@gmail.com"
          method="POST"
        >
          <input
            className="form-control mb-3"
            type="text"
            placeholder="NAME"
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.name && (
            <p className="mt-1 text-danger">
              {errors.name.type === "required" && "this field is required"}
              {errors.name.type === "maxLength" && "MAX length is 100 char"}
            </p>
          )}

          <input
            className="form-control mb-3"
            type="text"
            placeholder="EMAIL"
            {...register("email", { 
              required: true,
              pattern: /[^a-zA-Z0-9]/i,
            })}
          />
          {errors.email && (
            <p className="mt-3 text-danger">
              {errors.email.type === "required" && "this field is required"}
              {errors.email.type === "pattern" && "inValid email address"}
            </p>
          )}
          <textarea
            className="form-control mb-3"
            rows={5}
            cols={50}
            placeholder="COMMENT"
            {...register("comment", {
              required: true,
              maxLength: 2000,
            })}
          />
          {errors.comment && (
            <p className="mt-1 text-danger">
              {errors.comment.type === "required" && "this field is required"}
              {errors.comment.type === "maxLength" && "MAX length is 2000 char"}
            </p>
          )}
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
/* 
m


*/
