import React, { useState } from "react";
import {
  Mail,
  Send,
  Phone,
  MapPin,
  Linkedin,
  Github as GitHub,
} from "lucide-react";

const ContactContent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    message: string;
    type: "success" | "error" | "";
  }>({
    message: "",
    type: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: "", type: "" });

    // Simulate API call
    setTimeout(() => {
      // In a real app, you would send the form data to your backend
      setStatus({
        message: "Message sent successfully! I will get back to you soon.",
        type: "success",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="contact-content h-full overflow-auto">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Mail className="text-mac-highlight" />
        <span className="leading-tight">Get In Touch</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="glass-input"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="glass-input"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="glass-input"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="glass-input resize-none"
                required
              ></textarea>
            </div>

            {status.message && (
              <div
                className={`mb-4 p-3 rounded ${
                  status.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary w-full flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></span>
              ) : (
                <Send className="w-4 h-4 mr-2" />
              )}
              Send Message
            </button>
          </form>
        </div>

        <div>
          <div className="bg-white/70 p-5 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Contact Information</h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-mac-highlight mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a
                    href="mailto:angeshpc91@gmail.com"
                    className="text-mac-text-secondary hover:text-mac-highlight"
                  >
                    angeshpc91@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-mac-highlight mt-0.5" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a
                    href="tel:+918080381770"
                    className="text-mac-text-secondary hover:text-mac-highlight"
                  >
                    +91 8080381770
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-mac-highlight mt-0.5" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-mac-text-secondary">Mumbai, India</p>
                </div>
              </div>

              <div className="flex items-start">
                <Linkedin className="w-5 h-5 mr-3 text-mac-highlight mt-0.5" />
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/angesh-chettiar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mac-text-secondary hover:text-mac-highlight"
                  >
                    linkedin.com/in/angesh-chettiar
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <GitHub className="w-5 h-5 mr-3 text-mac-highlight mt-0.5" />
                <div>
                  <h3 className="font-medium">GitHub</h3>
                  <a
                    href="https://github.com/angeshpc91"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mac-text-secondary hover:text-mac-highlight"
                  >
                    github.com/angeshpc91
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-white/70 p-5 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Availability</h2>
            <p className="text-mac-text-secondary">
              I'm currently available for new opportunities as a Principal Lead.
              With 11+ years of experience in JavaScript, TypeScript, and React,
              I'm ready to help your team build robust, scalable frontend
              systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
