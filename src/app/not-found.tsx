import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Image
        src="https://getpublii.com/docs/media/posts/30/404-error-page.png"
        width={500}
        height={500}
        alt="not found page"
        className="w-full"
      />
    </div>
  );
};

export default NotFoundPage;
