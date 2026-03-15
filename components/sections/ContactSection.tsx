import { EmailButton } from '@/components/EmailButton';

// Reversed email strings — reconstructed at runtime only, never in HTML source
// Work email (juk4007@med.cornell.edu) reversed:
export const WORK_EMAIL_REVERSED = 'ude.llenroc.dem@7004kuj';
// Personal email (jkim0810@gmail.com) reversed:
export const PERSONAL_EMAIL_REVERSED = 'moc.liamg@0180mikj';

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-[#f0f0f0] pt-8">
      <h2 className="text-2xl font-bold text-[#111] mb-6">Contact</h2>
      <div className="flex flex-wrap gap-4">
        <EmailButton label="Work Email" reversed={WORK_EMAIL_REVERSED} />
        <EmailButton label="Personal Email" reversed={PERSONAL_EMAIL_REVERSED} />
      </div>
    </section>
  );
}
