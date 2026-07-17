import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is BlogSphere?",
      answer:
        "BlogSphere is a platform where users can create, edit, and manage blogs with a clean and modern interface.",
    },
    {
      question: "Do I need an account to write blogs?",
      answer:
        "Yes. You need to sign up and log in before creating or managing your blogs.",
    },
    {
      question: "Can I edit my blog after publishing?",
      answer:
        "Absolutely! You can edit or delete your blogs anytime after logging in.",
    },
    {
      question: "Is BlogSphere free to use?",
      answer:
        "Yes! BlogSphere is completely free for all users.",
    },
    {
      question: "Can I save blogs as drafts?",
      answer:
        "Yes. While writing a blog, you can choose the 'Draft' status and publish it later.",
    },
  ];

  return (
    <section
      id="faq"
      className="bg-[#0B1120] text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Everything you need to know about BlogSphere.
        </p>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <span className="text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;