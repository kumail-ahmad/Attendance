export default function Home() {
  return (
    <main>
      <section className="left section flex flex-row min-h-[100vh]">
        <div className=" bg--100 w-[50vh]">
          <div className="content">
            <h1 className="logo mt-16 ml-5">
              <img src="atmlogo.png" alt="logo" />
            </h1>
            <hr className="font-extrabold" />
            <ul className="ml-4 text-lg font-semilight ">
              <li className="mt-4 ml-2 p-2 rounded-lg mr-3 hover:bg-blue-300">Dashboard</li>
              <li className="mt-4 ml-2 p-2 rounded-lg mr-3 hover:bg-blue-300">Students</li>
              <li className="mt-4 ml-2 p-2 rounded-lg mr-3 hover:bg-blue-300">Attendance</li>
              <li className="mt-4 ml-2 p-2 rounded-lg mr-3 hover:bg-blue-300">Setting</li>
            </ul>
          </div>
        </div>

        <div className=" bg-green-400 w-[163vh] ">
          <div>UserProfile</div>
          <div>
            <h1>Dashboard </h1>
            <div className="boxes">
              <div className="box flex ">
                <div className="img">IC</div>
                <div>
                  <div className="heading">Total Students</div>
                  <div className="value">20%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
