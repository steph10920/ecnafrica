const ImpactSnapshot = () => {
  const stats = [
    { label: "Volunteers", value: "120+" },
    { label: "Learners Reached", value: "4,500" },
    { label: "Projects Funded", value: "32" },
    { label: "Satisfaction", value: "98%" },
  ];

  return (
    <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-6 text-white shadow-lg">
      <h5 className="font-semibold text-lg">Impact Snapshot</h5>
      <p className="mt-2 text-sm text-white/90">
        Quick view of achievements
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {stats.map((item) => (
          <div
            key={item.label}
            className="bg-white/10 rounded-lg p-4 text-center"
          >
            <div className="text-2xl font-bold">{item.value}</div>
            <div className="text-xs">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactSnapshot;
