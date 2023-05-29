import React from "react";
import Image from "next/image";
const MyProfilePic = () => {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-slate-400 dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/profile-photo-600x600.png"
        alt="self image"
        width={200}
        height={200}
        priority={true}
      />
    </section>
  );
};

export default MyProfilePic;
