const canonicalExamPaths: Record<string, string> = {
  'lok-sewa-photo-resize-nepal': 'np/lok-sewa-photo-resize-nepal',
  'pradesh-lok-sewa-photo-resize': 'np/pradesh-lok-sewa-photo-resize',
  'nepal-telecom-photo-signature-resize': 'np/nepal-telecom-photo-signature-resize',
  'nea-photo-signature-resize': 'np/nea-photo-signature-resize',
  'university-entrance-photo-resize': 'np/university-entrance-photo-resize',
  'driving-license-photo-resize': 'np/driving-license-photo-resize',
  'prc-photo-signature-resize-philippines': 'ph/prc-photo-signature-resize-philippines',
  'ppsc-signature-resize': 'pk/ppsc-signature-resize',
  'fpsc-photo-resize': 'pk/fpsc-photo-resizer',
};

export function getExamPageUrl(slug: string): string {
  const normalizedSlug = slug.replace(/^\/+|\/+$/g, '');
  const canonicalPath = canonicalExamPaths[normalizedSlug] || normalizedSlug;
  return `/${canonicalPath}/`;
}
