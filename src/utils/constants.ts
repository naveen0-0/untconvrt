import { IDashBoardCard } from "@/types";

export const siteData = {
  title: "untconvrt",
  description:
    "This website provides you with all the unit conversions like Currency,Data Storage, Power, Energy and file conversions",
  url: "https://untconvrt.vercel.app",
  image: {
    src: "/images/default.jpg",
    alt: "untconvrt",
  },
};

export const DASHBOARD_CARDS_INFO: IDashBoardCard[] = [
  {
    id: 1,
    title: "Length and Distance",
    description:
      "Seamlessly convert length units, like meters, feet, miles, and kilometers, for precise measurements and convenient transitions.",
    icon: null,
    url: "/converter/distance",
  },
  {
    id: 2,
    title: "Area",
    description:
      "Seamlessly convert between different units of area, such as square meters, square feet, acres, and hectares, facilitating accurate measurements and comparisons across various systems.",
    icon: null,
    url: "/converter/area",
  },
  {
    id: 3,
    title: "Volume",
    description:
      "Convert area units, like sq. meters, sq. feet, acres, and hectares, ensuring precise measurements and comparisons across systems.",
    icon: null,
    url: "/converter/volume",
  },
  {
    id: 4,
    title: "Weight and Mass",
    description:
      "Effortlessly convert weight units, like kilograms, pounds, ounces, and grams, for accurate measurements and convenient transitions.",
    icon: null,
    url: "/converter/weight",
  },
  {
    id: 5,
    title: "Time",
    description:
      "Seamlessly convert time units, including seconds, minutes, hours, and days, for precise measurements and smooth transitions.",
    icon: null,
    url: "/converter/time",
  },
  {
    id: 6,
    title: "Speed",
    description:
      "Swiftly convert speed units, such as kilometers per hour (km/h), miles per hour (mph), meters per second (m/s), and knots, for accurate calculations and efficient transitions.",
    icon: null,
    url: "/converter/speed",
  },
  {
    id: 7,
    title: "Temperature",
    description:
      "Easily convert temperature units, including Celsius, Fahrenheit, Kelvin, and Rankine, for precise measurements and effortless transitions.",
    icon: null,
    url: "/converter/temperature",
  },
  {
    id: 8,
    title: "Pressure",
    description:
      "Effortlessly convert pressure units, such as Pascals, atmospheres, pounds per square inch (psi), and millibars, for accurate measurements and convenient transitions.",
    icon: null,
    url: "/converter/pressure",
  },
  {
    id: 9,
    title: "Energy",
    description:
      "Seamlessly convert energy units, including joules, calories, kilowatt-hours (kWh), and electron volts (eV), for precise measurements and effortless transitions.",
    icon: null,
    url: "/converter/energy",
  },
  {
    id: 10,
    title: "Power",
    description:
      "Swiftly convert power units, such as watts, kilowatts, horsepower, and BTUs per hour, for accurate measurements and convenient transitions.",
    icon: null,
    url: "/converter/power",
  },
  {
    id: 11,
    title: "Data Storage",
    description:
      "Effortlessly convert data storage units, including bytes, kilobytes, megabytes, and gigabytes, for precise measurements and seamless transitions.",
    icon: null,
    url: "/converter/storage",
  },
  {
    id: 12,
    title: "Currency",
    description:
      "Easily convert currencies, such as USD, EUR, GBP, and JPY, for accurate exchange rates and smooth financial transactions.",
    icon: null,
    url: "/converter/currency",
  },
];
