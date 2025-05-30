import Link from "next/link";

type Props = {
  title: string;
  description: string;
  href: string;
};

export default function ExternalLink({ description, href, title }: Props) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  const content = (
    <>
      <p className="text-xl font-semibold text-white">
        {title} <span className="ml-2 inline-block">→</span>
      </p>
      <p className="mt-2 max-w-[250px] text-gray-400">{description}</p>
    </>
  );

  if (isExternal) {
    return (
      <a
        className="inline-block rounded-md border border-gray-700 p-8 transition-colors hover:border-gray-400"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      className="inline-block rounded-md border border-gray-700 p-8 transition-colors hover:border-gray-400"
      href={href}
    >
      {content}
    </Link>
  );
}
