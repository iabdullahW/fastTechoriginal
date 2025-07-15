import Image from "next/image";
import Link from "next/link";
import "./style.css";

const SingleBlog = ({ blog, isFirst }) => {
  const { title, image, author, tags, publishDate } = blog;

  return (
    <div
      className={`relative overflow-hidden rounded-md shadow-one ${
        isFirst ? "bg-gradient-to-r from-[#666666] to-[#9031F4]" : "bg-white"
      }`}
    >
      <Link href="/" className="relative block h-[220px] w-full">
        <span className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-[#9031F4] py-2 px-4 text-sm font-semibold capitalize text-white">
          {tags[0]}
        </span>
        <Image
          src={image}
          alt="image"
          fill
          className={`transition-transform duration-500 ease-in-out ${
            isFirst ? "first-image-overlay" : ""
          }`}
        />
      </Link>
      <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
        <h3>
          <Link
            href="/"
            className="mb-4 block text-xl font-bold text-[#351A5F] hover:text-[#9031F4] sm:text-2xl"
          >
            {title}
          </Link>
        </h3>
        <div className="flex items-center">
          <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
            <div className="mr-4">
              {/* <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image src={author.image} alt="author" fill />
              </div> */}
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-sm font-medium text-[#16031F]">
                By {author.name}
              </h4>
              <p className="text-xs text-black">{author.designation}</p>
            </div>
          </div>
          <div className="inline-block">
            <h4 className="mb-1 text-sm font-medium text-black">
              Date
            </h4>
            <p className="text-xs text-black">{publishDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
