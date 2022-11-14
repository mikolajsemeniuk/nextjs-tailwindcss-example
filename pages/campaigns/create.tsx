import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { AxiosResponse, AxiosError } from "axios";

interface Input {
  name: string;
  start: Date;
  finish: Date;
  active: boolean;
  wanted: number;
  accept: number;
  reject: number;
  education: string;
  experience: string;
  certificates: string;
  courses: string;
  skills: string;
  languages: string;
}

const CreatePage: NextPage = () => {
  const router = useRouter();
  const [input, setInput] = useState<Input>({
    name: "my new campaign name",
    start: new Date(),
    finish: new Date(),
    active: true,
    wanted: 5,
    accept: 70,
    reject: 30,
    education: "",
    experience: "",
    certificates: "",
    courses: "",
    skills: "",
    languages: "",
  });

  const create = (event: React.MouseEvent<HTMLButtonElement>): void => {
    axios({
      method: "post",
      url: "http://localhost:5000/campaign/create",
      headers: {
        accept: "application/json",
      },
      data: {
        ...input,
      },
      withCredentials: true,
    })
      .then((_: AxiosResponse) => {
        router.push("/campaigns");
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="max-w-2xl mx-auto bg-white p-16">
        <h1 className="text-3xl mb-12">Create campaign</h1>
        <form>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Name
            </label>
            <input
              value={input.name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                setInput({
                  ...input,
                  name: event.target.value,
                });
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name"
              required
            />
          </div>
          <div className="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Start date
              </label>
              <input
                value={input.start.toLocaleDateString("en-CA")}
                onChange={(
                  event: React.ChangeEvent<HTMLInputElement>
                ): void => {
                  setInput({
                    ...input,
                    start: new Date(event.target.value),
                  });
                }}
                type="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Finish date
              </label>
              <input
                value={input.finish.toLocaleDateString("en-CA")}
                onChange={(
                  event: React.ChangeEvent<HTMLInputElement>
                ): void => {
                  setInput({
                    ...input,
                    finish: new Date(event.target.value),
                  });
                }}
                type="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-6 flex">
            <div className="mx-1">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Wanted
              </label>
              <input
                value={input.wanted}
                onChange={(
                  event: React.ChangeEvent<HTMLInputElement>
                ): void => {
                  setInput({
                    ...input,
                    wanted: Number(event.target.value),
                  });
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="number"
                required
              />
            </div>
            <div className="mx-1">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Accept
              </label>
              <input
                value={input.accept}
                onChange={(
                  event: React.ChangeEvent<HTMLInputElement>
                ): void => {
                  setInput({
                    ...input,
                    accept: Number(event.target.value),
                  });
                }}
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mx-1">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Rejected
              </label>
              <input
                value={input.reject}
                onChange={(
                  event: React.ChangeEvent<HTMLInputElement>
                ): void => {
                  setInput({
                    ...input,
                    reject: Number(event.target.value),
                  });
                }}
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Education
            </label>
            <textarea
              value={input.education}
              onChange={(
                event: React.ChangeEvent<HTMLTextAreaElement>
              ): void => {
                setInput({
                  ...input,
                  education: event.target.value,
                });
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Experience
            </label>
            <textarea
              value={input.experience}
              onChange={(
                event: React.ChangeEvent<HTMLTextAreaElement>
              ): void => {
                setInput({
                  ...input,
                  experience: event.target.value,
                });
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Certificates
            </label>
            <textarea
              value={input.certificates}
              onChange={(
                event: React.ChangeEvent<HTMLTextAreaElement>
              ): void => {
                setInput({
                  ...input,
                  certificates: event.target.value,
                });
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Courses
            </label>
            <textarea
              value={input.courses}
              onChange={(
                event: React.ChangeEvent<HTMLTextAreaElement>
              ): void => {
                setInput({
                  ...input,
                  courses: event.target.value,
                });
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Skills
            </label>
            <textarea
              value={input.skills}
              onChange={(
                event: React.ChangeEvent<HTMLTextAreaElement>
              ): void => {
                setInput({
                  ...input,
                  skills: event.target.value,
                });
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Languages
            </label>
            <textarea
              value={input.languages}
              onChange={(
                event: React.ChangeEvent<HTMLTextAreaElement>
              ): void => {
                setInput({
                  ...input,
                  languages: event.target.value,
                });
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <button
            onClick={create}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <button
            onClick={() => router.push("/campaigns")}
            className="sm:mx-2 sm:mt-0 mt-2 text-blue-700 bg-white hover:drop-shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePage;
