import type { ExamPreset, ToolTargetMode } from '../types';
// Older entries predate targetType; their names explicitly identify photographs.
export function presetMode(preset: ExamPreset): ToolTargetMode {
  return preset.targetType || (/\bphoto(?:graph)?\b/i.test(preset.name) ? 'photo' : 'signature');
}
