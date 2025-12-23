import type { CheckoutField } from "@/types/userInterface";
import { reactive } from "vue";

export const checkoutFields = reactive<CheckoutField[]>([
  { id: "address", name: "address", type: "text" },
  { id: "country", name: "country", type: "select", options: [] },
  { id: "city", name: "city", type: "select", options: [] },
  { id: "details", name: "details", type: "text" },
  { id: "phone", name: "phone", type: "tel" },
]);

export const cityOptions: Record<string, string[]> = {
  cairo: [
    "Nasr City",
    "Heliopolis",
    "New Cairo",
    "Maadi",
    "Zamalek",
    "Downtown",
    "Garden City",
    "Mokattam",
    "Shubra",
    "Ain Shams",
    "El Marg",
    "El Salam",
    "Helwan",
    "15th of May",
    "Badr City",
    "El Sherouk",
  ],

  giza: [
    "Dokki",
    "Mohandessin",
    "Haram",
    "Faisal",
    "Sheikh Zayed",
    "6th of October",
    "Imbaba",
    "Kerdasa",
    "Badrashein",
    "Al Ayyat",
    "Al Saf",
    "Atfih",
  ],

  alexandria: [
    "Smouha",
    "Stanley",
    "Gleem",
    "Sidi Gaber",
    "Miami",
    "Mandara",
    "Borg El Arab",
    "Agami",
    "Raml",
    "Moharam Bek",
  ],

  behaira: [
    "Damanhour",
    "Kafr El-Dawar",
    "Rashid",
    "Edku",
    "Abu El-Matamir",
    "Hosh Issa",
    "Kom Hamada",
    "Delengat",
  ],

  gharbiya: [
    "Tanta",
    "El Mahalla El Kubra",
    "Kafr El-Zayat",
    "Zefta",
    "Samanoud",
  ],

  dakahlia: [
    "Mansoura",
    "Talkha",
    "Mit Ghamr",
    "Dekernes",
    "Aga",
    "Manzala",
    "Belqas",
    "Sherbin",
  ],

  sharqia: [
    "Zagazig",
    "10th of Ramadan",
    "Belbeis",
    "Minya El-Qamh",
    "Abu Hammad",
    "Faqous",
    "Hihya",
  ],

  monofia: [
    "Shebin El-Kom",
    "Sadat City",
    "Menouf",
    "Ashmoun",
    "Quesna",
    "Berket El-Sabaa",
  ],

  kafr_el_sheikh: [
    "Kafr El-Sheikh",
    "Desouk",
    "Baltim",
    "Fuwwah",
    "Metoubes",
    "Sidi Salem",
  ],

  qalyubia: [
    "Banha",
    "Qalyub",
    "Shubra El-Kheima",
    "El Khanka",
    "Toukh",
    "Shebeen El-Qanater",
  ],

  ismailia: [
    "Ismailia",
    "Fayed",
    "Qantara East",
    "Qantara West",
    "Abu Suweir",
    "Tell El-Kebir",
  ],

  suez: ["Suez", "Arbaeen", "Ataqa"],

  port_said: ["Port Said", "Port Fouad"],

  damietta: [
    "Damietta City",
    "New Damietta",
    "Ras El-Bar",
    "Faraskur",
    "Kafr Saad",
    "Zarqa",
  ],

  fayoum: ["Fayoum City", "Senoures", "Etsa", "Tamiya", "Youssef El-Seddik"],

  bani_sweif: ["Bani Sweif City", "El Wasta", "Nasser", "Biba", "Ihnasia"],

  minya: [
    "Minya City",
    "New Minya",
    "Mallawi",
    "Samalut",
    "Maghagha",
    "Abu Qurqas",
  ],

  assiut: ["Assiut City", "Dairut", "Manfalut", "Qusiya", "Abnub", "Abu Tig"],

  sohag: [
    "Sohag City",
    "Akhmim",
    "Girga",
    "Tahta",
    "Dar El-Salam",
    "El Maragha",
  ],

  qena: ["Qena City", "Nag Hammadi", "Qus", "Farshout", "Abu Tesht"],

  luxor: ["Luxor City", "Armant", "Esna", "New Luxor"],

  aswan: ["Aswan City", "Kom Ombo", "Edfu", "Daraw", "Abu Simbel"],

  red_sea: ["Hurghada", "El Gouna", "Safaga", "Marsa Alam", "Quseir"],

  matrouh: ["Marsa Matrouh", "El Alamein", "Siwa", "Sallum", "El Dabaa"],

  north_sinai: ["Arish", "Sheikh Zuweid", "Rafah", "Bir El-Abd"],

  south_sinai: [
    "Sharm El-Sheikh",
    "Dahab",
    "Nuweiba",
    "Taba",
    "Saint Catherine",
    "Ras Sedr",
  ],

  new_valley: ["Kharga", "Dakhla", "Farafra", "Balat"],
};
