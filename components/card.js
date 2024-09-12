import StaticNextImage from "shared/StaticNextImage";

function Card() {
  return (
    <div className="flex flex-col gap-[20px] justify-center items-center h-screen w-screen">
      <StaticNextImage
        loading="eager"
        alt="Aakash Logo"
        src="/images/Laptop.jpg"
        srcList={[
          {
            type: "web",
            height: "500px",
            width: "500px",
          },
          {
            type: "tablet",
            height: "300px",
            width: "300px",
          },
          {
            type: "phone",
            height: "150px",
            width: "150px",
          },
        ]}
        className="rounded-[10px]"
      />
      <div className="text-orange-500 web:text-green-500 tablet:text-blue-500">
        Lorem Ipsum is simply dummy text.
      </div>
    </div>
  );
}

export default Card;
