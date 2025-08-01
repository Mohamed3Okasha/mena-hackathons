import { useFormik } from "formik";
import * as Yup from "yup";

export function ProjectSubmissionForm({ challenges, viewOnly }: { challenges: string[], viewOnly?: boolean }) {
  const validationSchema = Yup.object({
    projectName: Yup.string().required("Project Name is required"),
    challenge: Yup.string().required("Please select a challenge"),
    inspiration: Yup.string().required("Inspiration is required"),
    whatItDoes: Yup.string().required("Description of what it does is required"),
    howWeBuiltIt: Yup.string().required("How you built it is required"),
    challenges: Yup.string().required("Challenges you ran into are required"),
    futurePlans: Yup.string().required("Future plans are required"),
    technologies: Yup.string().required("Technologies/Tools are required"),
    videoLink: Yup.string().url("Invalid video URL").required("Video link is required"),
    githubLink: Yup.string().url("Invalid GitHub URL").required("GitHub link is required"),
  });

  const formik = useFormik({
    initialValues: {
      projectName: "",
      challenge: "",
      inspiration: "",
      whatItDoes: "",
      howWeBuiltIt: "",
      challenges: "",
      futurePlans: "",
      technologies: "",
      videoLink: "",
      githubLink: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Submitted values:", values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="text-left max-w-4xl mx-auto mt-10 p-4">
      <form onSubmit={formik.handleSubmit} className="space-y-8">
        <h1 className="text-2xl font-bold text-primary mb-4">Project Details</h1>
        {/* Project Details */}
        <div className="border border-accent/[.3] text-accent rounded-xl p-4">
          <div className="grid gap-4">
            <div>
              <label className="block mb-1">Project Name</label>
              <input
                readOnly={viewOnly}
                type="text"
                className={`w-full rounded bg-card text-accent text-sm text-sm p-2 focus:outline-none`}
                {...formik.getFieldProps("projectName")}
              />
              {!viewOnly&&formik.touched.projectName && formik.errors.projectName && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.projectName}</p>
              )}
            </div>
            <div>
              <label className="block mb-1">Challenge</label>
              <select
                disabled={viewOnly}
                className={`w-full rounded bg-card text-accent text-sm text-sm p-2 focus:outline-none`}
                {...formik.getFieldProps("challenge")}
              >
                <option value="">Select Challenge</option>
                {challenges.map((challenge, index) => (
                  <option key={index} value={challenge}>
                    {challenge}
                  </option>
                ))}
              </select>
              {!viewOnly&&formik.touched.challenge && formik.errors.challenge && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.challenge}</p>
              )}
            </div>
            <div>
              <label className="block mb-1">Video Link</label>
              <input
                readOnly={viewOnly}
                type="url"
                className={`w-full rounded bg-card text-accent text-sm text-sm p-2 focus:outline-none`}
                {...formik.getFieldProps("videoLink")}
              />
              {!viewOnly&&formik.touched.videoLink && formik.errors.videoLink && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.videoLink}</p>
              )}
            </div>
            <div>
              <label className="block mb-1">GitHub Link</label>
              <input
                readOnly={viewOnly}
                type="url"
                className={`w-full rounded bg-card text-accent text-sm text-sm p-2 focus:outline-none`}
                {...formik.getFieldProps("githubLink")}
              />
              {!viewOnly&&formik.touched.githubLink && formik.errors.githubLink && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.githubLink}</p>
              )}
            </div>
            {[
              { label: "Inspiration", field: "inspiration" },
              { label: "What it does?", field: "whatItDoes" },
              { label: "How we built it?", field: "howWeBuiltIt" },
              { label: "Challenges we ran into", field: "challenges" },
              { label: "Future Plans: How to sustain the project?", field: "futurePlans" },
              { label: "Technologies/Tools", field: "technologies" },
            ].map(({ label, field }) => (
              <div key={field}>
                <label className="block mb-1">{label}</label>
                <textarea
                  readOnly={viewOnly}
                  rows={5}
                  className={`w-full rounded bg-card text-accent text-sm text-sm p-2 focus:outline-none`}
                  {...formik.getFieldProps(field)}
                ></textarea>
                {!viewOnly&&formik.touched[field as keyof typeof formik.touched] && formik.errors[field as keyof typeof formik.errors] &&
                  (<p className="text-red-500 text-xs mt-1">
                    {formik.errors[field as keyof typeof formik.errors]}
                  </p>)}
              </div>
            ))}
            {!viewOnly &&
              <div>
                <button
                  disabled={viewOnly}
                  type="submit"
                  className="bg-primary text-white rounded-xl px-6 py-3 hover:bg-opacity-95"
                >
                  Save Project
                </button>
              </div>
            }
          </div>

        </div>
      </form>
    </div>
  );
}
