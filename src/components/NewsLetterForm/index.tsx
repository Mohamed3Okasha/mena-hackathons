import { Formik, Form, Field } from "formik";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

interface NewsletterFormProps {
  onSubmit: (data: { firstName: string; lastName: string; email: string }) => void;
}

export function NewsletterForm({ onSubmit }: NewsletterFormProps) {
  const [t] = useTranslation("global");
  const initialValues = { firstName: "", lastName: "", email: "" };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .matches(
        /^[^\s@]{1,}@[^\s@]{2,}\.[^\s@]{2,}$/,
        "Email must be a valid format like name@company.domain"
      )
      .required("Email is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className="space-y-4 text-sm sm:text-base">
          {/* Name Fields */}
          <div className="flex gap-2">
            <div className="flex-1">
              <Field
                type="text"
                name="firstName"
                placeholder={t("footerSection.newsletterFirstName")}
                className={`w-full px-4 py-3 text-black border-2 ${errors.firstName && touched.firstName
                    ? "border-red-500"
                    : "border-gray-700"
                  } focus:border-primary focus:outline-none`}
              />
              {/* <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500 text-sm mt-1"
              /> */}
            </div>
            <div className="flex-1">
              <Field
                type="text"
                name="lastName"
                placeholder={t("footerSection.newsletterLastName")}
                className={`w-full px-4 py-3 text-black border-2 ${errors.lastName && touched.lastName
                    ? "border-red-500"
                    : "border-gray-700"
                  } focus:border-primary focus:outline-none`}
              />
              {/* <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500 text-sm mt-1"
              /> */}
            </div>
          </div>

          {/* Email Field and Button */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-0">
            <Field
              type="email"
              name="email"
              placeholder={t("footerSection.newsletterEmail")}
              className={`w-full px-4 py-3 text-black border-2 ${errors.email && touched.email
                  ? "border-red-500"
                  : "border-white"
                } focus:border-primary focus:outline-none`}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-card font-bold transition-colors"
            >
              {t("footerSection.newsletterSubscribe")}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
