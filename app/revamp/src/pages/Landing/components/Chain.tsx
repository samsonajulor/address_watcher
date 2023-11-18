

const Chain = ({src}: {src: string;}) => {
  return (
    <img
      alt=""
      loading="lazy"
      src={src}
      className="object-contain w-44 object-center overflow-hidden self-center max-w-full my-auto max-sm:w-20"
    />
  );
};

export default Chain;
