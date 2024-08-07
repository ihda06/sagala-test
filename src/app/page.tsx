import Header from "@/components/ui/header/header";
import DevelopmentTable from "./_components/development-table/development-table";

import SelectTable from "./_components/select-table/select-table";
import FourTable from "./_components/four-table/four-table";
import ComplexTable from "./_components/complex-table/complex-table";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Data Table by Ihda Anwari</title>
      </Head>
      <Header title="Data Table" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <DevelopmentTable />
        <SelectTable />
        <FourTable />
        <ComplexTable />
      </div>
    </div>
  );
}
