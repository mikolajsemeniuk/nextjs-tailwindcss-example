import type { NextPage } from "next";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface Campaign {
  key: string;
  name: string;
  start: Date;
  finish: Date;
  active: boolean;
  wanted: number;
  accept: number;
  rejected: number;
  education: string[];
  experience: string[];
  certificates: string[];
  courses: string[];
  skills: string[];
  languages: string[];
  created: Date;
  updated: Date;
}

const Home: NextPage = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/campaigns",
      headers: {
        accept: "application/json",
      },
      withCredentials: true,
    })
      .then((response) => {
        setCampaigns(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <div className="text-3xl m-3">Current campaigns</div>
      <button
        onClick={() => router.push("/campaigns/create")}
        className="mx-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create campaign
      </button>
      <section className="min-h-screen body-font text-gray-600 ">
        <div className="container mx-auto px-5 py-10">
          {campaigns.map((campaign) => (
            <div key={campaign.key} className="-m-4 flex flex-wrap">
              <div className="w-full p-4 md:w-1/2 lg:w-1/4">
                <a className="relative block h-48 overflow-hidden rounded">
                  <img
                    alt="ecommerce"
                    className="block h-full w-full object-cover object-center cursor-pointer"
                    src="https://dummyimage.com/420x260"
                  />
                </a>
                <div className="mt-4">
                  <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
                    {campaign.name}
                  </h3>
                  <h2 className="title-font text-lg font-medium text-gray-900">
                    The Catalyzer
                  </h2>
                  <p className="mt-1">01/09/2022</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
