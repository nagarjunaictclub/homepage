"use client";
import React from "react";
import Image from "next/image";
import Dialog from "./Dialog";

const ImageColumn = ({ column, dataImage, columnName }) => {
    const [modelId, setModelId] = React.useState("");
    const [isOpen, setIsOpen] = React.useState(false);
    const dialogImgRef = React.useRef(null);

    const handleModelOpen = (id, name) => {
        setIsOpen(true);
        setModelId(`${name}-${id}`);
    };

    const handleClickOutside = (e) => {
        if (dialogImgRef.current && !dialogImgRef.current.contains(e.target)) {
            setIsOpen(false);
            setModelId("");
        }
    };

    React.useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    return (
        <div className="relative w-full aspect-[4/3]">
            <Image
                src={column.image}
                alt="gallery image"
                fill
                onClick={() => handleModelOpen(column.id, columnName)}
                data-image={dataImage}
                style={{ cursor: "zoom-in" }}
                priority
                className="rounded-lg object-cover opacity-90 hover:opacity-100"
            />
            {`${columnName}-${column.id}` === modelId && (
                <Dialog
                    column={column}
                    setIsOpen={setIsOpen}
                    isopen={isOpen}
                    dialogimgref={dialogImgRef}
                    columnName={columnName}
                />
            )}
        </div>
    );
};

export default ImageColumn;
