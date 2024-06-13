import React from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiClock } from "../assets/icons/vander";

export default function Blogs({ images }) {
  return (
    <section className="relative md:py-24 py-16" id="blog">
      <div className="container relative">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="font-semibold text-2xl leading-normal mb-4">
            Hasil Kompress Gambar
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Hasil Kompres Gambar Yang Telah Anda Input.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
          {images.map((item, index) => {
            return (
              <div className="group relative overflow-hidden" key={index}>
                <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                  <img
                    src={item.file}
                    className="group-hover:scale-110 duration-500 w-full"
                    alt=""
                  />
                </div>

                <div className="mt-6 flex flex-col">
                  <div className="flex mb-4">
                    <span className="flex items-center text-slate-400 text-sm">
                      {/* <FiCalendar className="size-4 text-slate-900 dark:text-white me-1.5" /> */}
                      {item.size} B
                    </span>
                    <span className="flex items-center text-slate-400 text-sm ms-3">
                      {/* <FiClock className="size-4 text-slate-900 dark:text-white me-1.5" />
                      5 min read */}
                    </span>
                  </div>

                  <Link
                    to=""
                    className="title text-lg font-semibold hover:text-teal-500 duration-500 ease-in-out"
                  >
                    {index == 0
                      ? "Original"
                      : index == 1
                      ? "Encoder"
                      : index == 2
                      ? "Decoder"
                      : "-"}
                  </Link>
                  <button
                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-7"
                    onClick={() => {
                      const downloadLink = document.createElement("a");
                      downloadLink.href = URL.createObjectURL(
                        base64ToBlob(item.file)
                      );
                      downloadLink.download =
                        index == 0
                          ? "Original"
                          : index == 1
                          ? "Encoder"
                          : index == 2
                          ? "Decoder"
                          : "-" + ".png"; // Set the desired filename
                      downloadLink.click();
                    }}
                  >
                    Download
                  </button>
                  {/* <button 
                    onClick={() => {
                      const downloadLink = document.createElement("a");
                      downloadLink.href = URL.createObjectURL(
                        base64ToBlob(item.file)
                      );
                      downloadLink.download =
                        index == 0
                          ? "Original"
                          : index == 1
                          ? "Encoder"
                          : index == 2
                          ? "Decoder"
                          : "-" + ".png"; // Set the desired filename
                      downloadLink.click();
                    }}
                  >
                    Download
                  </button> */}
                  {/* <p className="text-slate-400 mt-2">{item.desc}</p> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function base64ToBlob(base64Data) {
  const contentType = base64Data.split(";")[0].split(":")[1];
  const base64WithoutPrefix = base64Data.split(",")[1];
  const decodedData = atob(base64WithoutPrefix);
  const arrayBuffer = new ArrayBuffer(decodedData.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < decodedData.length; i++) {
    uint8Array[i] = decodedData.charCodeAt(i);
  }
  return new Blob([arrayBuffer], { type: contentType });
}
