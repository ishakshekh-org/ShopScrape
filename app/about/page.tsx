import { TextGenerate } from "@/components/animated_components/TextGnerateEffect";
import { Tooltip } from "@/components/animated_components/ToolTip";

const index = () => {
  const words =
    "Welcome to our website, a unique platform designed and developed by Ishak, Aadil, and Shreyansh as a part of our 4th Sem project during our 2nd year. Our website is a testament to our passion for web development and our commitment to providing efficient and reliable solutions.We have built this website using the latest technologies, including Next.js 14, Tailwind CSS, Cron jobs, and TypeScript. These cutting-edge technologies have enabled us to create a robust and efficient web scraping tool that can cater to a wide range of data extraction needs.Our goal is to provide a user-friendly interface that allows users to extract Products from Amazon effortlessly. We believe in the power of data and aim to make it accessible to everyone, regardless of their technical expertise.We are proud of what we have achieved with this project and are excited to share it with you. We hope you find our website useful and look forward to your feedback and suggestions. Thank you for visiting!";

  return (
    <>
      <section className="px-6 md:px-20 py-20 w-full h-screen">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-5">
            <TextGenerate words="About US" className="text-5xl sm:text-7xl" />
          </div>

          <div className="mt-5">
            <Tooltip />
          </div>

          <div className="text-center ">
            <TextGenerate words={words} className="sm:text-2xl text-lg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
