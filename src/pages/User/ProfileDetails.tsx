import { useFormik } from "formik";
import * as Yup from "yup";

export function ProfileDetails(){
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    dateOfBirth: Yup.date().required("Date of Birth is required"),
    phoneNumber: Yup.number().typeError("Enter a valid phone number").required("Phone Number is required"),
    gender: Yup.string().required("Gender is required"),
    nationality: Yup.string().required("Nationality is required"),
    languages: Yup.string().required("Languages are required"),
    profession: Yup.string().required("Profession is required"),
    entity: Yup.string().required("Entity is required"),
    biography: Yup.string().required("Biography is required"),
    originCountry: Yup.string().required("Country of Origion is required"),
    residenceCountry: Yup.string().required("Country of Residence is required"),
    educationLevel: Yup.string().required("Level of Education is required"),
    fieldOfStudy: Yup.string().required("Field of Study is required"),
    institution: Yup.string().required("Institution is required"),
    countryOfStudy: Yup.string().required("Country of Study is required"),
    graduationYear: Yup.string().matches(/^\d{4}$/, "Must be exactly 4 digits").required("Graduation Year is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      phoneNumber: "",
      gender: "",
      nationality: "",
      languages: "",
      profession: "",
      entity: "",
      biography: "",
      originCountry: "",
      residenceCountry: "",
      educationLevel: "",
      fieldOfStudy: "",
      institution: "",
      countryOfStudy: "",
      graduationYear: "",
    },
    validationSchema,
    onSubmit: (values) => {
        console.log("onsubmit clicked", values)
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <form onSubmit={formik.handleSubmit} className="space-y-8">
        {/* Basic Information Section */}
        <div className="border border-accent/[.3r border-accent/[.3] text-accent rounded-xl p-4">
          <h2 className="text-primary text-left text-xl font-bold mb-4">Basic Information</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-left">First Name</label>
              <input
                type="text"
                className="w-full rounded bg-sidebar text-accent text-sm text-sm p-2 focus:outline-none"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-left">Last Name</label>
              <input
                type="text"
                className="w-full rounded bg-sidebar text-accent text-sm p-2 focus:outline-none"
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.lastName}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-left">Date of Birth</label>
              <input
                type="date"
                className="w-full rounded bg-sidebar text-accent text-sm p-2 focus:outline-none"
                {...formik.getFieldProps("dateOfBirth")}
              />
              {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.dateOfBirth}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-left">Phone Number</label>
              <div className="flex items-center space-x-2">
                <select
                  className="rounded bg-sidebar text-accent p-2"
                  {...formik.getFieldProps("countryCode")}
                >
                  <option value="+20">Egypt (+20)</option>
                  <option value="+1">USA (+1)</option>
                  <option value="+44">UK (+44)</option>
                </select>
                <input
                  type="text"
                  className="w-full rounded bg-sidebar text-accent text-sm p-2 focus:outline-none"
                  {...formik.getFieldProps("phoneNumber")}
                />
              </div>
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.phoneNumber}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-left">Gender</label>
              <select
                className="w-full rounded bg-sidebar text-accent text-sm p-2 focus:outline-none"
                {...formik.getFieldProps("gender")}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {formik.touched.gender && formik.errors.gender && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.gender}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-left">Nationality</label>
              <input
                type="text"
                className="w-full rounded bg-sidebar text-accent text-sm p-2 focus:outline-none"
                {...formik.getFieldProps("nationality")}
              />
              {formik.touched.nationality && formik.errors.nationality && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.nationality}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-left">Email</label>
              <input
                // readOnly
                type="email"
                className="w-full rounded bg-sidebar text-accent text-sm p-2 focus:outline-none"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-left">Languages</label>
              <input
                type="text"
                className="w-full rounded bg-sidebar text-accent text-sm p-2 focus:outline-none"
                {...formik.getFieldProps("languages")}
              />
              {formik.touched.languages && formik.errors.languages && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.languages}</p>
              )}
            </div>
          </div>
        </div>

        {/* Profile Details Section */}
        <div className="border border-accent/[.3] text-accent rounded-xl p-4">
          <h2 className="text-primary text-left text-xl font-bold mb-4">Profile Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-left">Profession / Title</label>
              <input
                type="text"
                className="w-full rounded bg-sidebar text-accent text-sm p-2 focus:outline-none"
                {...formik.getFieldProps("profession")}
              />
              {formik.touched.profession && formik.errors.profession && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.profession}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-left">Insitution / Company</label>
              <input
                type="text"
                className="w-full rounded bg-sidebar text-accent text-sm p-2 focus:outline-none"
                {...formik.getFieldProps("entity")}
              />
              {formik.touched.entity && formik.errors.entity && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.entity}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-left">Country of Origion</label>
              <input
                type="text"
                className="w-full rounded bg-sidebar text-accent text-sm p-2 focus:outline-none"
                {...formik.getFieldProps("originCountry")}
              />
              {formik.touched.originCountry && formik.errors.originCountry && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.originCountry}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-left">Country of Residence</label>
              <input
                type="text"
                className="w-full rounded bg-sidebar text-accent text-sm p-2 focus:outline-none"
                {...formik.getFieldProps("residenceCountry")}
              />
              {formik.touched.residenceCountry && formik.errors.residenceCountry && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.residenceCountry}</p>
              )}
            </div>
            <div className="col-span-2">
              <label className="block mb-1 text-left">Biography</label>
              <textarea
                className="w-full rounded bg-sidebar text-accent text-sm p-2 focus:outline-none"
                rows={3}
                {...formik.getFieldProps("biography")}
              ></textarea>
              {formik.touched.biography && formik.errors.biography && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.biography}</p>
              )}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="border border-accent/[.3] text-accent rounded-xl p-4">
          <h2 className="text-primary text-left text-xl font-bold mb-4">Education</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-left">Level of Education</label>
              <select
                className="w-full rounded bg-sidebar text-accent text-sm p-2 focus:outline-none"
                {...formik.getFieldProps("educationLevel")}
              >
                <option value="">Select Level</option>
                <option value="High School">High School</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Postgraduate">Postgraduate</option>
              </select>
              {formik.touched.educationLevel && formik.errors.educationLevel && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.educationLevel}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-left">Field of Study</label>
              <input
                type="text"
                className="w-full rounded bg-sidebar text-accent text-sm p-2 focus:outline-none"
                {...formik.getFieldProps("fieldOfStudy")}
              />
             
             {formik.touched.fieldOfStudy && formik.errors.fieldOfStudy && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.fieldOfStudy}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-left">Institution</label>
              <input
                type="text"
                className="w-full rounded bg-sidebar text-accent text-sm p-2 focus:outline-none"
                {...formik.getFieldProps("institution")}
              />
              {formik.touched.institution && formik.errors.institution && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.institution}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-left">Country of Study</label>
              <input
                type="text"
                className="w-full rounded bg-sidebar text-accent text-sm p-2 focus:outline-none"
                {...formik.getFieldProps("countryOfStudy")}
              />
              {formik.touched.countryOfStudy && formik.errors.countryOfStudy && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.countryOfStudy}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-left">Graduation Year</label>
              <input
                type="text"
                className="w-full rounded bg-sidebar text-accent text-sm p-2 focus:outline-none"
                {...formik.getFieldProps("graduationYear")}
              />
              {formik.touched.graduationYear && formik.errors.graduationYear && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.graduationYear}</p>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-primary text-white rounded-xl px-6 py-3 hover:bg-opacity-95"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};