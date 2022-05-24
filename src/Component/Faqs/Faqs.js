import React, { useState } from "react";
import "./Faqs.css";

const Faqs = () => {
  const [accordian, setAccordian] = useState(-1);

  const toggle = (index) => {
    if (index === accordian) {
      setAccordian(-1);
      return;
    }
    setAccordian(index);
  };

  return (
    <>
      <div className="faqs">
        <div className="container">
          <div className="faqs-title">
            <p>Faqs</p>
          </div>

          <div className="accordian">
            {accordianData &&
              accordianData.map((data, index) => {
                return (
                  <div
                    className="accordian-faqs"
                    key={index}
                    onClick={() => toggle(index)}
                  >
                    <div className="wrapperFlex">
                      <div className="faqs-heading">
                        <p className={accordian === index ? "active" : ""}>
                          {data.question}
                        </p>
                      </div>
                      <div className="vertical">
                        {accordian === index ? (
                          <>
                            <p> - </p>
                          </>
                        ) : (
                          <>
                            <p> + </p>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="faqs-content">
                      <p
                        className={accordian === index ? "active" : "inactive"}
                      >
                        {data.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;

const accordianData = [
  {
    question: "When will BuyCoin be listed on exchanges?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    question: "When will BuyCoin be listed on exchanges?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    question: "When will BuyCoin be listed on exchanges?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    question: "When will BuyCoin be listed on exchanges?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    question: "When will BuyCoin be listed on exchanges?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];
