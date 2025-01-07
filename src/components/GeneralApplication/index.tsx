import { useFormik } from "formik";
import * as Yup from "yup";

export function GeneralApplicationForm({
  eventName,
  eventDates,
  questions,
  viewOnly = false,
}: {
  eventName: string;
  eventDates: string;
  questions: {
    id: string;
    type: "field" | "textarea" | "select" | "radio";
    label: string;
    options?: string[]; // For select or radio
    validation?: Yup.StringSchema;
  }[];
  viewOnly?: boolean;
}) {
  const initialValues = questions.reduce((acc, question) => {
    acc[question.id] = "";
    return acc;
  }, {} as Record<string, string>);

  const validationSchema = Yup.object(
    questions.reduce((acc, question) => {
      if (question.validation) {
        acc[question.id] = question.validation;
      }
      return acc;
    }, {} as Record<string, Yup.StringSchema>)
  );

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Submitted values:", values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="text-left max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-primary mb-2">{eventName}</h1>
      <p className="text-sm text-gray-500 mb-6">{eventDates}</p>

      <form onSubmit={formik.handleSubmit} className="space-y-8">
        {questions.map((question) => (
          <div key={question.id} className="border border-accent/[.3] rounded-xl p-4">
            <label className="block mb-1 font-medium">{question.label}</label>
            {question.type === "field" && (
              <input
                readOnly={viewOnly}
                type="text"
                className={`w-full rounded bg-card text-accent text-sm text-sm p-2 focus:outline-none`}
                {...formik.getFieldProps(question.id)}
              />
            )}
            {question.type === "textarea" && (
              <textarea
                readOnly={viewOnly}
                rows={5}
                className={`w-full rounded bg-card text-accent text-sm text-sm p-2 focus:outline-none`}
                {...formik.getFieldProps(question.id)}
              ></textarea>
            )}
            {question.type === "select" && question.options && (
              <select
                disabled={viewOnly}
                className={`w-full rounded bg-card text-accent text-sm text-sm p-2 focus:outline-none`}
                {...formik.getFieldProps(question.id)}
              >
                <option value="">Select an option</option>
                {question.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
            {question.type === "radio" && question.options && (
              <div className={`flex flex-row gap-2`}>
                {question.options.map((option, index) => (
                  <label key={index} className="flex items-center space-x-1">
                      <input
                        disabled={viewOnly}
                        type="radio"
                        className="form-radio text-primary focus:ring-primary"
                        name={question.id} // Ensure all options share the same `name`
                        value={option}
                        checked={formik.values[question.id] === option} // Check the current selection
                        onChange={() => formik.setFieldValue(question.id, option)} // Update formik value
                      />
                      <span>{option}</span>
                  </label>
                ))}
              </div>
            )}

            {!viewOnly && formik.touched[question.id] && formik.errors[question.id] && (
              <p className="text-red-500 text-xs mt-1">{formik.errors[question.id]}</p>
            )}
          </div>
        ))}
        {!viewOnly && (
          <div>
            <button
              type="submit"
              className="bg-primary text-white rounded-xl px-6 py-3 hover:bg-opacity-95"
            >
              Submit Application
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
