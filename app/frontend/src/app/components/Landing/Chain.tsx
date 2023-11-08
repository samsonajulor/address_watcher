import Image, { StaticImageData } from 'next/image';

const Chain = ({ src }: { src: StaticImageData }) => {
  return (
    <Image
      alt=""
      loading="lazy"
      src={src}
      className="object-contain w-44 object-center overflow-hidden self-center max-w-full my-auto"
    />
  );
};

export default Chain;
