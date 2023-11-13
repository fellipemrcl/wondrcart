import Image, { ImageProps } from "next/image";

const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      alt={alt}
      className="h-auto w-full px-5"
      height={0}
      sizes="100vw"
      width={0}
      {...props}
    />
  );
};

export default PromoBanner;
