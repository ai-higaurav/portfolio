import React, { useRef, useState } from "react";

const COPY_TIMEOUT = 3000;

const RightSide: React.FC = () => {
  const emailRef = useRef<HTMLParagraphElement>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      if (!emailRef.current || copied == true) return;

      await navigator.clipboard.writeText(emailRef.current.innerText);
      setCopied(true);
    } catch (error) {
      // Handle error properly, e.g., display an error message
      console.error(error);
    } finally {
      setTimeout(() => setCopied(false), COPY_TIMEOUT);
    }
  };

  return (
    <>
      <aside className="fixed bottom-0 right-5 2xl:right-10 w-fit hidden md:block" data-aos="fade-up">
        <section className="flex flex-col gap-16 justify-center items-center">
          <div className="relative">
            <p
              className="text-gray-200 hover:cursor-copy font-firacode text-[14px] absolute right-3 origin-bottom-right rotate-90 whitespace-nowrap font-thin"
              ref={emailRef}
              onClick={handleCopy}
              aria-label="Copy email address"
            >
              ai.higaurav@gmail.com
            </p>
          </div>
          <div className="w-[1px] h-24 bg-gray-100"></div>
        </section>
      </aside>
    </>
  );
};

export default RightSide;