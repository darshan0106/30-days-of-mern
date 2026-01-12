import { useFormik } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      role: "",
      terms: false,
    },

    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Full name is required"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm your password"),

      gender: Yup.string().required("Please select your gender"),

      role: Yup.string().required("Please select a role"),

      terms: Yup.boolean().oneOf([true], "You must accept the terms"),
    }),

    onSubmit: (values) => {
      console.log("Form Data:", values);
      alert("Registration Successful!");
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

        {/* Full Name */}
        <div className="mb-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full p-2 border rounded"
            {...formik.getFieldProps("fullName")}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <p className="text-red-500 text-sm">{formik.errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full p-2 border rounded"
            {...formik.getFieldProps("confirmPassword")}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {formik.errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block mb-1">Gender</label>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={formik.handleChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={formik.handleChange}
              />{" "}
              Female
            </label>
          </div>
          {formik.touched.gender && formik.errors.gender && (
            <p className="text-red-500 text-sm">{formik.errors.gender}</p>
          )}
        </div>

        {/* Role */}
        <div className="mb-4">
          <select
            name="role"
            className="w-full p-2 border rounded"
            {...formik.getFieldProps("role")}
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="developer">Developer</option>
            <option value="recruiter">Recruiter</option>
          </select>
          {formik.touched.role && formik.errors.role && (
            <p className="text-red-500 text-sm">{formik.errors.role}</p>
          )}
        </div>

        {/* Terms */}
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="terms"
              onChange={formik.handleChange}
            />
            <span className="ml-2">I agree to the terms & conditions</span>
          </label>
          {formik.touched.terms && formik.errors.terms && (
            <p className="text-red-500 text-sm">{formik.errors.terms}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={!formik.isValid}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
