'use client';

type Props = {
  label: string;
  reversed: string; // email string reversed — reconstructed at runtime only, never in HTML
};

export function EmailButton({ label, reversed }: Props) {
  const handleClick = () => {
    const email = reversed.split('').reverse().join('');
    window.location.href = `mailto:${email}`;
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 border border-[#2563eb] text-[#2563eb] text-sm font-medium hover:bg-[#2563eb] hover:text-white transition-colors"
    >
      {label} →
    </button>
  );
}
