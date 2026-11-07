const canonicalExamPaths: Record<string, string> = {
  'lok-sewa-photo-resize-nepal': 'np/lok-sewa-photo-resize-nepal',
  'prc-photo-signature-resize-philippines': 'ph/prc-photo-signature-resize-philippines',
  'ppsc-signature-resize': 'pk/ppsc-signature-resize',
  'fpsc-photo-resize': 'pk/fpsc-photo-resizer',
};

export function getExamPageUrl(slug: string): string {
  const normalizedSlug = slug.replace(/^\/+|\/+$/g, '');
  const canonicalPath = canonicalExamPaths[normalizedSlug] || normalizedSlug;
  return `/${canonicalPath}/`;
}
