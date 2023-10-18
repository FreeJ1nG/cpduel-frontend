import MUIModal, { ModalProps as MUIModalProps } from '@mui/material/Modal';

export type ModalProps = MUIModalProps;

export default function Modal({ ...other }: ModalProps) {
  return <MUIModal {...other} />;
}
