export default function Home() {
  return (
    <main>
      <section className="left section flex flex-row">
        <div className=" bg-red-100 w-[50vh]">
          <div className="content">
            <h1 className="logo mt-16 ml-8">ATM</h1>
            <ul className="ml-4 text-xl ">
              <li className="mt-2 ml-2  ">Dashboard</li>
              <li className="mt-2 ml-2  ">Students</li>
              <li className="mt-2 ml-2  ">Attendance</li>
              <li className="mt-2 ml-2  ">Setting</li>
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
