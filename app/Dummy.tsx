import React from "react";

const MusicList = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black p-4">
      <div className="w-full max-w-5xl bg-red-600 text-black px-6 py-8">
        <h1 className="text-5xl font-extrabold uppercase text-center mb-6">
          MUSIC IN THIS VIDEO
        </h1>
        <p className="text-2xl font-bold leading-relaxed text-justify tracking-wide">
          <div className="flex w-full">
            <span className="font-extrabold flex-grow">Snky Bnz</span>
            <span>- Blue Sky, Never Landing</span>
          </div>
          <span className="font-extrabold">Tom Agad</span> - Money Tango <br />
          <span className="font-extrabold">Snky Bnz</span> - A Perfect Song{" "}
          <br />
          <span className="font-extrabold">Wesly Thomas</span> - Summertime
          Bossa <br />
          <span className="font-extrabold">Ben Bostick</span> - It Ain't Cheap
          Being Poor <br />
          <span className="font-extrabold">Michael Shynes</span> - Shallow
          Waters <br />
          <span className="font-extrabold">Maple & Beech</span> - Downtwaa -
          Uptwaa
        </p>
      </div>
    </div>
  );
};

export default MusicList;
