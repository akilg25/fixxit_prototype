import React from 'react'
import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit,formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    
    
  return (
    <section>
        <div>
            <div>
                <h2>Create an Account</h2>
                

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='Username' />
                    <input type="text" {...register("email")} placeholder='Email address' />
                    <input type="text" {...register("password")} placeholder='Password' />
                    <input type="text" {...register("confirmpwd")} placeholder='Confirm password' />
                    <button className='btn'>Sign In</button>
                </form>

            </div>
            <div>
            
            </div>
        </div>
    </section>
  )
}