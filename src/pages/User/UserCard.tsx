import { useEffect, useRef } from "react";
import QRCode from "qrcode";
import html2canvas from "html2canvas";

type UserCardProps = {
  profilePicture: string;
  name: string;
  position: string;
  company: string;
  email: string;
  mobile: string;
  qrValue: string;
  identityLogo?: string; // Path to logo,
  identityName?: string;
  socialMedia?: {
    linkedIn?: string;
  };
};

export function UserCard({
  profilePicture,
  name,
  position,
  company,
  email,
  mobile,
  qrValue,
  identityLogo,
  identityName,
}: UserCardProps){
  const qrCanvasRef = useRef<HTMLCanvasElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateQRCode = async () => {
      if (qrCanvasRef.current) {
        const canvas = qrCanvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Generate the QR code
        await QRCode.toCanvas(canvas, qrValue, {
          width: 160,
          margin: 2,
          color: {
            dark: "#44C3F4", // Tailwind `text-primary` color
            light: "#0C273A", // QR background
          },
        });

        // Draw the logo in the middle
        if(identityLogo){
          const img = new Image();
          img.src = identityLogo;
          img.onload = () => {
            const qrSize = 160;
            const logoSize = 40;
            const x = (qrSize - logoSize) / 2;
            const y = (qrSize - logoSize) / 2;
  
            // Draw a background for the logo
            ctx.fillStyle = "#0C273A";
            ctx.fillRect(x, y, logoSize, logoSize);
  
            // Draw the logo
            ctx.drawImage(img, x, y, logoSize, logoSize);
          };
        }
      }
    };

    generateQRCode();
  }, [qrValue, identityLogo]);


  const handleDownloadCardAsPNG = async () => {
    if (!cardRef.current) {
      console.error('Card reference is null');
      return;
    }

    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#0C273A', // Ensures correct background color
        useCORS: true, // Handle external images,
        scale: 1,
      });

      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'business_card.png';
      link.click();
    } catch (error) {
      console.error('Error downloading card as PNG', error);
    }
  };

  const handleDownloadVCF = () => {
    const vCard = 
`BEGIN:VCARD
VERSION:3.0
FN:${name}
TITLE:${position}
COMPANY:${company}
EMAIL:${email}
TEL:${mobile}
END:VCARD`;
    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${name}_contact.vcf`;
    link.click();
  };

  return (
    <>
        <div className="bg-[#0A3147] text-white rounded-lg shadow-lg p-6 w-80 mx-auto" ref={cardRef}>
        {/* Profile Picture */}
        <div className="flex justify-center mb-2">
            <img
            src={profilePicture}
            alt={name}
            className="w-20 h-20 rounded-full object-cover"
            />
        </div>
        {/* Name and Position */}
        <h2 className="text-2xl font-bold text-white text-center">{name}</h2>
        <p className="text-s text-center text-accent">{position} at {company}</p>
        {/* Contact Info */}
        <div className="text-xs text-center flex flex-col gap-1">
            <p className="flex items-center justify-center space-x-2 text-accent leading-none">
              {/* <img src={emailIcon} alt="email-logo" className={`max-w-xs`}/> */}
              {/* <span className={`text-sm flex items-center justify-center`}>
                <FaEnvelope className="h-[1em] w-[1em]"  />
                </span>  */}
              <span>E: {email}</span>
            </p>
            <p className="flex items-center justify-center space-x-2 text-accent">
              {/* <FaPhoneAlt />  */}
              <span>M: {mobile}</span>
            </p>
            {/* {socialMedia?.linkedIn && (
            <p className="flex items-center justify-center space-x-2 text-gray-300">
                <FaLinkedin /> <span>{name}</span>
            </p>
            )} */}
        </div>
        {/* QR Code */}
        <div className="flex justify-center my-4">
            <canvas ref={qrCanvasRef} />
        </div>
        {/* Footer */}
        { identityName && <p className="text-center text-primary text-xs mt-4">Powered by {identityName}</p> }
        {/* Action Buttons */}
        </div>
        <div className="w-80 mt-4 flex flex-col space-y-2">
            <button
                onClick={handleDownloadVCF}
                className="bg-primary bg-opacity-90 hover:bg-primary text-white py-2 px-4 rounded-md"
            >
                Save Contact (VCF)
            </button>
            <button
                onClick={handleDownloadCardAsPNG}
                className="bg-primary bg-opacity-90 hover:bg-primary text-white py-2 px-4 rounded-md"
            >
                Download Card (PNG)
            </button>
        </div>
      </>
  );
};
