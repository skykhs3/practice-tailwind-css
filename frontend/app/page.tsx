"use client";

import MyImageSlider from "./ui/my-image-slider";
import React, { useState, useEffect, useRef } from "react";

function MyDivider() {
  return <hr className="ml-10 mr-10 h-0 w-auto bg-[#E4E4E7]"></hr>;
}

interface MyEmployeeCardProps {
  name: string;
  position: string;
  subPosition: string;
  script: string[];
  imageSrc: string;
}

function MyEmployeeCard({
  name,
  position,
  subPosition,
  script,
  imageSrc,
}: MyEmployeeCardProps) {
  return (
    <div className="m-2 mb-4 flex w-auto max-w-full flex-col items-center justify-start rounded-lg border border-gray-200 bg-white p-4 shadow-md">
      <img src={imageSrc} alt="임직원 이미지" className="w-72 rounded-md" />
      <div className="h-4"></div>
      <h3 className="text-lg font-semibold text-black">{name}</h3>
      <p className="text-base text-[#09090b]">{position}</p>
      <p className="text-sm text-[#09090b]">{subPosition}</p>
      <div className="h-4"></div>
      <ul className="w-72 max-w-[100%] text-sm text-[#52525b]">
        {script.map((s, idx) => (
          <li key={idx}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // entry.contentRect는 요소의 크기와 위치 정보를 제공
        const { height, width } = entry.contentRect;
        console.log(`Current height:${height}px width1: ${width}px`); // 현재 너비를 콘솔에 출력
        setHeight(height); // 현재 높이를 상태에 반영
        setWidth(width); // 현재 너비를 상태에 반영
      }
    });

    // elementRef.current가 존재하는 경우 해당 요소를 관찰 시작
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // 컴포넌트 언마운트 시 관찰 종료
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* 헤더 섹션 */}
      <header className="flex h-[46px] items-center justify-center bg-white ">
        <img className="h-[36px]" src="/icon_logo.png" alt="로고"></img>
        <h1 className="text-xl font-bold text-black ">(주)정석기술연구소</h1>
      </header>

      <section
        className="relative h-[270px] md:h-[320px] lg:h-[495px]"
        ref={elementRef}
      >
        <div className="absolute h-full w-full">
          {/* <div className="absolute h-full w-full bg-black opacity-50"></div> */}
          <img
            src="image_banner.jpg"
            alt="배너"
            style={{ width: "100%", height: `${height}px`, objectFit: "cover" }}
          />
        </div>
        <MyImageSlider height={height} width={width} />
      </section>

      {/* 회사 소개 섹션 */}
      <section className="bg-white p-10 text-center lg:flex">
        <h2 className="mb-5 text-3xl text-[#09090b] lg:min-w-80 lg:text-4xl">
          회사 소개
        </h2>
        <p className="text-start text-base text-[#52525b] lg:text-xl">
          정석 기술 연구소는 건축, 토목, 엔지니어링, 건축물 하자진단, 안전진단,
          계측, 구조설계 및 법원 감정평가 등 다양한 건설 관련 서비스를
          제공합니다. 고객의 요구에 맞춘 최고의 솔루션을 제공하여 안전하고
          효율적인 건축 환경을 구축하는 데 앞장서고 있습니다.
        </p>
      </section>

      <MyDivider />

      <section className="bg-white p-10 text-center lg:flex">
        <h2 className="mb-5 text-3xl text-[#09090b] lg:min-w-80 lg:text-4xl">
          회사 주요업무
        </h2>
        <div className="flex-row">
          <div className="m-auto pb-2 text-center text-base text-[#52525b] md:text-xl lg:pb-4 lg:text-start lg:text-3xl ">
            건설분쟁·하자소송 기술(송무)지원 업무
          </div>
          <p className="m-auto pb-2 text-center text-base text-[#52525b] md:text-xl lg:pb-4 lg:text-start lg:text-3xl ">
            준공도서 사전검토 용역 업무
          </p>
          <p className="m-auto pb-2 text-center text-base text-[#52525b] md:text-xl lg:pb-4 lg:text-start lg:text-3xl ">
            법원 공사비 감정·분석 및 컨설팅 업무
          </p>
          <p className="m-auto pb-2 text-center text-base text-[#52525b] md:text-xl lg:pb-4 lg:text-start lg:text-3xl ">
            하자조사 타당성 검토·분석 업무
          </p>
          <p className="m-auto pb-2 text-center text-base text-[#52525b] md:text-xl lg:pb-4 lg:text-start lg:text-3xl ">
            준공시 하자 민원에 대한 컨설팅
          </p>
          <p className="m-auto pb-2 text-center text-base text-[#52525b] md:text-xl lg:pb-4 lg:text-start lg:text-3xl ">
            협력업체 공사중단시 대응방안 자문
          </p>
          <p className="text-center text-base text-[#52525b] md:text-xl lg:text-start lg:text-3xl">
            건설기술인 직무 교육(하자리스크 최소화)
          </p>
        </div>
      </section>

      <MyDivider />

      <section className="h-auto w-auto p-3 lg:p-10">
        <img
          src="/image_organization_chart.png"
          alt="조직도"
          className="m-auto w-full max-w-5xl"
        />
      </section>

      <MyDivider />
      <section className="bg-white p-10 text-center lg:flex">
        <h2 className="mb-5 text-3xl text-[#09090b] lg:min-w-80 lg:text-4xl">
          임직원 현황
        </h2>
        <div className="relative flex flex-wrap justify-evenly">
          {MyEmployeeCard({
            name: "김종석",
            position: "대표이사",
            subPosition: "",
            script: [
              "광운대학교 법무대학원 석사",
              "법원감정인(건축시공기술사)",
              "1군 건설사 현장시공 15년",
              "1군 건설사 CS 및 품질 팀장",
              "1군 건설사 법무팀장",
              "피고측 법무법인 기술총괄 본부장",
              "(하자소송외 700건, 준공도서용역 100건)",
              "SK하이닉스 품질, 안전자문위원",
              "광운대 법무대학원 27대 원우회회장",
              "건설중재 전문가 아카데미 제 20기",
            ],
            imageSrc: "/image_kimjongseok.png",
          })}
          {MyEmployeeCard({
            name: "이건후",
            position: "이사",
            subPosition: "",
            script: [
              "정석기술연구소 기술담당 이사",
              "광운대학교 건설법무대학원 석사",
              "건축기사/특급기술사(시공, 품질, 건설사업관리)",
              "범양건영(주) 품질안전팀/ CS팀 근무",
              "(주)한양 기술개발팀(견적담당 근무)",
              "(주)동양건설산업 건축팀/ 건축견적팀/ CS팀 근무",
              "LH아파트 외 아파트, 주상복합, 오피스텔 현장 수행",
            ],
            imageSrc: "/icon_logo2.png",
          })}
          {MyEmployeeCard({
            name: "강민주",
            position: "부장",
            subPosition: "연구소 소장",
            script: [
              "정석기술연구소 기술송무 총괄 담당",
              "건축사 / 법원 감정인",
              "엔지니어링 회사 기술송무 (실적 200개 현장)",
              "해안종합건축사사무소 근무(주상복합 및 LH공동주택 설계)",
            ],
            imageSrc: "/icon_logo2.png",
          })}
          {MyEmployeeCard({
            name: "김도영",
            position: "부장",
            subPosition: "",
            script: [
              "정석기술연구소 송무담당/준공도서",
              "건축기사 / 특급기술자",
              "엔지니어링 회사 기술송무/준공도서 검토용역 공무",
              "아파트, 주상복합현장 공사/공무 수행",
              "동양건설사업 CS팀 (30개 현장 1만 세대 담당)",
            ],
            imageSrc: "/icon_logo2.png",
          })}
          {MyEmployeeCard({
            name: "김미지",
            position: "대리",
            subPosition: "",
            script: ["송무·적산 담당", "건축기사 / 토목기사"],
            imageSrc: "/icon_logo2.png",
          })}
        </div>
      </section>
      <MyDivider></MyDivider>
      <section className="bg-white p-10 text-center lg:flex">
        <h2 className="mb-5 text-3xl text-[#09090b] lg:min-w-80 lg:text-4xl">
          주요 실적 현황
        </h2>
      </section>

      {/* 푸터 */}
      <footer className="bg-white p-4 text-center text-slate-700">
        <p className="text-sm">
          서울특별시 서초구 서초중앙로24길 11 (우)06604
          <br className="hidden max-sm:block" />
          <span className="inline max-sm:hidden"> / </span>
          TEL 02-533-7753
          <br className="hidden max-sm:block" />
          <span className="inline max-sm:hidden"> / </span>
          FAX 02-533-7752
          <br className="hidden max-sm:block" />
          <span className="inline max-sm:hidden"> / </span>
          E-mail jseng@jseng.co.kr
          <br />
          정석기술연구소
          <br className="hidden max-sm:block" />
          <span className="inline max-sm:hidden"> / </span>
          사업자등록번호: 126-88-02894
          <br className="hidden max-sm:block" />
          <span className="inline max-sm:hidden"> / </span>
          대표자: 김종석
        </p>
      </footer>
    </div>
  );
}
