import { NewsletterForm } from "../NewsLetterForm";
import facebookIcon from "../../assets/facebook-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import instagramIcon from "../../assets/instagram-icon.svg";
import twitterIcon from "../../assets/twitter-icon.svg";
import emailIcon from "../../assets/email-icon.svg";
import { useTranslation } from "react-i18next";

export function Footer() {
  const [t, i18n] = useTranslation("global");
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (data: {
    firstName: string;
    lastName: string;
    email: string;
  }) => {
    alert(`Newsletter submitted:\n${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div className="grid grid-cols-5 relative">
      <div className="col-span-5 md:col-span-3 bg-sidebar text-left p-5 sm:p-[7%] text-center sm:text-left">
        {/* Header */}
        <h2 className="text-2xl font-bold mb-2">{t("footerSection.newsletterTitle")}</h2>
        <p className="text-lg text-gray-400 mb-6">{t("footerSection.newsletterSubTitle")}</p>

        {/* Newsletter Form */}
        <NewsletterForm onSubmit={handleNewsletterSubmit} />
      </div>
      <div className="col-span-5 md:col-span-2 p-5 sm:p-[7%]" id="contact">
        <div className="mb-3 sm:mb-9">
          <h1 className="text-2xl lg:text-3xl font-semibold leading-none mb-3">
            <span className="mr-3">{t("footerSection.contactTitle")}</span>
          </h1>
          <p className="font-light text-1xl text-[#CECED0]">{t("footerSection.contactSubTitle")}</p>
        </div>
        <div>
          <a
            href="mailto:contact@menahackathons.com"
            className="flex justify-center items-center gap-3 text-primary mb-5"
          >
            <img src={emailIcon} alt="email-logo" className="max-w-[35px]" />
            <span>contact@menahackathons.com</span>
          </a>
        </div>
        <div className="flex justify-center items-center gap-9">
          <a href="https://www.linkedin.com/company/menahacks">
            <img src={linkedinIcon} alt="linkedin-logo" className="max-w-[35px]" />
          </a>
          <a href="https://instagram.com/menahacks">
            <img src={instagramIcon} alt="instagram-logo" className="max-w-[35px]" />
          </a>
          <a href="https://facebook.com/menahacks">
            <img src={facebookIcon} alt="facebook-logo" className="max-w-[35px]" />
          </a>
          <a href="https://twitter.com/menahacks">
            <img src={twitterIcon} alt="twitter-logo" className="max-w-[35px]" />
          </a>
        </div>
      </div>
      <div className="w-full px-[4%] col-span-5 sm:absolute md:bottom-1 lg:bottom-4 text-sm flex flex-col-reverse sm:flex-row justify-between items-center">
        <p className="font-light text-accent sm:text-left">
          ©{currentYear} MENA Hackathons. All rights reserved.
        </p>
        <p className="font-light text-primary sm:text-right">Developed by MH Tech House</p>
      </div>
    </div>
  );
}
