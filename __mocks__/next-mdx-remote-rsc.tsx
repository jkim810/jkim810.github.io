import React from 'react';

export function MDXRemote({ source }: { source: string }) {
  return <div data-testid="mdx-remote">{source}</div>;
}

export function compileMDX() {
  return Promise.resolve({ content: React.createElement('div'), frontmatter: {} });
}
