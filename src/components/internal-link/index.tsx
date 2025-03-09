import React from 'react';
import Link, { LinkProps } from 'next/link';

const InternalLink = ({
  href,
  className = 'text-font-main-dark font-normal',
  children,
}: LinkProps & { className?: string; children: React.ReactNode }) => {
  return (
    <Link href={href} className={`internal-link ${className}`}>
      {children}
    </Link>
  );
};

export default InternalLink;
