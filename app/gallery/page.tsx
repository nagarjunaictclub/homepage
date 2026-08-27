"use client";
import Image from "next/image";
import galleryData from "@/components/Gallery/galleryData";
import React from "react";
import SingleGallery from "@/components/Gallery/singleGallery";
import NoSSR from "@/components/NoSSR";
// import { AnimatePresence, motion } from "framer-motion";

export default function GalleryPage() {
  const [showGallery, setShowGallery] = React.useState(() => {
    return typeof window !== "undefined" &&
      window.localStorage.getItem("showgallery")
      ? JSON.parse(window.localStorage.getItem("showgallery"))
      : false;
  });
  const [album, setShowAlbum] = React.useState(() => {
    return typeof window !== "undefined" && window.localStorage.getItem("album")
      ? JSON.parse(window.localStorage.getItem("album"))
      : {};
  });
  const [title, setTitle] = React.useState(() => {
    return typeof window !== "undefined" && window.localStorage.getItem("title")
      ? window.localStorage.getItem("title")
      : "";
  });

  const handleShowAlbum = (id: any) => {
    setShowAlbum({ [id]: !album[id] });
  };

  React.useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("gallerydata", JSON.stringify(galleryData));
      localStorage.setItem("album", JSON.stringify(album));
      localStorage.setItem("showgallery", JSON.stringify(showGallery));
      localStorage.setItem("title", title);
    }
  }, [album, showGallery, title]);

  const handleShowGallery = (id: any, title: any) => {
    setShowGallery(true), setTitle(title), handleShowAlbum(id);
  };

  return (
    <NoSSR>
      <section id="gallery" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="flex flex-col justify-center p-10 align-middle">
              {!showGallery ? (
                <h1 className="text-center text-4xl">Gallery</h1>
              ) : (
                <h1 className="text-center text-4xl">{title}</h1>
              )}
            </div>
            {!showGallery && (
              <div className="py-10">
                {/* <div className="group relative  left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] flex w-[100vw] snap-x snap-mandatory gap-5 px-5 py-5 flex-wrap"> */}
                <div className="grid grid-cols-fluid gap-4">
                  {galleryData
                    .sort((a, b) => b.id - a.id)
                    .map((gallery) => {
                      return (
                        <div
                          key={gallery.id}
                          className="relative h-[500px] w-full flex-[0_0_90%] overflow-hidden  rounded-lg hover:cursor-pointer sm:flex-[0_0_50%] lg:flex-[0_0_40%] xl:flex-[0_0_24%]"
                          onClick={() => {
                            handleShowGallery(gallery.id, gallery.title);
                          }}
                        >
                          <Image
                            src={gallery.image}
                            width={400}
                            height={500}
                            className="h-full w-full object-cover transition ease-in-out hover:scale-125"
                            alt="unsplash-image"
                          />
                          <div
                            className="album-title absolute bottom-3 left-1 w-full text-[50px] font-semibold tracking-[5px] text-[#ffffff] drop-shadow-sm"
                            style={{ textShadow: "2px 4px #000" }}
                          >
                            {gallery.title}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
            {showGallery &&
              galleryData.map((gallery) => {
                return (
                  album[gallery.id] && (
                    <SingleGallery
                      gallery={gallery}
                      setShowGallery={setShowGallery}
                      setShowAlbum={setShowAlbum}
                      key={gallery.id}
                    />
                  )
                );
              })}
          </div>
        </div>
      </section>
    </NoSSR>
  );
}
