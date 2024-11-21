import { useForm } from "react-hook-form";

const UpdateModal = ({ isOpen, onClose, onSave }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center text-black">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-lg font-bold mb-4">Update Details</h2>
        <form onSubmit={handleSubmit(onSave)} className="space-y-4">
          <div>
            <input
              type="number"
              placeholder="Rank"
              {...register("rank", { required: "Rank shouldn't be empty" })}
              className="w-full border p-2 rounded"
            />
            {errors.rank && (
              <span className="text-red-500">{errors.rank.message}</span>
            )}
          </div>
          <div>
            <input
              type="number"
              placeholder="Percentile"
              {...register("percentile", { required: "Percentile shouldn't be empty" })}
              className="w-full border p-2 rounded"
            />
            {errors.percentile && (
              <span className="text-red-500">{errors.percentile.message}</span>
            )}
          </div>
          <div>
            <input
              type="number"
              placeholder="Correct Answers"
              {...register("correctAnswers", {
                required: "Correct answers shouldn't be empty",
              })}
              className="w-full border p-2 rounded"
            />
            {errors.correctAnswers && (
              <span className="text-red-500">{errors.correctAnswers.message}</span>
            )}
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
