export default function LearningBoxInfo({ bgcolor, title, subTitle }) {
  return (
    <>
      <div
        className={`min-h-[90px] w-[48%] flex flex-col justify-center py-[19px] px-[22px] md:py-[30px] md:px-[33px] rounded-xl`}
        style={{ backgroundColor: bgcolor }}
      >
        <h2 className="text-xl md:text-[34px] font-semibold leading-[32px] md:leading-[44px] text-[#111827]">
          {title}
        </h2>
        <p className="text-xs font-normal md:text-[21px] md:text-[#4B5563] md:leading-[30px]">
          {subTitle}
        </p>
      </div>
    </>
  );
}
