import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { BookOpen, Heart, Users, Star, ShieldCheck } from "lucide-react";
import CountUp from "react-countup";
import Footer from "../components/Footer";

import dheader from "../assets/dheader.png";
import treePlanting from "../assets/tree-planting.jpg";
import arts from "../assets/arts.jpg";
import healthCamp from "../assets/health-camp.jpg";
import skillsWorkshop from "../assets/skills-workshop.jpg";
import amrefLogo from "../assets/amref.png";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

/* ------------------------------------------------------------------ */
/*  Shared design tokens — kept identical to the rest of the site.     */
/* ------------------------------------------------------------------ */

const THEME_VARS = {
  "--ink": "#1B2A22",
  "--paper": "#F1EDD9",
  "--chalk": "#1F3A2E",
  "--clay": "#B8462F",
  "--gold": "#E3A73B",
  "--sky": "#3E7C8C",
  "--font-display": "'Fraunces', ui-serif, Georgia, serif",
  "--font-body": "'Work Sans', ui-sans-serif, system-ui, sans-serif",
  "--font-hand": "'Caveat', cursive",
};

// Hex duplicates of the palette above — D3 draws into raw SVG outside
// the React/Tailwind tree, so CSS custom properties aren't reliably
// resolved there. Keep these in sync with THEME_VARS by hand.
const HEX = {
  clay: "#B8462F",
  gold: "#E3A73B",
  sky: "#3E7C8C",
  chalk: "#1F3A2E",
  ink: "#1B2A22",
};

const GRAIN_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'>
      <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter>
      <rect width='100%' height='100%' filter='url(#n)'/>
    </svg>`
  );

function Grain({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay ${className}`}
      style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
    />
  );
}

