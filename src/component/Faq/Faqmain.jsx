import React from "react";
import Faq from "./Faq";
import "./Faq.css";
const Faqmain = () => {
  const faqData = [
    {
      question: "How Long Does the Visit Take?",
      answer:
        "It typically takes around 60 minutes. Remember, you will be getting a FREE body composition analysis and customized IV therapy plan at your first visit!",
    },
    {
      question: "How Long Does the Visit Take?",
      answer:
        "It typically takes around 60 minutes. Remember, you will be getting a FREE body composition analysis and customized IV therapy plan at your first visit!",
    },
    {
      question: "How Long Does the Visit Take?",
      answer:
        "It typically takes around 60 minutes. Remember, you will be getting a FREE body composition analysis and customized IV therapy plan at your first visit!",
    },
    {
      question: "How Long Does the Visit Take?",
      answer:
        "It typically takes around 60 minutes. Remember, you will be getting a FREE body composition analysis and customized IV therapy plan at your first visit!",
    },
    {
      question: "How Long Does the Visit Take?",
      answer:
        "It typically takes around 60 minutes. Remember, you will be getting a FREE body composition analysis and customized IV therapy plan at your first visit!",
    },
  ];
  return (
    <div className="faq-outer">
      <div className="faq">
      <h1>
        <strong>Frequently Asked Questions</strong>
      </h1>
      <p className="mt-4">
        And because
        <strong>we want you to feel 100% confident in your investment,</strong>
      </p>

      <p>here are a few of the questions we commonly get asked:</p>
      </div>
      <div className="container d-flex flex-column justify-content-center mt-5 w-fit-content">
        {faqData.map((data) => (
          <Faq Question={data.question} Answer={data.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faqmain;
