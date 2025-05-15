'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            role: 'student', // default role
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
            role: Yup.string().oneOf(['student', 'company'], 'Invalid role'),
        }),
        onSubmit: async (values) => {
            try {
                const { name, email, password, role } = values;
                const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/add`, { name, email, password, role });
                toast.success('Signup successful!');
                // Redirect to login page
                window.location.href = '/login';
            } catch (error) {
                console.error(error);
                toast.error('Signup failed. Please try again.');
            }
        },
    });

    return (
        <div className=" py-20 -mt-12">
            <div className="max-w-lg mx-auto bg-white border border-gray-200 rounded-xl shadow-2xs">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800">Sign up</h1>
                        <p className="mt-2 text-sm text-gray-600">
                            Already have an account?{' '}
                            <a
                                className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium"
                                href="/login"
                            >
                                Sign in here
                            </a>
                        </p>
                    </div>
                    <div className="mt-5">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="grid gap-y-4">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-sm mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className={`border py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 ${
                                            formik.touched.name && formik.errors.name
                                                ? 'border-red-500'
                                                : ''
                                        }`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                    />
                                    {formik.touched.name && formik.errors.name ? (
                                        <p className="text-xs text-red-600 mt-2">{formik.errors.name}</p>
                                    ) : null}
                                </div>

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

                                {/* Confirm Password Field */}
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm mb-2">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        className={`border py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 ${
                                            formik.touched.confirmPassword && formik.errors.confirmPassword
                                                ? 'border-red-500'
                                                : ''
                                        }`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.confirmPassword}
                                    />
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                        <p className="text-xs text-red-600 mt-2">{formik.errors.confirmPassword}</p>
                                    ) : null}
                                </div>

                                {/* Role Selector */}
                                <div>
                                    <label htmlFor="role" className="block text-sm mb-2">
                                        Role
                                    </label>
                                    <select
                                        id="role"
                                        name="role"
                                        className={`border py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 ${
                                            formik.touched.role && formik.errors.role
                                                ? 'border-red-500'
                                                : ''
                                        }`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.role}
                                    >
                                        <option value="student">Student</option>
                                        <option value="company">company</option>
                                    </select>
                                    {formik.touched.role && formik.errors.role ? (
                                        <p className="text-xs text-red-600 mt-2">{formik.errors.role}</p>
                                    ) : null}
                                </div>

                                {/* Terms and Conditions Checkbox */}
                                <div className="flex items-center">
                                    <input
                                        id="terms"
                                        name="terms"
                                        type="checkbox"
                                        className="shrink-0 mt-0.5 border-gray-200 rounded-sm text-blue-600 focus:ring-blue-500"
                                    />
                                    <label htmlFor="terms" className="ms-3 text-sm">
                                        I accept the{' '}
                                        <a
                                            className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium"
                                            href="#"
                                        >
                                            Terms and Conditions
                                        </a>
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                    disabled={formik.isSubmitting}
                                >
                                    {formik.isSubmitting ? 'Signing up...' : 'Sign up'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;