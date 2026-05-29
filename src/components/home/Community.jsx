import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const Community = () => {
  const events = [
    {
      id: 1,
      type: 'Twitter Space',
      title: 'Scaling Web3 Utility Globally',
      date: 'June 12, 2026',
      time: '6:00 PM UTC',
      status: 'Upcoming',
      actionUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Scaling+Web3+Utility+Globally&dates=20260612T180000Z/20260612T190000Z&details=Join+our+Twitter+Space+for+OwlphaDAO.'
    },
    {
      id: 2,
      type: 'Workshop',
      title: 'Building with Future Of Work Infrastructure',
      date: 'June 20, 2026',
      time: '4:00 PM UTC',
      status: 'Registration Open',
      actionUrl: '#' 
    },
    {
      id: 3,
      type: 'AMA',
      title: 'Inside the Owlphalab Incubation',
      date: 'July 5, 2026',
      time: '5:30 PM UTC',
      status: 'Upcoming',
      actionUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Inside+the+Owlphalab+Incubation&dates=20260705T173000Z/20260705T183000Z&details=Join+our+AMA+session.'
    }
  ];

  return (
    <div className="relative z-10 w-full bg-[var(--color-light)] pb-24 overflow-hidden">
      
      {/* Animated Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[-10%] w-[40rem] h-[40rem] bg-[var(--color-primary)]/[0.05] rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ y: [0, 50, 0], x: [0, -40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[10%] left-[-10%] w-[45rem] h-[45rem] bg-blue-500/[0.05] rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp} className="mb-4 inline-block px-4 py-1.5 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
              <span className="text-sm font-semibold tracking-wide text-[var(--color-primary)] uppercase">
                Join The Movement
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--color-dark)] mb-6 max-w-4xl mx-auto">
              Connect, Collaborate, and <span className="text-[var(--color-primary)]">Innovate.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[var(--color-secondary)] max-w-3xl mx-auto leading-relaxed">
              Education and community are at the core of adoption. Engage with global builders, participate in our live events, and help shape the future of the OwlphaDAO ecosystem.
            </motion.p>
          </motion.div>
        </section>

        {/* Upcoming Events Section */}
        <section className="px-6 max-w-5xl mx-auto mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="flex justify-between items-end mb-8">
              <h2 className="text-3xl font-bold text-[var(--color-dark)]">Upcoming Events</h2>
              <button className="text-[var(--color-primary)] font-medium hover:text-[var(--color-dark)] transition-colors duration-300">
                View Calendar &rarr;
              </button>
            </motion.div>

            <div className="space-y-4">
              {events.map((event) => (
                <motion.div 
                  key={event.id}
                  variants={fadeUp}
                  className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-8 bg-white/50 backdrop-blur-sm border border-[var(--color-secondary)]/10 rounded-2xl hover:border-[var(--color-primary)]/30 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] bg-[var(--color-primary)]/10 rounded-md">
                        {event.type}
                      </span>
                      <span className="text-sm text-[var(--color-secondary)] font-medium">
                        {event.date} • {event.time}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                      {event.title}
                    </h3>
                  </div>
                  
                  <a 
                    href={event.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto inline-block text-center bg-[var(--color-dark)] text-[var(--color-light)] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[var(--color-primary)] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(228,140,42,0.3)]"
                  >
                    {event.status === 'Registration Open' ? 'Register Now' : 'Set Reminder'}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Community Channels */}
        <section className="px-6 max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={fadeUp} className="p-10 border border-[var(--color-secondary)]/10 rounded-3xl bg-[var(--color-dark)] text-[var(--color-light)] flex flex-col items-center text-center group hover:border-[var(--color-primary)]/50 transition-all duration-300">
              <div className="w-16 h-16 bg-[var(--color-light)]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--color-primary)]/20 transition-all duration-300">
                <svg className="w-8 h-8 text-[var(--color-light)] group-hover:text-[var(--color-primary)] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Discord</h3>
              <p className="text-[var(--color-secondary)] mb-6">
                Join the core builders and contributors. This is where development sprints are born and executed.
              </p>
              <button className="mt-auto border border-[var(--color-light)]/20 text-[var(--color-light)] px-6 py-2.5 rounded-full font-semibold hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-300">
                Join Server
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="p-10 border border-[var(--color-secondary)]/10 rounded-3xl bg-white text-[var(--color-dark)] flex flex-col items-center text-center group hover:border-[var(--color-primary)]/50 transition-all duration-300 shadow-sm">
              <div className="w-16 h-16 bg-[var(--color-dark)]/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--color-primary)]/10 transition-all duration-300">
                <svg className="w-8 h-8 text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">X (Twitter)</h3>
              <p className="text-[var(--color-secondary)] mb-6">
                Follow our journey of building in public. Stay updated on milestone shipments and daily progress.
              </p>
              <button className="mt-auto border border-[var(--color-dark)]/20 text-[var(--color-dark)] px-6 py-2.5 rounded-full font-semibold hover:bg-[var(--color-dark)] hover:text-[var(--color-light)] transition-all duration-300">
                Follow Us
              </button>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Community;