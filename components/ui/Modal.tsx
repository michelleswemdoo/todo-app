'use client';
import { createPortal } from 'react-dom';
import { Button } from '@/components/ui/Button';
import { useMounted } from '@/hooks/useMounted';

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  showModal: boolean;
  className?: string;
};

const Backdrop = ({ onClose, children, showModal }: ModalProps) => {
  return (
    showModal && (
      <div
        role="dialog"
        aria-modal={showModal}
        onClick={onClose}
        className="fixed inset-0 z-[99999] h-dvh bg-black/35 p-0"
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className="fixed left-1/2 top-1/2 w-full max-w-[560px] -translate-x-1/2 -translate-y-1/2 bg-white p-8"
        >
          <Button
            aria-label="close"
            onClick={onClose}
            className="absolute right-[0.8rem] top-[0.8rem]"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              tabIndex={-1}
              fill="none"
              role="presentation"
              className="size-[1.7rem] fill-pink-700 stroke-pink-700 stroke-[0.03em] text-2xl transition-all duration-200 ease-linear hover:fill-pink-900 hover:stroke-pink-900"
              viewBox="0 0 32 32"
            >
              <path d="M17.825,16l10.208,10.207l-1.827,1.826L16,17.824L5.793,28.033l-1.826-1.826L14.174,16L3.967,5.793l1.826-1.826L16,14.174 L26.208,3.967l1.825,1.826L17.825,16z"></path>
            </svg>
          </Button>

          {children}
        </div>
      </div>
    )
  );
};

export const Modal = ({
  children,
  showModal,
  onClose,
  className,
}: ModalProps) => {
  const mounted = useMounted();

  return mounted
    ? createPortal(
        <>
          <Backdrop
            showModal={showModal}
            onClose={onClose}
            className={className}
          >
            {children}
          </Backdrop>
        </>,
        document.body,
      )
    : null;
};
