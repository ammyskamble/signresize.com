import React from 'react';
import { StudioWorkspace, type StudioWorkspaceProps } from './studio/StudioWorkspace';

export interface SignatureToolProps extends StudioWorkspaceProps {}

/**
 * SignResize Primary Studio Tool
 * Modularized and optimized for 60fps client-side canvas rendering.
 */
export const SignatureTool: React.FC<SignatureToolProps> = (props) => {
  return <StudioWorkspace {...props} />;
};

export default SignatureTool;
export {
  createSampleSignatureData,
  createSamplePhotoData,
  createSampleDocumentData,
  createSampleDataForMode,
} from '../utils/sampleGenerators';
