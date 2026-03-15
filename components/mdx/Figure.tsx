import Image from 'next/image';

interface FigureProps {
  src: string;
  caption: string;
  alt?: string;
}

export default function Figure({ src, caption, alt }: FigureProps) {
  return (
    <figure className="my-8">
      <div className="relative w-full" style={{ minHeight: '200px' }}>
        <Image
          src={src}
          alt={alt ?? caption}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 760px"
        />
      </div>
      <figcaption
        style={{
          fontSize: '0.875rem',
          color: '#6b7280',
          marginTop: '0.5rem',
          textAlign: 'center',
        }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}