function ChalkUnderline({ className = "" }) {
  return (
    <svg viewBox="0 0 200 18" preserveAspectRatio="none" aria-hidden="true" className={`w-full h-[0.5em] ${className}`}>
      <path
        d="M2 13 C 40 4, 80 17, 118 7 S 178 3, 198 11"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Eyebrow({ children, tone = "gold" }) {
  const color = tone === "gold" ? "text-[var(--gold)]" : "text-[var(--clay)]";
  return (
    <span className={`inline-block -rotate-1 text-2xl ${color}`} style={{ fontFamily: "var(--font-hand)" }}>
      {children}
    </span>
  );
}

function TapeCorner() {
  return (
    <span
      aria-hidden="true"
      className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-2 h-6 w-16 bg-[var(--gold)]/70 shadow-sm"
      style={{ clipPath: "polygon(4% 0, 96% 0, 100% 100%, 0% 100%)" }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Content                                                             */
/* ------------------------------------------------------------------ */

const donors = [
  { name: "Emeldah E.", message: "Donating to ECN has changed lives in our community!" },
  { name: "James K.", message: "I love supporting ECN’s programs for education." },
  { name: "Mary T.", message: "Seeing the impact firsthand makes every shilling worth it." },
];

const causes = [
  {
    title: "Education",
    description: "Support quality education initiatives and school programs.",
    Icon: BookOpen,
    accent: "var(--clay)",
  },
  {
    title: "Health",
    description: "Help provide healthcare, nutrition, and wellness programs.",
    Icon: Heart,
    accent: "var(--sky)",
  },
  {
    title: "Youth Empowerment",
    description: "Enable skills development, mentorship, and community engagement.",
    Icon: Users,
    accent: "var(--gold)",
  },
];

const impactStats = [
  { label: "Volunteers", value: 120, Icon: Users },
  { label: "Learners reached", value: 4500, Icon: BookOpen },
  { label: "Projects funded", value: 32, Icon: Star },
  { label: "Program satisfaction", value: 98, Icon: Heart },
];

const projects = [
  { title: "Arts & Craft", img: arts },
  { title: "Community Health Camp", img: healthCamp },
  { title: "Youth Skills Workshop", img: skillsWorkshop },
  { title: "Tree Planting Initiative", img: treePlanting },
];

const partners = [{ name: "Amref Health Africa", url: "https://amref.org/", logo: amrefLogo }];

const DONATION_TIERS = [1000, 2500, 5000, 10000];

function buildDonationMailto(amount) {
  const subject = amount ? `Donation Intent - KES ${amount.toLocaleString()}` : "Donation Enquiry";
  const body = amount
    ? `Hi ECN team,\n\nI'd like to contribute KES ${amount.toLocaleString()}. Please let me know how to proceed.\n\nThank you,`
    : `Hi ECN team,\n\nI'd like to find out more about donating. Please let me know how to proceed.\n\nThank you,`;
  return `mailto:education@ecnafrica.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/* ------------------------------------------------------------------ */
/*  Donation amount picker — captures giving intent since there is no  */
/*  payment processor wired up yet. Replace this with a real checkout  */
/*  (Stripe / PayPal / M-Pesa) as soon as that's available.            */
/* ------------------------------------------------------------------ */

function DonationPicker() {
  const [selected, setSelected] = useState(DONATION_TIERS[1]);
  const [custom, setCustom] = useState("");

  const amount = custom ? Number(custom) : selected;

  return (
    <div className="relative bg-white p-6 md:p-8 shadow-xl -rotate-1 max-w-md mx-auto">
      <TapeCorner />
      <p className="text-sm font-semibold text-[var(--ink)]/60 uppercase tracking-wide mb-4 text-center">
        Choose an amount (KES)
      </p>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {DONATION_TIERS.map((t) => (
          <button
            key={t}
            onClick={() => {
              setSelected(t);
              setCustom("");
            }}
            className={`py-3 font-semibold border-2 transition ${
              !custom && selected === t
                ? "bg-[var(--clay)] border-[var(--clay)] text-white"
                : "border-[var(--chalk)]/15 text-[var(--chalk)] hover:border-[var(--gold)]"
            }`}
          >
            {t.toLocaleString()}
          </button>
        ))}
      </div>
      <label htmlFor="custom-amount" className="sr-only">
        Custom amount
      </label>
      <input
        id="custom-amount"
        type="number"
        min="1"
        placeholder="Or enter a custom amount"
        value={custom}
        onChange={(e) => setCustom(e.target.value)}
        className="w-full px-4 py-3 border-2 border-[var(--chalk)]/15 focus:border-[var(--gold)] outline-none mb-4 transition"
      />
      <a
        href={buildDonationMailto(amount)}
        className="block text-center bg-[var(--clay)] hover:brightness-110 text-white font-bold px-8 py-3 shadow-lg transition"
      >
        Donate KES {amount ? amount.toLocaleString() : "—"}
      </a>
      <p className="text-xs text-[var(--ink)]/50 text-center mt-3">
        This opens a pre-filled email to our team — we'll follow up with payment details.
      </p>
    </div>
  );
}

export default function Donate() {
  const donationChartRef = useRef();
  const programChartRef = useRef();

  useEffect(() => {
    if (!donationChartRef.current || !programChartRef.current) return;

    const donationData = [
      { month: "Jan", value: 1200 },
      { month: "Feb", value: 1500 },
      { month: "Mar", value: 1800 },
      { month: "Apr", value: 1300 },
      { month: "May", value: 2000 },
    ];

    const programData = [
      { program: "Education", value: 45000 },
      { program: "Health", value: 36000 },
      { program: "Youth", value: 20500 },
    ];

    // Animated gradient area chart with a hand-drawn line reveal and
    // value labels — replaces the original flat bar chart.
    const drawAreaChart = (svgRef, data, xKey, yKey, color) => {
      const width = 400;
      const height = 260;
      const margin = { top: 30, right: 20, bottom: 40, left: 46 };

      const svg = d3
        .select(svgRef.current)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet")
        .style("width", "100%")
        .style("height", "auto")
        .style("overflow", "visible");

      svg.selectAll("*").remove();

      const x = d3
        .scalePoint()
        .domain(data.map((d) => d[xKey]))
        .range([margin.left, width - margin.right])
        .padding(0.6);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d[yKey]) * 1.2])
        .nice()
        .range([height - margin.bottom, margin.top]);

      // Dashed notebook-style gridlines
      svg
        .append("g")
        .selectAll("line")
        .data(y.ticks(4))
        .join("line")
        .attr("x1", margin.left)
        .attr("x2", width - margin.right)
        .attr("y1", (d) => y(d))
        .attr("y2", (d) => y(d))
        .attr("stroke", `${HEX.ink}22`)
        .attr("stroke-dasharray", "4,4");

      const gradientId = `area-gradient-${xKey}`;
      const gradient = svg
        .append("defs")
        .append("linearGradient")
        .attr("id", gradientId)
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", 0)
        .attr("y2", 1);
      gradient.append("stop").attr("offset", "0%").attr("stop-color", color).attr("stop-opacity", 0.5);
      gradient.append("stop").attr("offset", "100%").attr("stop-color", color).attr("stop-opacity", 0.03);

      const area = d3
        .area()
        .x((d) => x(d[xKey]))
        .y0(y(0))
        .y1((d) => y(d[yKey]))
        .curve(d3.curveMonotoneX);

      const line = d3
        .line()
        .x((d) => x(d[xKey]))
        .y((d) => y(d[yKey]))
        .curve(d3.curveMonotoneX);

      svg
        .append("path")
        .datum(data)
        .attr("fill", `url(#${gradientId})`)
        .attr("d", area)
        .style("opacity", 0)
        .transition()
        .duration(700)
        .style("opacity", 1);

      const linePath = svg
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-width", 3)
        .attr("stroke-linecap", "round")
        .attr("stroke-linejoin", "round")
        .attr("d", line);

      const totalLength = linePath.node().getTotalLength();
      linePath
        .attr("stroke-dasharray", `${totalLength} ${totalLength}`)
        .attr("stroke-dashoffset", totalLength)
        .transition()
        .duration(1100)
        .ease(d3.easeCubicOut)
        .attr("stroke-dashoffset", 0);

      svg
        .selectAll(".dot")
        .data(data)
        .join("circle")
        .attr("class", "dot")
        .attr("cx", (d) => x(d[xKey]))
        .attr("cy", (d) => y(d[yKey]))
        .attr("r", 0)
        .attr("fill", HEX.paper)
        .attr("stroke", color)
        .attr("stroke-width", 3)
        .transition()
        .delay((d, i) => i * 130 + 500)
        .duration(350)
        .attr("r", 5);

      svg
        .selectAll(".val")
        .data(data)
        .join("text")
        .attr("class", "val")
        .attr("x", (d) => x(d[xKey]))
        .attr("y", (d) => y(d[yKey]) - 14)
        .attr("text-anchor", "middle")
        .style("font-size", "11px")
        .style("font-weight", "600")
        .style("font-family", "var(--font-body)")
        .attr("fill", HEX.chalk)
        .style("opacity", 0)
        .text((d) => d[yKey].toLocaleString())
        .transition()
        .delay((d, i) => i * 130 + 650)
        .duration(300)
        .style("opacity", 1);

      svg
        .append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickSize(0))
        .call((g) => g.select(".domain").attr("stroke", `${HEX.ink}33`))
        .call((g) => g.selectAll("text").attr("fill", HEX.ink).style("font-family", "var(--font-body)"));
    };

    // Animated donut with hover-expand slices and a center total —
    // replaces the original flat bar chart for program allocation.
    const drawDonutChart = (svgRef, data, labelKey, valueKey, colors) => {
      const width = 400;
      const height = 260;
      const radius = Math.min(width, height) / 2 - 30;

      const svg = d3
        .select(svgRef.current)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet")
        .style("width", "100%")
        .style("height", "auto")
        .style("overflow", "visible");

      svg.selectAll("*").remove();

      const g = svg.append("g").attr("transform", `translate(${width / 2},${height / 2 - 6})`);

      const total = d3.sum(data, (d) => d[valueKey]);
      const pie = d3.pie().value((d) => d[valueKey]).sort(null).padAngle(0.035);
      const arc = d3.arc().innerRadius(radius * 0.58).outerRadius(radius);
      const arcHover = d3.arc().innerRadius(radius * 0.58).outerRadius(radius + 8);
      const arcs = pie(data);

      g.selectAll("path")
        .data(arcs)
        .join("path")
        .attr("fill", (d, i) => colors[i % colors.length])
        .attr("stroke", HEX.paper)
        .attr("stroke-width", 2)
        .style("cursor", "pointer")
        .each(function (d) {
          this._current = { startAngle: d.startAngle, endAngle: d.startAngle };
        })
        .on("mouseenter", function () {
          d3.select(this).transition().duration(180).attr("d", arcHover);
        })
        .on("mouseleave", function () {
          d3.select(this).transition().duration(180).attr("d", arc);
        })
        .transition()
        .duration(900)
        .ease(d3.easeCubicOut)
        .attrTween("d", function (d) {
          const interpolate = d3.interpolate(this._current, d);
          this._current = interpolate(1);
          return (t) => arc(interpolate(t));
        });

      g.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "-0.15em")
        .style("font-family", "var(--font-display)")
        .style("font-weight", "700")
        .style("font-size", "24px")
        .attr("fill", HEX.chalk)
        .text(total.toLocaleString());

      g.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "1.4em")
        .style("font-family", "var(--font-body)")
        .style("font-size", "11px")
        .attr("fill", `${HEX.ink}99`)
        .text("Total");

      g.selectAll(".pct")
        .data(arcs)
        .join("text")
        .attr("class", "pct")
        .attr("transform", (d) => `translate(${arc.centroid(d)})`)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("font-weight", "700")
        .style("font-family", "var(--font-body)")
        .attr("fill", HEX.paper)
        .style("opacity", 0)
        .text((d) => `${Math.round((d.data[valueKey] / total) * 100)}%`)
        .transition()
        .delay(650)
        .duration(350)
        .style("opacity", 1);

      // Legend
      const legend = svg
        .append("g")
        .attr("transform", `translate(${width / 2 - (data.length * 90) / 2}, ${height - 14})`);

      const items = legend
        .selectAll(".legend-item")
        .data(data)
        .join("g")
        .attr("class", "legend-item")
        .attr("transform", (d, i) => `translate(${i * 90}, 0)`);

      items
        .append("rect")
        .attr("width", 10)
        .attr("height", 10)
        .attr("y", -9)
        .attr("fill", (d, i) => colors[i % colors.length]);

      items
        .append("text")
        .attr("x", 16)
        .style("font-size", "11px")
        .style("font-family", "var(--font-body)")
        .attr("fill", HEX.ink)
        .text((d) => d[labelKey]);
    };

    drawAreaChart(donationChartRef, donationData, "month", "value", HEX.clay);
    drawDonutChart(programChartRef, programData, "program", "value", [HEX.sky, HEX.gold, HEX.clay]);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col motion-reduce:[&_*]:!transition-none motion-reduce:[&_*]:!animate-none"
      style={{ ...THEME_VARS, fontFamily: "var(--font-body)", color: "var(--ink)" }}
    >
      <Helmet>
        <title>Donate | ECN Africa</title>
        <meta
          name="description"
          content="Support ECN Africa and help transform communities through education, health, and youth empowerment programs."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,900&family=Work+Sans:wght@400;500;600;700&family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* HERO */}
      <header
        className="relative py-28 text-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${dheader})` }}
      >
        <div className="absolute inset-0 bg-[var(--chalk)]/70" />
        <Grain />
        <div className="relative z-10 px-6">
          <Eyebrow>Every gift counts</Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-3 text-4xl md:text-5xl font-extrabold text-[var(--paper)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Support{" "}
            <span className="relative inline-block">
              ECN Africa
              <ChalkUnderline className="absolute left-0 -bottom-1" />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-[var(--paper)]/85"
          >
            Your support helps us empower communities through education, health, and youth
            programs.
          </motion.p>

          <div className="mt-4 flex items-center justify-center gap-2 text-[var(--paper)]/70 text-sm">
            <ShieldCheck size={16} aria-hidden="true" />
            <span>In partnership with Amref Health Africa</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-10">
            <DonationPicker />
          </motion.div>
        </div>
      </header>

      <main className="flex-1 bg-[var(--paper)]">
        <div className="max-w-7xl mx-auto p-6 md:p-12 flex flex-col gap-20">
          {/* Causes */}
          <section>
            <div className="text-center mb-10">
              <Eyebrow tone="clay">Where it goes</Eyebrow>
              <h2
                className="mt-2 text-3xl font-bold text-[var(--chalk)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Donation Causes
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {causes.map((cause, i) => (
                <motion.div
                  key={cause.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -4 }}
                  className={`relative bg-white p-6 shadow-sm hover:shadow-xl transition flex flex-col items-start gap-3 ${
                    i % 2 === 0 ? "md:-rotate-1" : "md:rotate-1"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{ backgroundColor: cause.accent }}
                  />
                  <cause.Icon size={28} style={{ color: cause.accent }} aria-hidden="true" />
                  <h3
                    className="text-xl font-bold text-[var(--chalk)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {cause.title}
                  </h3>
                  <p className="text-[var(--ink)]/70">{cause.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Donor Testimonials */}
          <section>
            <div className="text-center mb-10">
              <Eyebrow>In their words</Eyebrow>
              <h2
                className="mt-2 text-3xl font-bold text-[var(--chalk)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What Donors Say
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {donors.map((donor, i) => (
                <motion.div
                  key={donor.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative bg-white p-6 pl-8 shadow-sm"
                >
                  <span aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-2 bg-[var(--gold)]" />
                  <p className="text-[var(--ink)]/80 italic" style={{ fontFamily: "var(--font-display)" }}>
                    "{donor.message}"
                  </p>
                  <p className="mt-3 font-semibold text-[var(--clay)]">— {donor.name}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Impact Stats */}
          <section>
            <div className="text-center mb-10">
              <Eyebrow tone="clay">The numbers</Eyebrow>
              <h2
                className="mt-2 text-3xl font-bold text-[var(--chalk)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Impact Snapshot
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {impactStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative bg-[var(--chalk)] text-[var(--paper)] p-6 shadow-lg flex flex-col items-center gap-2 overflow-hidden"
                >
                  <Grain />
                  <stat.Icon size={26} className="relative z-10 text-[var(--gold)]" aria-hidden="true" />
                  <div className="relative z-10 text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    <CountUp end={stat.value} duration={2} separator="," />
                    {stat.label === "Program satisfaction" ? "%" : ""}
                  </div>
                  <div className="relative z-10 text-sm text-[var(--paper)]/75">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* D3 Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 shadow-lg">
                <h3
                  className="text-xl font-bold text-[var(--chalk)] mb-4 text-center"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Donation Trend
                </h3>
                <svg ref={donationChartRef} className="w-full" />
              </div>
              <div className="bg-white p-6 shadow-lg">
                <h3
                  className="text-xl font-bold text-[var(--chalk)] mb-4 text-center"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Program Impact
                </h3>
                <svg ref={programChartRef} className="w-full" />
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <div className="text-center mb-10">
              <Eyebrow>From the field</Eyebrow>
              <h2
                className="mt-2 text-3xl font-bold text-[var(--chalk)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Projects Completed
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -4 }}
                  className={`relative bg-white p-3 pb-6 shadow-md ${i % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
                >
                  <TapeCorner />
                  <img src={project.img} alt={project.title} className="w-full h-40 object-cover" loading="lazy" />
                  <h3 className="mt-3 text-center text-base font-semibold text-[var(--chalk)]">
                    {project.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="relative -mx-6 md:-mx-12 px-6 py-16 bg-[var(--clay)] text-[var(--paper)] text-center overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-[repeating-linear-gradient(90deg,var(--paper)_0,var(--paper)_10px,transparent_10px,transparent_20px)] opacity-40"
            />
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to Make a Difference?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative z-10 mt-4 text-lg max-w-2xl mx-auto text-[var(--paper)]/85"
            >
              Join us in transforming communities. Reach out today to explore how your support
              can empower education, health, and youth programs across Africa.
            </motion.p>
            <motion.a
              whileHover={{ scale: 1.03 }}
              href={buildDonationMailto(null)}
              className="relative z-10 inline-block mt-8 px-8 py-3 bg-[var(--paper)] text-[var(--clay)] font-bold shadow-lg transition"
            >
              Contact Us to Donate
            </motion.a>
          </section>

          {/* Partners */}
          <section>
            <div className="text-center mb-10">
              <Eyebrow tone="clay">Working together</Eyebrow>
              <h2
                className="mt-2 text-3xl font-bold text-[var(--chalk)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Partners
              </h2>
            </div>
            <div className="flex justify-center items-center gap-12 flex-wrap">
              {partners.map((partner) => (
                <motion.a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white shadow-md flex items-center justify-center w-40 h-20"
                >
                  <img src={partner.logo} alt={partner.name} className="object-contain h-full" />
                </motion.a>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
