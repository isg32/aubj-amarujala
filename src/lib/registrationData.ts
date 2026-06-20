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
    "Prayagraj", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya",
    "Azamgarh", "Baghpat", "Barabanki",
    "Basti", "Bijnor", "Budaun", "Chandauli", "Deoria",
    "Farrukhabad", "Gorakhpur",
    "Hamirpur", "Hardoi", "Jalaun",
    "Kannauj", "Kanpur Dehat", "Kasganj", "Kaushambi", "Kheri", "Kushinagar",
    "Maharajganj", "Mahoba", "Mau", "Meerut", "Mirzapur",
    "Moradabad", "Muzaffarnagar", "Pratapgarh", "Raebareli", "Rampur", "Saharanpur",
    "Sambhal", "Sant Kabir Nagar", "Shamli", "Shrawasti", "Siddharthnagar",
    "Unnao", "Varanasi"
  ],
  Uttarakhand: [
    "Bageshwar", "Champawat", "Dehradun", "Nainital",
    "Pithoragarh", "Roorkee", "Udham Singh Nagar"
  ],
  Haryana: [
    "Bhiwani", "Charkhi Dadri", "Fatehabad", "Gurugram", "Hisar",
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
