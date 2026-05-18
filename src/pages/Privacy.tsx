import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <div className="pt-24 min-h-screen bg-surface">
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-display font-bold text-on-surface mb-8">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none text-on-surface-variant space-y-6">
            <p>Last Updated: May 17, 2024</p>
            <p>
              At S.H.E Hub Academy, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by S.H.E Hub Academy and how we use it.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-on-surface pt-4">1. Information We Collect</h2>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
              If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>

            <h2 className="text-2xl font-display font-bold text-on-surface pt-4">2. How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-on-surface pt-4">3. Log Files</h2>
            <p>
              S.H.E Hub Academy follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
            </p>

            <h2 className="text-2xl font-display font-bold text-on-surface pt-4">4. Cookies and Web Beacons</h2>
            <p>
              Like any other website, S.H.E Hub Academy uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-on-surface pt-4">5. Contact Us</h2>
            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at privacy@shehubacademy.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
