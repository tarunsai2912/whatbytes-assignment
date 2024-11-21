'use client'
import Sidebar from "./components/Sidebar";
import SkillTest from "./components/SkillTest";
import UpdateModal from "./components/UpdateModal";
import { useState } from "react";

const Page = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [rank, setRank] = useState(10);
  const [percentile, setPercentile] = useState(80);
  const [correctAnswers, setCorrectAnswers] = useState(12);

  const graphData = [
    { x: "Q1", y: 2 },
    { x: "Q2", y: 5 },
    { x: "Q3", y: 7 },
    { x: "Q4", y: 10 },
    { x: "Q5", y: 12 },
  ];

  const pieData = [
    { name: "Correct", value: correctAnswers },
    { name: "Incorrect", value: 15 - correctAnswers },
  ];

  const handleSave = (data) => {
    setRank(data.rank);
    setPercentile(data.percentile);
    setCorrectAnswers(data.correctAnswers);
    setModalOpen(false);
  };

  return (
    <main className="bg-white flex w-full text-black">
      <Sidebar />
      <div className="flex-1 p-4">
        <SkillTest
          graphData={graphData}
          pieData={pieData}
          rank={rank}
          percentile={percentile}
          correctAnswers={correctAnswers}
          onOpenModal={() => setModalOpen(true)}
        />
      </div>
      <UpdateModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
      />
    </main>
  );
};

export default Page;
