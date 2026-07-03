export const STATES = [
  "Uttar Pradesh",
  "Uttarakhand",
  "Haryana",
  "Himachal Pradesh",
  "Jammu & Kashmir",
] as const;

export type StateName = (typeof STATES)[number];

export const DISTRICTS: Record<StateName, string[]> = {
  "Uttar Pradesh": [
    "Prayagraj", "Ambedkar Nagar", "Amethi", "Amroha",
    "Baghpat", "Barabanki",
    "Basti", "Bijnor", "Budaun", "Chandauli", "Deoria",
    "Farrukhabad", "Gorakhpur",
    "Hamirpur", "Hardoi",
    "Kanpur Dehat", "Kaushambi", "Kheri", "Kushinagar",
    "Maharajganj", "Mahoba", "Meerut",
    "Moradabad", "Pratapgarh", "Raebareli", "Rampur",
    "Sambhal", "Sant Kabir Nagar", "Shrawasti", "Siddharthnagar"
  ],
  Uttarakhand: [
    "Bageshwar", "Champawat", "Nainital",
    "Pithoragarh", "Udham Singh Nagar"
  ],
  Haryana: [
    "Bhiwani", "Fatehabad", "Gurugram", "Hisar",
    "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal",
    "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"
  ],
  "Himachal Pradesh": [
    "Bilaspur", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul & Spiti", "Mandi",
    "Shimla", "Sirmaur", "Una"
  ],
  "Jammu & Kashmir": [
    "Jammu", "Reasi", "Udhampur"
  ],
};
