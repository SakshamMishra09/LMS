'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
        }),
        onSubmit: async (values) => {
            try {
                const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/authenticate`, values);
                toast.success('Login successful!');
                // Save the token to localStorage or cookies
                localStorage.setItem('user', res.data.token);
                // Redirect to another page (e.g., dashboard)
                // window.location.href = '/dashboard';
                router.push('/');
            } catch (error) {
                console.error(error);
                if (error.response && error.response.status === 401) {
                    toast.error('Invalid credentials');
                } else {
                    toast.error('Something went wrong. Please try again.');
                }
            }
        },
    });

    return (
        <div className="bg-gray-500 py-20 -mt-12">
            <div className="max-w-lg mx-auto mt-7 bg-white border border-gray-200 rounded-xl shadow-2xs">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800">Sign in</h1>
                        <p className="mt-2 text-sm text-gray-600">
                            Don't have an account yet?{' '}
                            <a
                                className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium"
                                href="/signup"
                            >
                                Sign up here
                            </a>
                        </p>
                    </div>
                    <div className="mt-5">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="grid gap-y-4">
                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm mb-2">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={`border py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 ${
                                            formik.touched.email && formik.errors.email
                                                ? 'border-red-500'
                                                : ''
                                        }`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <p className="text-xs text-red-600 mt-2">{formik.errors.email}</p>
                                    ) : null}
                                </div>

                                {/* Password Field */}
                                <div>
                                    <label htmlFor="password" className="block text-sm mb-2">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className={`border py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 ${
                                            formik.touched.password && formik.errors.password
                                                ? 'border-red-500'
                                                : ''
                                        }`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />
                                    {formik.touched.password && formik.errors.password ? (
                                        <p className="text-xs text-red-600 mt-2">{formik.errors.password}</p>
                                    ) : null}
                                </div>

                                {/* Remember Me Checkbox */}
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="shrink-0 mt-0.5 border-gray-200 rounded-sm text-blue-600 focus:ring-blue-500"
                                    />
                                    <label htmlFor="remember-me" className="ms-3 text-sm">
                                        Remember me
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                    disabled={formik.isSubmitting}
                                >
                                    {formik.isSubmitting ? 'Signing in...' : 'Sign in'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;