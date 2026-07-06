export default function Busca({ termo, onChange }) {
  return (
    <div className="relative w-full sm:w-72">
      <input
        type="text"
        value={termo}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar por nome..."
        className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-9 text-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {termo && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          aria-label="Limpar busca"
        >
          ×
        </button>
      )}
    </div>
  );
}