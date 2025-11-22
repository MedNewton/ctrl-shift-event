import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Can Clara integrate with our existing tech stack?",
      answer: "Yes, we specialize in custom integrations. Whether you use Salesforce, HubSpot, or custom legacy systems, we can build bridges to automate your workflows."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most clients see initial value within 45 days. Our 'First Wins' program focuses on high-impact, low-effort automations in the first 2 weeks."
    },
    {
      question: "What if we don't know what needs automating?",
      answer: "That's exactly where we start. Our audit phase identifies bottlenecks and calculates potential ROI before we write a single line of code."
    },
    {
      question: "Is our data secure?",
      answer: "Security is our priority. We are SOC2 compliant and use enterprise-grade encryption for all data handling and automation processes."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer maintenance packages to ensure your automations keep running smoothly as your business evolves and tools update."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">FAQ</span>
        <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">
          Your questions <span className="italic text-gray-500">answered.</span>
        </h2>
        <p className="text-gray-500">Everything you need to know about how we work.</p>
      </div>

      <div className="container mx-auto max-w-3xl bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-lg font-medium py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
