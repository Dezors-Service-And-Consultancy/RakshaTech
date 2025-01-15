import React, { useState } from "react";
import Question from "./comp/Question";

export default function Faq() {
  const data = [
    { id: 1,
      question: "What is RakshaTech?",
      answer: "RakshaTech is a technology company focused on providing innovative solutions.",
    },
    { id: 2,
      question: "How can I contact support?",
      answer: "You can contact support via email at support@rakshatech.com.",
    },
    { id: 3,
      question: "What services do you offer?",
      answer: "We offer a range of services including web development, mobile app development, and IT consulting.",
    },
    {
      id: 4,
      question: "How do I get started with a project?",
      answer: "To get started with a project, please contact us via email at support@rakshatech.com.",
    },
    {
      id: 5,
      question: "What is the typical project timeline?",
      answer: "The project timeline varies based on the scope and requirements.",
    },
    {
      id: 6,
      question: "Do you offer support after project completion?",
      answer: "Yes, we provide ongoing support and maintenance for our projects.",
    }
  ];
  const [showSelectedQ, setshowSelectedQ] = useState(null);
  const showAnswer = (index) => {
    setshowSelectedQ(index == showSelectedQ ? null : index);
  }
  return (
    <div className="h-screen p-40 bg-neutral-950 text-slate-50">
      <div className="space-y-12">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
        <div>
          {data.map((d, index) => (
            <Question key={d.id} data={d} onClick={() => showAnswer(index)} isOpen={showSelectedQ === index} />
          ))}
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 61528e56937e22cde362e4cc26ca5fc7644ca763
