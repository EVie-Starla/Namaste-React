import { useState } from "react";

const Accordion = ({ sections }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  if (!sections || sections.length === 0) {
    return <p>No item available</p>;
  }

  return (
    <div className="accordion">
      {sections.map((section, index) => (
        <details
          className="accordion-item"
          key={index}
          open={openIndex === index}
        >
          <summary
            className={`accordion-title ${openIndex === index ? "open" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              toggleAccordion(index);
            }}
          >
            {section.title}
          </summary>
          <p className="accordion-content">{section.content}</p>
        </details>
      ))}
    </div>
  );
};
export default Accordion;
