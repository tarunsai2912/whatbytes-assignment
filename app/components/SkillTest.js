import { LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#4F46E5", "#E11D48"];

const SkillTest = ({
  graphData,
  pieData,
  rank,
  percentile,
  correctAnswers,
  onOpenModal,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 text-black">
      <div className="flex-1 space-y-4">
        <h2 className="text-lg font-bold">Skill Test</h2>
        <div className="bg-white shadow p-4 rounded">
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-4">
              <img
                src="https://world-it.ro/images/logo_html.png"
                alt="HTML Logo"
                className="w-12 h-12"
              />
              <div>
                <h3 className="font-bold">Hyper Text Markup Language</h3>
                <p className="text-sm">Questions: 08 | Duration: 15mins | Submitted: 5 June 2021</p>
              </div>
            </div>
            <button
              onClick={onOpenModal}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Update
            </button>
          </div>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-lg font-bold">Quick Statistics</h2>
          <div className="flex space-x-4 mt-4">
            <p>YOUR RANK: <strong>{rank}</strong></p>
            <p>PERCENTILE: <strong>{percentile}%</strong></p>
            <p>CORRECT ANSWERS: <strong>{correctAnswers}/15</strong></p>
          </div>
        </div>
        <div className="bg-white shadow p-4 rounded flex flex-col gap-6">
          <h3>Comparison Graph</h3>
          <p>
            <strong>You scored {percentile}% percentile</strong> which is lower than the average percentile of 72% of all the engineers who took this assessment
          </p>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={graphData}>
                <XAxis dataKey="x" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="y" stroke="#4F46E5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4">
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-lg font-bold">Syllabus-Wise Analysis</h2>
          <div className="mt-4">
            <div>
              HTML Tools, Forms, History
              <div className="flex flex-row items-center gap-3">
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div className="bg-blue-600 h-2 rounded" style={{ width: "80%" }} />
                </div>
                <h3 className="text-blue-600">80%</h3>
              </div>
            </div>
            <div className="mt-2">
              Tags & References in HTML
              <div className="flex flex-row items-center gap-3">
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div className="bg-orange-600 h-2 rounded" style={{ width: "60%" }} />
                </div>
                <h3 className="text-orange-600">60%</h3>
              </div>
            </div>
            <div className="mt-2">
              Tables & References in HTML
              <div className="flex flex-row items-center gap-3">
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div className="bg-red-600 h-2 rounded" style={{ width: "24%" }} />
                </div>
                <h3 className="text-red-600">24%</h3>
              </div>
            </div>
            <div className="mt-2">
              Tables & CSS Basics
              <div className="flex flex-row items-center gap-3">
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div className="bg-green-600 h-2 rounded" style={{ width: "96%" }} />
                </div>
                <h3 className="text-green-600">96%</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow p-4 rounded flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <h2 className="text-lg font-bold">Question Analysis</h2>
            <h3 className="text-blue-900">{correctAnswers}/15</h3>
          </div>
          <p>
            <strong>You scored {correctAnswers} question correct out of 15.</strong> However, still needs some improvements
          </p>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTest;
