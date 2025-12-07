// @ts-nocheck
import React, { useState } from 'react';
import { 
  Zap, Shield, Users, Layers, CheckCircle2, Cpu, 
  TrendingUp, FileText, ThumbsUp, HelpCircle, 
  ChevronDown, ChevronUp, Quote, ArrowRight,
  // Added new icons for the workflow
  Search, DollarSign, Activity 
} from 'lucide-react';

const BenefitsPage = () => {
  // State for FAQ Accordion
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { question: "Is Unitorium compatible with our existing systems?", answer: "Yes, our Smart Project Proposal system is built with an API-first approach (Node.js), allowing seamless integration with your existing databases and auth providers." },
    { question: "How secure is our proposal data?", answer: "We use Supabase with Row Level Security (RLS) and AES-256 encryption. Your proprietary research and evaluation data is accessible only to authorized roles." },
    { question: "Can we customize the evaluation criteria?", answer: "Absolutely. Admins can define custom rubrics, scoring weights, and approval stages to match your specific institutional requirements." },
    { question: "Does the AI generate the whole proposal?", answer: "No, the AI acts as a copilot. It provides suggestions, checks for clarity, and auto-fills repetitive data, but the proponent remains in full control of the scientific content." }
  ];

  return (
    <div className="min-h-screen pt-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Unitorium?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Built for scale, designed for humans. We bridge the gap between complex proposal processes and efficient outcomes.</p>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {[
            { icon: <Zap size={30} />, title: "Rapid Deployment", text: "We move fast. Get your MVP or full solution up and running in weeks, not months." },
            { icon: <Users size={30} />, title: "Personalized Support", text: "Direct access to our core team. We build relationships, not just tickets." },
            { icon: <Layers size={30} />, title: "Flexible Architecture", text: "Modular design that adapts quickly to your specific business needs and feedback." },
            { icon: <CheckCircle2 size={30} />, title: "Transparent Pricing", text: "Startup-friendly costs. No hidden enterprise fees or complex licensing structures." },
            { icon: <Shield size={30} />, title: "Built-in Security", text: "Modern security standards implemented from day one to protect your data." },
            { icon: <Cpu size={30} />, title: "Future-Proof Tech", text: "Leveraging the latest scalable frameworks so you don't have to rebuild later." }
          ].map((benefit, index) => (
            <div key={index} className="bg-black p-8 rounded-2xl border border-gray-900 hover:border-blue-600/50 hover:bg-gray-900 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center mb-6 text-white group-hover:bg-blue-600 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.text}</p>
            </div>
          ))}
        </div>

        {/* IMPACT STATS */}
        <div className="mb-32 bg-blue-900/10 rounded-3xl p-12 border border-blue-900/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="text-center mb-12 relative z-10">
            <h3 className="text-3xl font-bold mb-4">Real Impact</h3>
            <p className="text-gray-400">See how our Smart Project Proposal system transforms workflows.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
            <div className="p-6">
              <div className="text-5xl font-bold text-blue-500 mb-2">50%</div>
              <div className="text-xl font-semibold text-white mb-2">Faster Approvals</div>
              <p className="text-gray-400 text-sm">Reduce turnaround time from submission to final sign-off.</p>
            </div>
            <div className="p-6 border-l-0 md:border-l border-r-0 md:border-r border-gray-800">
              <div className="text-5xl font-bold text-purple-500 mb-2">99%</div>
              <div className="text-xl font-semibold text-white mb-2">Data Accuracy</div>
              <p className="text-gray-400 text-sm">AI-driven auto-fill eliminates manual entry errors.</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-green-500 mb-2">24/7</div>
              <div className="text-xl font-semibold text-white mb-2">System Uptime</div>
              <p className="text-gray-400 text-sm">Reliable access for proponents and evaluators anytime.</p>
            </div>
          </div>
        </div>

        {/* WORKFLOW STEPS - UPDATED */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Streamlined Workflow</h3>
            <p className="text-gray-400">A comprehensive journey from concept to successful completion.</p>
          </div>
          <div className="relative">
            {/* Connecting Line (Hidden on mobile) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2 z-0"></div>
            
            {/* Grid updated to 5 columns for larger screens to fit the new steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {[
                { 
                  icon: <Search size={24} />, 
                  title: "Submit & AI Scan", 
                  desc: "Proponent submits proposal. AI checks similarity with existing projects to ensure uniqueness." 
                },
                { 
                  icon: <Shield size={24} />, 
                  title: "R&D Screening", 
                  desc: "R&D department reviews the proposal to ensure it meets quality standards before evaluation." 
                },
                { 
                  icon: <TrendingUp size={24} />, 
                  title: "Evaluate", 
                  desc: "Evaluators score the project. Results are returned to R&D for final assessment." 
                },
                { 
                  icon: <DollarSign size={24} />, 
                  title: "Endorse & Fund", 
                  desc: "R&D endorses the ready project. Funding is released to kickstart development." 
                },
                { 
                  icon: <Activity size={24} />, 
                  title: "Monitor Success", 
                  desc: "R&D monitors the proponent's progress continuously until project success." 
                }
              ].map((step, idx) => (
                <div key={idx} className="bg-black p-6 rounded-xl border border-gray-800 text-center hover:border-blue-500 transition-colors h-full flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-900/20 text-blue-400 rounded-full flex items-center justify-center mb-4 border border-blue-500/30 flex-shrink-0">
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-400 leading-snug">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="mb-32">
           <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">What Users Say</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 relative">
              <Quote className="text-blue-900 absolute top-6 left-6" size={48} />
              <p className="text-gray-300 relative z-10 mb-6 italic">"The AI feedback loop helped our researchers refine their proposals before submission, significantly reducing the back-and-forth corrections. It's a massive time saver."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">M</div>
                <div>
                  <h4 className="font-bold text-white">Maria S.</h4>
                  <p className="text-xs text-blue-400">Research Director</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 relative">
              <Quote className="text-blue-900 absolute top-6 left-6" size={48} />
              <p className="text-gray-300 relative z-10 mb-6 italic">"As an evaluator, having all the data auto-tagged and organized in one dashboard makes scoring so much easier. The UI is intuitive and fast."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">J</div>
                <div>
                  <h4 className="font-bold text-white">John D.</h4>
                  <p className="text-xs text-blue-400">Technical Evaluator</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="mb-32 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center">
                <HelpCircle className="mr-3 text-blue-500" /> Frequently Asked Questions
            </h3>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                <button 
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-gray-800 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  {openFaq === index ? <ChevronUp className="text-blue-500" /> : <ChevronDown className="text-gray-500" />}
                </button>
                <div className={`px-6 pb-6 text-gray-400 transition-all duration-300 ${openFaq === index ? 'block' : 'hidden'}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA BOTTOM */}
        <div className="mb-20 p-12 rounded-3xl bg-gradient-to-r from-blue-900 to-black border border-blue-800 text-center">
           <h2 className="text-3xl font-bold text-white mb-4">Ready to modernize your workflow?</h2>
           <p className="text-gray-300 mb-8 max-w-xl mx-auto">Join the growing list of organizations using Unitorium to streamline their proposal management.</p>
           <button className="px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center mx-auto">
             Get Started Now <ArrowRight className="ml-2" size={20} />
           </button>
        </div>

      </div>
    </div>
  );
};

export default BenefitsPage;