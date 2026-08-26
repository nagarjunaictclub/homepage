"use client";
import React from "react";
import ImageColumn from "./ImageColumn";

const SingleGallery = ({ gallery, setShowGallery, setShowAlbum }) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col gap-4">
        <div className="flex justify-end">
          <button
            className="w-fit rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/80 transition-all"
            onClick={() => {
              setShowGallery(false);
              setShowAlbum({});
              localStorage.clear();
            }}
          >
            Go Back
          </button>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            {gallery.album.firstColumn.map((firstcolumn: any) => (
              <ImageColumn
                key={firstcolumn.id}
                column={firstcolumn}
                dataImage={`galleryimage-${firstcolumn.id}`}
                columnName="firstcolumn"
              />
            ))}
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            {gallery.album.secondColumn.map((secondcolumn: any) => (
              <ImageColumn
                key={secondcolumn.id}
                column={secondcolumn}
                dataImage={`galleryimage-${secondcolumn.id}`}
                columnName="secondcolumn"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGallery;
