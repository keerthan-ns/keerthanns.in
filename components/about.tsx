import Image from 'next/image';
import { Fragment } from 'react/jsx-runtime';

const AboutInfo = () => {
  return (
    <Fragment>
      <Image
        src={'/static/keerthan/me-blue.png'}
        width={200}
        height={200}
        alt="about image"
        className="mx-auto mb-3 grayscale hover:grayscale-0 transition duration-300 ease-in-out "
        priority
      />
      <div className="flex flex-wrap justify-center items-baseline gap-2 text-gray-300 text-sm md:text-lg">
        Hi there! I&apos;m
        <h1 className="text-2xl text-secondary font-semibold">
          Keerthan NS
        </h1>
      </div>

      <p className="indent-8 text-gray-300 text-sm md:text-lg mt-3">
        A{' '}
        {new Date().getFullYear() -
          2002 -
          (new Date().getMonth() < 9 ? 1 : 0)}{' '}
        year old Full-Stack Web developer,
        having a strong interest in web development. I build responsive and
        scalable web applications using latest tools and frameworks. I find the
        process of creating web applications and software apps very satisfying and I
        enjoy the challenges that comes with it. </p>
      <p className="indent-8 text-gray-300 text-sm md:text-lg mt-3">In my free time, you can find me watching movies or gaming.
        It is a great way to unwind and relax after a long day. I enjoy playing games from various genres,
        including Open-world like GTA5, strategy, racing games.
      </p>
    </Fragment>
  );
};

export default AboutInfo;