import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="left section flex flex-row">
        <div className=" bg-red-400 w-[50vh]">
          <div className="content">
            <div className="logo">abcLOGO</div>
            <ul className="ml-4 text-xl">
              <li>Dashboard</li>
              <li>Students</li>
              <li>Attendance</li>
              <li>Setting</li>
            </ul>
          </div>
        </div>

        <div className=" bg-green-400 w-[163vh] ">right </div>
      </section>
    </main>
  );
}
