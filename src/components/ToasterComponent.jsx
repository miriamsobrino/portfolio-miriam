import { Toaster, toast } from 'sonner';
import { CopyIcon } from '../assets/icons/CopyIcon';
import './ToasterComponent.css';

export const ToasterComponent = () => {
  const handleClick = () => {
    const email = 'miriamsobrinodev@gmail.com';

    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast.success('Correo copiado al portapapeles');
      })
      .catch(() => {
        toast.error('No se pudo copiar el correo');
      });
  };
  return (
    <>
      <Toaster />
      <button
        className={`py-2 px-4 bg-pink rounded-full gap-2 shadow-toaster flex mx-auto text-center justify-center lg:w-auto items-center text-primary`}
        onClick={handleClick}
      >
        miriamsobrinodev@gmail.com <CopyIcon />
      </button>
    </>
  );
};
