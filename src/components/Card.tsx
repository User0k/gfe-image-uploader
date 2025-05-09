import { getFlagEmoji } from "../utils/getFlagEmoji";

function Card() {
  const flagEmoji = getFlagEmoji("Canada");

  return (
    <article className="card max-w-180 w-full mx-auto bg-white rounded-lg shadow-lg">
      <header className="relative h-42 bg-cover bg-center bg-[url(/cover.jpg)] rounded-tl-lg rounded-tr-lg">
        <div className="avatar"></div>
      </header>
      <section className="sm:px-6 px-4">
        <div className="flex justify-end sm:mt-4 mt-2 sm:mb-6 mb-2">
          <button className="shadow">Update picture</button>
        </div>
        <h1 className="font-semibold sm:text-3xl text-2xl text-gray-800 mb-6">
          Jack Smith
        </h1>
        <ul className="flex flex-wrap items-center gap-2 text-xl pb-2 max-sm:flex-col max-sm:items-start">
          <li>kingjack</li>
          <li>
            <p className="flex items-center gap-2">
              <span className="font-black text-gray-500 pb-2 max-sm:hidden">
                .
              </span>
              Senior Product Designer
            </p>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gray-500">at</span>
            <img src="/webflow.svg" alt="Webflow logo" className="max-h-6" />
            Webflow
            <p className="flex items-center gap-2 text-gray-500">
              <span className="font-black text-gray-500 pb-2">.</span>
              He/Him
            </p>
          </li>
        </ul>
        <footer className="flex items-center text-gray-500 pb-8">
          <span aria-label="Canadian flag" role="img" className="text-xl">
            {flagEmoji}
          </span>
          <span className="text-lg pl-4">Vancouver, Canada</span>
        </footer>
      </section>
    </article>
  );
}

export default Card;
