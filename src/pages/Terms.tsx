import { motion } from 'motion/react';

export default function Terms() {
  return (
    <div className="pt-24 min-h-screen bg-surface">
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-display font-bold text-on-surface mb-8">Terms of Service</h1>
          <div className="prose prose-slate max-w-none text-on-surface-variant space-y-6">
            <p>Last Updated: May 17, 2024</p>
            
            <h2 className="text-2xl font-display font-bold text-on-surface pt-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using S.H.E Hub Academy's website and services, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-display font-bold text-on-surface pt-4">2. Description of Service</h2>
            <p>
              S.H.E Hub Academy provides consultancy, mentorship, and educational courses for teenagers and young adults. Services may be provided online or in-person.
            </p>

            <h2 className="text-2xl font-display font-bold text-on-surface pt-4">3. User Conduct</h2>
            <p>
              You agree to use our services for lawful purposes only. You are prohibited from using our site to transmit any material that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.
            </p>

            <h2 className="text-2xl font-display font-bold text-on-surface pt-4">4. Intellectual Property</h2>
            <p>
              All content provided by S.H.E Hub Academy, including but not limited to course materials, graphics, logos, and text, is the property of S.H.E Hub Academy and is protected by intellectual property laws. You may not reproduce or distribute any content without our express written permission.
            </p>

            <h2 className="text-2xl font-display font-bold text-on-surface pt-4">5. Limitation of Liability</h2>
            <p>
              S.H.E Hub Academy will not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
            </p>

            <h2 className="text-2xl font-display font-bold text-on-surface pt-4">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on the website. Your continued use of the services after any changes constitutes your acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-display font-bold text-on-surface pt-4">7. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at info@shehubacademy.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
