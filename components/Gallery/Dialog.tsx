"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Dialog = ({ column, setIsOpen, isopen, dialogimgref, columnName }) => {
  React.useEffect(() => {
    const dialog = document.getElementById(`${columnName}-${column.id}`) as HTMLDialogElement | null;
    if (dialog) {
      isopen ? dialog.showModal() : dialog.close();
    }
  }, [isopen]);

  return (
    <dialog
      className="m-auto h-2/3 w-4/5 backdrop:!blur-md lg:w-1/2 2xl:h-3/4 2xl:w-1/2 3xl:h-4/5 3xl:w-2/5 rounded-md border-none bg-white/10 p-0"
      id={`${columnName}-${column.id}`}
      onClick={() => setIsOpen(false)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 0.15 }}
        exit={{ opacity: 0, scale: 0.75 }}
        className="relative h-full w-full"
      >
        <Image
          src={column.image}
          alt="dialog-image"
          fill
          ref={dialogimgref}
          className="h-full w-full cursor-zoom-out object-contain"
        />
      </motion.div>
    </dialog>
  );
};

export default Dialog;
