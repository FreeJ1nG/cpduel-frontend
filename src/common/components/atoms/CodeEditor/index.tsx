import { TextareaCodeEditorProps } from '@uiw/react-textarea-code-editor';
import dynamic from 'next/dynamic';

import '@uiw/react-textarea-code-editor/dist.css';

const UIWCodeEditor = dynamic(
  () => import('@uiw/react-textarea-code-editor').then((mod) => mod.default),
  { ssr: false },
);

export type CodeEditorProps = TextareaCodeEditorProps;

export default function CodeEditor({ ...other }: TextareaCodeEditorProps) {
  return <UIWCodeEditor {...other} />;
}
