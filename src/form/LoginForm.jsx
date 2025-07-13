import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

const schema = z.object({
  username: z.string().min(3, 'Username minimum 3 character'),
  password: z.string().min(6, 'Password minumum 6 character'),
});

const LoginForm = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Login Form</h2>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={toFormikValidationSchema(schema)}
        onSubmit={(values, { resetForm }) => {
          console.log('Submitted Data:', values);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block mb-1 font-medium">Username</label>
              <Field
                id="username"
                name="username"
                placeholder="Username"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block mb-1 font-medium">Password</label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
