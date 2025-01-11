import { authOptions } from "@/utils/AuthOptions";
import { getServerSession } from "next-auth";
import { useState } from "react";

const DashboardPage = async() => {
  const [state, setState] = useState();
  const session = await getServerSession(authOptions);
  console.log('session', session)
  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Welcome To Dashboard Page {session?.user?.name} </h1>
    </div>
  );
};

export default DashboardPage;
