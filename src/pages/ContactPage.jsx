import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolioData';
import { ScrollReveal } from '../components/ScrollReveal';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields before sending.' });
      return;
    }

    setLoading(true);
    setStatus(null);

    const publicKey = '3pApLSwcAD6Ba5Z_F';
    const serviceID = 'service_9dsieua';
    const templateID = 'template_oxr2dvf';
    const autoReplyTemplate = 'template_31xex6k';

    try {
      emailjs.init(publicKey);

      await emailjs.send(serviceID, templateID, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      });

      try {
        await emailjs.send(serviceID, autoReplyTemplate, {
          user_email: formData.email,
          user_name: formData.name
        });
      } catch (autoErr) {
        console.warn('Auto reply notice:', autoErr);
      }

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. I will get back to you shortly!'
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 sm:space-y-12 transition-colors duration-300">
      {/* Header */}
      <ScrollReveal className="section-header">
        <span className="section-subtitle">Get In Touch</span>
        <h1 className="section-title">Contact & Connect</h1>
        <p className="section-description">
          Whether you have a anything in mind, an opportunity to discuss, or just want to connect, send a message below!
        </p>
      </ScrollReveal>

      {/* Form Container */}
      <ScrollReveal delay={150} className="max-w-2xl mx-auto">
        <div className="glass-card p-6 sm:p-8 border border-slate-200 dark:border-slate-800">
          <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-6">
            Send a Direct Message
          </h3>

          {status && (
            <div
              className={`mb-6 p-4 rounded-xl text-sm flex items-start gap-3 border ${
                status.type === 'success'
                  ? 'bg-emerald-100 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300'
                  : 'bg-rose-100 dark:bg-rose-950/60 border-rose-300 dark:border-rose-500/40 text-rose-800 dark:text-rose-300'
              }`}
            >
              {status.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 shrink-0 text-rose-600 dark:text-rose-400 mt-0.5" />
              )}
              <span>{status.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                Your Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 focus:border-indigo-500 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none transition-all shadow-sm"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                Your Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="subha@gmail.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 focus:border-indigo-500 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none transition-all shadow-sm"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                Your Message *
              </label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi Subhasish, I would like to discuss..."
                className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 focus:border-indigo-500 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none transition-all resize-none shadow-sm"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Social Channels</span>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-all flex items-center gap-2 text-xs font-medium"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-all flex items-center gap-2 text-xs font-medium"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-white transition-all flex items-center gap-2 text-xs font-medium"
                >
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </div>
            </div>
          </form>
        </div>
      </ScrollReveal>
    </div>
  );
};
