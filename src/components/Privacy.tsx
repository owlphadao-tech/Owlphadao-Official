"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Database, 
  Scale, 
  Cpu, 
  Globe, 
  Users, 
  Lock, 
  Clock, 
  UserCheck, 
  Link as LinkIcon, 
  RefreshCw, 
  Mail 
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

export default function PrivacyPolicy() {
  const sections = [
    {
      id: "1",
      title: "Introduction",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p>Owlpha Digital Hub Limited (&quot;OwlphaDAO,&quot; &quot;the Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates digital infrastructure, software engines, and platforms, including the Talent Support Unit (TSU), Future Work Academy (FWA), and associated applications and dashboards (collectively, the &quot;Platforms&quot;).</p>
          <p>We respect your personal privacy and are committed to protecting the integrity, confidentiality, and security of your data. This Privacy Policy outlines how we collect, process, store, disclose, and safeguard information when you access or interact with our Platforms, in compliance with the Nigeria Data Protection Act (NDPA) 2023 and applicable international data protection standards.</p>
        </div>
      )
    },
    {
      id: "2",
      title: "Information We Collect",
      icon: Database,
      content: (
        <div className="space-y-6">
          <p>We collect information directly from you, automatically through system telemetry, and via decentralized network interactions.</p>
          
          <div>
            <h4 className="text-[#E48C2A] font-['Space_mono',monospace] font-bold mb-2">Personal Identifiable Information (PII)</h4>
            <ul className="list-disc pl-5 space-y-2 marker:text-white/30">
              <li><strong className="text-white">Account Information:</strong> Name, email address, phone number, and communication handles (e.g., WhatsApp, Telegram, Discord).</li>
              <li><strong className="text-white">Professional & Skill Profile:</strong> Primary skillset, project descriptions, founder bio, portfolio links, and professional profiles (e.g., LinkedIn, X, GitHub).</li>
              <li><strong className="text-white">Identity Verification:</strong> Documentation provided for verified roles, partner onboarding, or KYC compliance when required.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#E48C2A] font-['Space_mono',monospace] font-bold mb-2">Operational & Platform Telemetry Data</h4>
            <ul className="list-disc pl-5 space-y-2 marker:text-white/30">
              <li><strong className="text-white">Sprint & Activity Logs:</strong> Daily progress updates, public proof-of-work links, submitted milestones, and ticket submissions on the TSU dashboard.</li>
              <li><strong className="text-white">Technical Logs:</strong> Internet Protocol (IP) addresses, browser type, operating system details, access timestamps, and session diagnostics.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#E48C2A] font-['Space_mono',monospace] font-bold mb-2">Web3 & Blockchain Data</h4>
            <ul className="list-disc pl-5 space-y-2 marker:text-white/30">
              <li><strong className="text-white">Public Ledger Identifiers:</strong> Public cryptographic wallet addresses (e.g., Solana, Ethereum, or other supported networks) and associated public transaction signatures.</li>
            </ul>
            <div className="mt-3 p-4 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-400">
              <strong>Note:</strong> Blockchain transactions and wallet interactions are inherently public and recorded on immutable decentralized ledgers.
            </div>
          </div>
        </div>
      )
    },
    {
      id: "3",
      title: "Legal Grounds for Processing",
      icon: Scale,
      content: (
        <div className="space-y-4">
          <p>We process your data strictly under the following lawful bases:</p>
          <ul className="list-none space-y-3">
            {[
              { label: "Contractual Necessity", text: "To deliver platform functionality, provision user dashboards, verify daily sprints, and enforce platform rules." },
              { label: "Legitimate Interests", text: "To maintain ecosystem security, prevent system abuse, optimize platform performance, and protect proprietary infrastructure." },
              { label: "Consent", text: "Where you have explicitly opted into specific communication channels, marketing sequences, or community circles." },
              { label: "Legal Compliance", text: "To fulfill mandatory statutory, regulatory, or tax obligations under Nigerian and international law." }
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#f74f4f] shrink-0" />
                <span><strong className="text-white">{item.label}:</strong> {item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: "4",
      title: "How We Use Your Information",
      icon: Cpu,
      content: (
        <div className="space-y-4">
          <p>We use the collected information to:</p>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Provision and maintain access to the TSU and FWA platforms.",
              "Validate daily sprint logs, track build-in-public metrics, and manage accountability programs.",
              "Process support tickets, account inquiries, and operational communications.",
              "Secure the ecosystem against unauthorized access, malicious automated bots, and bad actors.",
              "Deliver technical infrastructure, workflow integrations, and software upgrades.",
              "Provide vetted access to ecosystem tooling and strategic partner integrations."
            ].map((item, idx) => (
              <li key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-3">
                <div className="w-2 h-2 mt-1.5 rounded-full bg-[#E48C2A] shrink-0" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: "5",
      title: "Public Blockchain & On-Chain Data Disclaimer",
      icon: Globe,
      content: (
        <div className="space-y-4">
          <p>Certain components of the OwlphaDAO ecosystem interface with decentralized networks.</p>
          <ul className="list-none space-y-4">
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#E48C2A] shrink-0" />
              <span><strong className="text-white">Immutability:</strong> Data recorded directly onto a blockchain (such as smart contract interactions, on-chain certifications, or token transfers) is public, permanent, and cannot be modified, deleted, or erased by Owlpha Digital Hub Limited.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#E48C2A] shrink-0" />
              <span><strong className="text-white">Off-Chain Separation:</strong> Personally identifiable information (such as email addresses, internal tickets, and private phone numbers) is never stored directly on-chain.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "6",
      title: "Data Sharing and Third-Party Disclosures",
      icon: Users,
      content: (
        <div className="space-y-4">
          <p>We do not sell, rent, or trade your personal data. We only share information under strict confidentiality standards in the following scenarios:</p>
          <ul className="space-y-3">
            {[
              { label: "Infrastructure & Hosting Providers", text: "Trusted third-party cloud infrastructure, database hosting services, and automated message gateways necessary to run the Platforms." },
              { label: "Operational Collaborators", text: "Core team leads and system administrators bound by strict non-disclosure and intellectual property assignment agreements." },
              { label: "Legal & Regulatory Obligations", text: "When compelled by law, court order, or authorized regulatory body operating within valid legal jurisdiction." }
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#f74f4f] shrink-0" />
                <span><strong className="text-white">{item.label}:</strong> {item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: "7",
      title: "Security Measures & Technical Safeguards",
      icon: Lock,
      content: (
        <div className="space-y-4">
          <p>Owlpha Digital Hub Limited deploys rigorous technical and organizational measures to safeguard user data:</p>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              { label: "Encryption", text: "All web traffic is encrypted in transit using Transport Layer Security (TLS/HTTPS), and sensitive database records are protected with encryption at rest." },
              { label: "Access Control", text: "System administrative access is governed by strict Role-Based Access Control (RBAC) and the principle of least privilege." },
              { label: "Environment Isolation", text: "Application backends, databases, and message brokers are deployed in containerized environments protected by network firewalls." },
              { label: "Credential Protection", text: "Administrative and API authentication keys are rotated regularly and protected by multi-factor authentication (MFA)." }
            ].map((item, idx) => (
              <li key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col gap-2">
                <strong className="text-[#E48C2A] font-['Space_mono',monospace] text-sm">{item.label}</strong>
                <span className="text-sm text-gray-400">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: "8",
      title: "Data Retention",
      icon: Clock,
      content: (
        <ul className="space-y-4">
          <li className="flex gap-3">
            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#E48C2A] shrink-0" />
            <span><strong className="text-white">Off-Chain Personal Data:</strong> Retained only as long as your account remains active or as needed to deliver platform services, resolve support tickets, and comply with statutory legal requirements.</span>
          </li>
          <li className="flex gap-3">
            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#E48C2A] shrink-0" />
            <span><strong className="text-white">Account Deletion:</strong> Upon verified account termination, off-chain identifiable data is deleted or permanently anonymized from active operational databases within 30 days, excluding system backup cycles and statutory compliance records.</span>
          </li>
        </ul>
      )
    },
    {
      id: "9",
      title: "Your Data Rights",
      icon: UserCheck,
      content: (
        <div className="space-y-4">
          <p>Under the Nigeria Data Protection Act (NDPA) and recognized international privacy frameworks, you have the right to:</p>
          <ul className="grid md:grid-cols-2 gap-3">
            {[
              { label: "Access", text: "Request a copy of the off-chain personal data we hold about you." },
              { label: "Correction", text: "Request rectification of inaccurate, out-of-date, or incomplete records." },
              { label: "Erasure", text: 'Request deletion of your off-chain personal data (the "Right to be Forgotten").' },
              { label: "Restriction & Objection", text: "Restrict or object to the processing of your data under specific conditions." },
              { label: "Withdraw Consent", text: "Revoke previously granted consent for marketing or non-essential communication at any time." }
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#f74f4f] shrink-0" />
                <span className="text-sm"><strong className="text-white block">{item.label}</strong> {item.text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 p-4 bg-[#E48C2A]/10 border border-[#E48C2A]/20 rounded-lg text-sm text-gray-300">
            To exercise any of these rights, submit a formal request via the TSU Support Ticket System or email our compliance desk.
          </div>
        </div>
      )
    },
    {
      id: "10",
      title: "Third-Party Links & Integrations",
      icon: LinkIcon,
      content: (
        <p>Our Platforms may link to external tools, platforms, or repositories (including LinkedIn, X, GitHub, Paystack, and WhatsApp). We do not control and are not responsible for the privacy practices or content of third-party services. We encourage you to review their independent privacy policies.</p>
      )
    },
    {
      id: "11",
      title: "Policy Updates",
      icon: RefreshCw,
      content: (
        <p>We reserve the right to modify this Privacy Policy to reflect technical upgrades, platform expansions, or regulatory changes. Any updates will be posted directly to this page with an updated &quot;Last Updated&quot; date. Continued use of our Platforms constitutes acceptance of the revised terms.</p>
      )
    },
    {
      id: "12",
      title: "Contact & Grievance Information",
      icon: Mail,
      content: (
        <div className="space-y-4">
          <p>For questions, data requests, or compliance inquiries regarding this Privacy Policy, contact:</p>
          <div className="bg-[#070707] border border-white/10 p-6 rounded-xl space-y-3 font-['Space_mono',monospace] text-sm">
            <div className="flex flex-col md:flex-row gap-2 md:gap-8 border-b border-white/5 pb-3">
              <span className="text-gray-500 w-32">Company:</span>
              <span className="text-white font-bold">Owlpha Digital Hub Limited</span>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-8 border-b border-white/5 pb-3">
              <span className="text-gray-500 w-32">Platform:</span>
              <span className="text-white">Talent Support Unit (TSU) Support Portal at tsu.fowacademy.org</span>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-8 border-b border-white/5 pb-3">
              <span className="text-gray-500 w-32">Inquiries:</span>
              <a href="mailto:legal@owlphadao.org" className="text-[#E48C2A] hover:underline">legal@owlphadao.org</a> <span className="text-gray-500">(or your primary support desk email)</span>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-8">
              <span className="text-gray-500 w-32">Location:</span>
              <span className="text-white">Lagos, Nigeria</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#000000] text-gray-300 font-sans selection:bg-[#E48C2A]/30">
      
      {/* Animated Ambient Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-gradient-to-b from-[#E48C2A]/5 to-transparent blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 mask-image-[radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      </div>

      <main className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        
        {/* Document Header */}
        <motion.div 
          initial="hidden" animate="visible" variants={fadeInUp}
          className="mb-16 border-b border-white/10 pb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <Shield size={14} className="text-[#f74f4f]" />
            <h3 className="text-[#f74f4f] font-['Space_mono',monospace] font-bold tracking-widest text-xs uppercase">Legal Documentation</h3>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-['Space_mono',monospace] font-black tracking-tight text-white mb-6">
            Privacy Policy
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-['Space_mono',monospace]">
            <div>
              <p className="text-gray-500 mb-1">Entity Name</p>
              <p className="text-[#E48C2A] font-bold">Owlpha Digital Hub Limited</p>
              <p className="text-xs text-gray-400 mt-1">Operating as &quot;OwlphaDAO&quot;</p>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500 mb-1">Effective Date</p>
                  <p className="text-white">August 17, 2026</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Last Updated</p>
                  <p className="text-white">August 17, 2026</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-500 mb-1">Registered Jurisdiction</p>
                <p className="text-white">Federal Republic of Nigeria</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Policy Content Sections */}
        <motion.div 
          variants={stagger} initial="hidden" animate="visible"
          className="space-y-8"
        >
          {sections.map((section, idx) => (
            <motion.section 
              key={section.id} 
              variants={fadeInUp}
              className="group relative rounded-[1.5rem] bg-[#070707] border border-white/5 p-8 transition-colors duration-500 hover:border-white/10 overflow-hidden"
            >
              {/* Subtle section highlight on hover */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#E48C2A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 bg-white/5">
                  <section.icon size={20} className="text-[#E48C2A]" />
                </div>
                <h2 className="text-2xl font-['Space_mono',monospace] font-bold text-white flex items-center gap-3">
                  <span className="text-gray-600 text-lg">{section.id}.</span> {section.title}
                </h2>
              </div>
              
              <div className="text-gray-300 leading-relaxed font-light">
                {section.content}
              </div>
            </motion.section>
          ))}
        </motion.div>

      </main>
    </div>
  );
}