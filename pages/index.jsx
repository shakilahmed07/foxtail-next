import Head from "next/head";
import styles from "../styles/Home.module.css";
import SingleEvent from "./components/SingleEvent/SingleEvent";
import SingleMember from "./components/SingleMember/SingleMember";
import SingleMember1 from "./components/SingleMember/SingleMember1";
import SingleNft from "./components/SingleNft/SingleNft";
import TopCreator from "./components/TopCreator/TopCreator";

// NFTData
const NftDatas = [
  {
    title: "Curabitur suscipit",
    img: "https://i.ibb.co/892vbyg/Rectangle-77.png",
    creator: "Created: 28.08.2022 by ",
    name: "NancyDyna",
    owner: "Sadiya",
    price: "1052 ($654)",
    id: 1,
  },
  {
    title: "Curabitur suscipit",
    img: "https://i.ibb.co/vmjNXDy/Rectangle-175.png",
    creator: "Created: 28.08.2022 by ",
    name: "NancyDyna",
    owner: "Sadiya",
    price: "1052 ",
    dollar: "($654)",
    id: 2,
  },
  {
    title: "Curabitur suscipit",
    img: "https://i.ibb.co/DrGGf54/Rectangle-177.png",
    creator: "Created: 28.08.2022 by ",
    name: "NancyDyna",
    owner: "Sadiya",
    price: "1052 ($654)",
    id: 3,
  },
];

// EventData
const EventDatas = [
  {
    title: "Curabitur suscipit vestibulum urna id tincidunt.",
    img: "https://i.ibb.co/r3tbMmR/image-2.png",
    address: "18 Dynahost Street, 02 No Appartment, Texas, USA",
    date: "21.12.2022",
    time: "04.30pm",
    ticketPrice: "99.00",
    id: 1,
  },
  {
    title: "Curabitur suscipit vestibulum urna id tincidunt.",
    img: "https://i.ibb.co/r3tbMmR/image-2.png",
    address: "18 Dynahost Street, 02 No Appartment, Texas, USA",
    date: "21.12.2022",
    time: "04.30pm",
    ticketPrice: "99.00",
    id: 2,
  },
];

// MemberData
const MemberDatas = [
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/6wsb5Dc/Rectangle-170-5.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 1,
  },
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/D4RtjML/Rectangle-170.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 2,
  },
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/4YtpGwr/Rectangle-170-1.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 3,
  },
];

// CreatorData
const CreatorDatas = [
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/B3M6QR6/Rectangle-170.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 1,
  },
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/d64JpYY/Rectangle-170-1.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 2,
  },
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/0C1XdHX/Rectangle-170-2.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 3,
  },
];

// MembersData1
const MembersData1 = [
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/DgJxP0p/Rectangle-170-3.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 1,
  },
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/DgJxP0p/Rectangle-170-3.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 2,
  },
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/DgJxP0p/Rectangle-170-3.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 3,
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Foxtail Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="custom-color md:mt-5">
          <h1 className="text-white text-3xl md:text-5xl font-medium tracking-wide  md:ml-14 ml-5 py-3 ">
            Trending
          </h1>
          <div>
            <div className="grid md:grid-cols-3 md:px-10 mx-3">
              {NftDatas.map((data) => (
                <div key={data.id}>
                  <SingleNft data={data} />
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:px-8 mx-3">
            {EventDatas.map((data) => (
              <div key={data.id}>
                <SingleEvent data={data} />
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-5 md:mx-14 mx-3 py-5 ">
            {MemberDatas.map((data) => (
              <div key={data.id}>
                <SingleMember data={data} />
              </div>
            ))}
          </div>
        </div>
        <h1 className="custom-text text-3xl md:text-5xl font-medium tracking-wide  md:ml-14 ml-5 my-3 md:my-5  dark:text-white">
          Top Creators
        </h1>
        <div className="grid md:grid-cols-3 gap-5 md:mx-14 mx-3 my-10 md:my-6 ">
          {CreatorDatas.map((data) => (
            <div key={data.id}>
              <TopCreator data={data} />
            </div>
          ))}
        </div>
        <h1 className="custom-text text-3xl md:text-5xl font-medium tracking-wide  md:ml-14 ml-5 py-3">
          Latest
        </h1>
        <div>
          <div className="grid md:grid-cols-3 md:px-10 mx-3">
            {NftDatas.map((data) => (
              <div key={data.id}>
                <SingleNft data={data} />
              </div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:mx-10 mx-3">
          {EventDatas.map((data) => (
            <div key={data.id}>
              <SingleEvent data={data} />
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-5 md:mx-16 mx-3 pt-5 pb-8">
          {MembersData1.map((data) => (
            <div key={data.id}>
              <SingleMember1 data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
