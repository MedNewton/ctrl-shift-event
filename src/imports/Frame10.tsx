function Group3() {
  return (
    <div className="[grid-area:1_/_1] font-['Switzer_Variable:Medium',sans-serif] font-medium grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[normal] ml-0 mt-[143px] place-items-start relative">
      <p className="[grid-area:1_/_1] h-[44px] ml-0 mt-[54px] relative text-[#a8a8a8] text-[32px] w-[571px]">Meet the team behind ctrl/shift 2026</p>
      <p className="[grid-area:1_/_1] h-[44px] ml-0 mt-0 relative text-[36px] text-white w-[477px]">Team</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] font-['Switzer_Variable:Medium',sans-serif] font-medium grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[normal] ml-0 mt-[286px] place-items-start relative">
      <p className="[grid-area:1_/_1] h-[44px] ml-0 mt-[54px] relative text-[#a8a8a8] text-[32px] w-[571px]">Find the location of our event</p>
      <p className="[grid-area:1_/_1] h-[44px] ml-0 mt-0 relative text-[36px] text-white w-[477px]">Event Location</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] font-['Switzer_Variable:Medium',sans-serif] font-medium grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[normal] ml-0 mt-[429px] place-items-start relative">
      <p className="[grid-area:1_/_1] h-[44px] ml-0 mt-[54px] relative text-[#a8a8a8] text-[32px] w-[571px]">Previous edition of NapulETH</p>
      <p className="[grid-area:1_/_1] h-[44px] ml-0 mt-0 relative text-[36px] text-white w-[477px]">Archive 2025</p>
    </div>
  );
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] font-['Switzer_Variable:Medium',sans-serif] font-medium grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[normal] ml-0 mt-[572px] place-items-start relative">
      <p className="[grid-area:1_/_1] h-[44px] ml-0 mt-[54px] relative text-[#a8a8a8] text-[32px] w-[571px]">First edition of NapulETH</p>
      <p className="[grid-area:1_/_1] h-[44px] ml-0 mt-0 relative text-[36px] text-white w-[477px]">Archive 2024</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[168px] mt-[5px] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[rgba(123,123,123,0.75)] h-[39px] ml-0 mt-0 rounded-[50px] w-[159px]" />
      <p className="[grid-area:1_/_1] font-['Switzer_Variable:Medium',sans-serif] font-medium leading-[normal] ml-[19px] mt-[7px] relative text-[#1c1c1c] text-[20px] text-nowrap whitespace-pre">Coming soon</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative">
      <p className="[grid-area:1_/_1] font-['Switzer_Variable:Medium',sans-serif] font-medium h-[44px] leading-[normal] ml-0 mt-0 relative text-[36px] text-white w-[477px]">Speakers</p>
      <Group4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <p className="[grid-area:1_/_1] font-['Switzer_Variable:Medium',sans-serif] font-medium h-[44px] leading-[normal] ml-0 mt-[54px] relative text-[#a8a8a8] text-[32px] w-[571px]">Find the speakers of ctrl/shift 2026</p>
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group3 />
      <Group2 />
      <Group1 />
      <Group />
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#e59804] h-[670px] ml-0 mt-0 rounded-[20px] w-[522px]" />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-gradient-to-b from-[#942629] relative rounded-[20px] size-full to-[#1a0707]">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center leading-[0] px-[46px] py-[20px] relative size-full">
          <Group7 />
          <Group8 />
        </div>
      </div>
    </div>
  );
}