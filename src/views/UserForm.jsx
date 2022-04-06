import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

const UserForm = ({addUserFunction, updateUser, updateModeFunction, user}) => {

  console.log('user', user)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    // mode: "onChange",
    mode: "onSubmit",
    defaultValues: user
  });


  const handleInputChange = (event) => {
  };


  const sentDataFunction = (data, event) => {
    event.preventDefault();
    addUserFunction(data);

  };

  // console.log(errors);

  // const formWatcher = watch();
  // console.log("--------formWatcher", formWatcher);

  return (
    <Fragment>
      <form onSubmit={handleSubmit(sentDataFunction)}>
        { updateUser && (
        <div>
          <label>ID</label>
          <input
            readOnly
            onChange={handleInputChange}
            type="text"
           
          />
        </div>

        )
        
      }



        <div>
          <label>UserName</label>
          <input
            placeholder="Name"
            onChange={handleInputChange}
            type="text"
            {
              ...register("name", {
              required: { value: true, message: "Name is required" },
            })
          }
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label>Surname</label>
          <input
            placeholder="Surname"
            onChange={handleInputChange}
            type="text"
            {...register("surname", {
              required: { value: true, message: "Surname is required" },
            })}
          />
          {errors.surname && <span>{errors.surname.message}</span>}
        </div>
        <div>
          <label>Phone Number</label>
          <input
            placeholder="Cellphone number"
            onChange={handleInputChange}
            type="text"
            {...register("cellphoneNumber", {
              required: true,
              minLength: { value: 10, message: "min length 10" },
              maxLength: { value: 10, message: "min length 10" },
            })}
          />
          {errors.cellphoneNumber && (
            <span>{errors.cellphoneNumber.message}</span>
          )}
        </div>

        <div>
          <label>Age</label>
          <input
            placeholder="Age"
            onChange={handleInputChange}
            type="text"
            {...register("age", {
              required: true,
              min: { value: 18, message: "min age 18" },
            })}
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>

        <div>
          <label>Email</label>
          <input
            placeholder="Email"
            onChange={handleInputChange}
            type="email"
            {...register("email", {
              required: { value: true, message: "Email is required" },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          {
            updateUser ? (
              <Fragment >
                <button >Update</button>
                <button onClick={ () => updateModeFunction(false, {}) } >Cancel</button>
              </Fragment>
              ) : 
              <button >Add User</button>
          }

        </div>
      </form>

    
    </Fragment>
  );
};

export default UserForm;
