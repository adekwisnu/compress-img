import React, { useState } from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/img-main.png";
import Navbar from "../components/navbar";
import Blogs from "../components/blog";
import Footer from "../components/footer";
import axios from "axios";

export default function Index() {
  const [images, setImages] = useState([]);
  // const [resData, setResData] = useState([]);
  const [formData, setFormData] = useState({ image: null });
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    if (!e.target.files[0]) return;
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("image", formData.image);

    try {
      const res = await axios.post(`http://134.209.101.73:5000/upload`, fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setImages(res.data["images"]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <section
        className="relative overflow-hidden md:py-48 py-40 bg-teal-500/5 dark:bg-teal-500/20"
        id="home"
      >
        <div className="container relative mt-8">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center">
            <div>
              <h1 className="font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl mb-5">
                COMPRES IMAGE MEDIS USING AI
              </h1>
              <p className="text-slate-400 text-lg max-w-xl mb-7">
                Membantu untuk memperkecil ukuran gambar medis serta
                mengembalikan ukuran file gambar yang sudah di perkecil
                menyerupai gambar aslinya
              </p>

              <form className="image-input" onSubmit={handleSubmit}>
                <input
                  onChange={handleFileChange}
                  accept="image/*"
                  name="image"
                  type="file"
                  id="img-source"
                  className="block w-[400px] text-sm text-white bg-slate-700 rounded-lg shadow-xl
        file:mr-4 file:py-2 file:px-4 file:rounded-lg
        file:border-0 file:text-sm file:font-semibold
        file:bg-white file:text-black-main mb-3
        hover:file:bg-black hover:file:text-white"
                />
                <div className="rounded-md mt-4">
                  <img src={preview} />
                </div>
                {/* <p
                className="mt-1 text-sm text-black-500 mb-10 ml-3"
                id="file_input"
              >
                SVG, PNG, JPG or GIF.
              </p> */}
                <button
                  type="submit"
                  className="text-black bg-white shadow-lg focus:ring-4 focus:ring-white-main font-medium rounded-lg text-sm-bold px-44 py-1 me-2 mb-2  hover:bg-white-main focus:outline-none mt-4"
                >
                  COMPRESS GAMBAR
                </button>
              </form>
            </div>

            <div className="lg:ms-8">
              <div className="relative">
                <img src={heroImg} className="relative left-16" alt="" />
                {/* <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tl to-teal-500/20 via-teal-500/70 from-teal-500 bottom-1/2 translate-y-1/2 md:start-0 start-1/2 ltr:md:translate-x-0 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 -z-1 shadow-md shadow-teal-500/10 rounded-full"></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Blogs images={images} />
      <Footer />
    </>
  );
}
