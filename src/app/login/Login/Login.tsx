"use client"
import Cookies from 'js-cookie';
import Image from 'next/image'
import React from 'react'
import QuoteBorder from "assets/images/quote-border.svg"
import BackArrow from "assets/images/icons/back-arrow.svg"
import Field from 'components/form/field'
import TextInput from 'components/form/TextInput'
import Button from 'components/button/Button'
import { useRouter } from 'next/navigation'
import GoogleIcon from 'assets/images/social/google.svg'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { toast } from 'react-toastify'
import authService from 'services/authService'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from "axios"
import { handleError } from 'utils/getAxiosErrorMessage'
import { LoginDataType } from 'types/auth'

const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }),
    password: Joi.string().required(),
});

const Login = () => {
    const router = useRouter()

    const { register, handleSubmit, formState } = useForm<LoginDataType>({
        resolver: joiResolver(schema),
    });

    const { mutate: authenticateUser, isPending } = useMutation({
        mutationFn: authService.login,
        onSuccess: (response) => {
            console.log("yaaaaay login successfully", response.data.accessToken)
            Cookies.set('authUser', JSON.stringify(response.data), { expires: 7 });
            router.push("/dashboard")
        },
        onError(error: AxiosError) {
            console.log("err", error)
            toast(handleError(error), { type: "error" });
        },
    });

    return (
        <div className='flex w-full h-screen'>
            <div className='w-[45%] h-full bg-login-bg bg-no-repeat bg-cover hidden xl:block'>
                <div className="w-full h-full backdrop-blur-lg flex justify-end items-center pr-20">
                    <div className='text-lg max-w-[20rem] text-white relative py-8 font-poppings'>
                        <div className='text-turquoise-100 font-lilyScriptOne text-8xl absolute -top-8'>&quot;</div>
                        <div className=" font-quicksand font-normal">Those people who develop the ability to continuously acquire new and better forms of knowledge that they can apply to their work and to their lives will be the movers and shakers in our society for the indefinite future</div>
                        <div className='mt-3 font-medium'>Brian Tracy</div>
                        <Image src={QuoteBorder} alt='quote border' className='absolute -bottom-4 right-0' />
                    </div>

                </div>
            </div>
            <div className='w-full xl:w-[55%] h-full flex items-center justify-center overflow-y-auto overflow-x-hidden'>
                <div className='flex flex-col min-w-[37rem] items-center'>
                    <div className='flex gap-2 justify-start w-full text-grayscale-60 cursor-pointer' onClick={() => router.push("/")}>
                        <Image src={BackArrow} alt='back arrow' />
                        <span>back</span>
                    </div>
                    <div className='w-[27rem] mt-24'>
                        <div className='text-black font-bold font-poppings text-[1.875rem]'>Login to your Account</div>
                        <div className='text-grayscale-60 text-lg'>with your registered Email Address</div>

                        <hr className='my-7 text-grayscale-30' />

                        <form
                            className="flex flex-col gap-5"
                            onSubmit={handleSubmit(data => authenticateUser(data))}
                            id="login-form"
                            data-cy="login-form"
                        >
                            <Field.Group>
                                <Field.Label className='mb-2'>Email address*</Field.Label>
                                <TextInput
                                    required={true}
                                    placeholder='Enter email address'
                                    className='text-grayscale-50'
                                    {...register('email')}
                                    error={!!formState.errors.email?.message}
                                />
                                <Field.Error data-cy="login-form-password-error-label">
                                    {formState.errors.email?.message}
                                </Field.Error>
                            </Field.Group>
                            <Field.Group>
                                <Field.Label>Enter Password*</Field.Label>
                                <TextInput
                                    required
                                    placeholder='password'
                                    type='password'
                                    {...register('password')}
                                />
                                <Field.Error data-cy="login-form-password-error-label">
                                    {formState.errors.password?.message}
                                </Field.Error>
                            </Field.Group>

                            <Button variant="tertiary" type='submit' isLoading={isPending}>Login</Button>
                            <div className='flex justify-between gap-3 items-center text-grayscale-40'>
                                <div className='h-[1px] bg-grayscale-30 flex-1'>&nbsp;</div>
                                <div>Or</div>
                                <div className='h-[1px] bg-grayscale-30 flex-1'>&nbsp;</div>
                            </div>
                            <Button variant="white"
                                iconBefore={<Image src={GoogleIcon} alt='google icon' className='mr-8' />}
                            >
                                <span className=''>Login with Google</span>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login
