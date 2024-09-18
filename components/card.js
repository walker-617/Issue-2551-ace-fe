import Image from "next/image";
import StaticNextImage from "shared/StaticNextImage";

function Card() {
  return (
    <div className="flex flex-col gap-[20px] justify-center items-center h-screen w-screen">
      <StaticNextImage
        loading="eager"
        alt="Laptop Image"
        src="/images/Laptop.jpg"
        srcList={[
          {
            type: "web",
            height: "500px",
            width: "500px",
          },
          {
            type: "tablet",
            height: "250px",
            width: "250px",
          },
          {
            type: "phone",
            height: "100px",
            width: "100px",
          },
        ]}
        className="rounded-[10px] w-[500px] md:w-[250px] vsm:w-[100px]"
      />
      <div className="vsm:text-orange-500 md:text-green-500 text-blue-500">
        Lorem Ipsum is simply dummy text.
      </div>
    </div>
  );
}

export default Card;
