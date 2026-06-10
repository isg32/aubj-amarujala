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
    "Agra", "Prayagraj", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya",
    "Azamgarh", "Baghpat", "Barabanki",
    "Basti", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria",
    "Etah", "Farrukhabad", "Gautam Buddha Nagar",
    "Ghaziabad", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun",
    "Kannauj", "Kanpur Dehat", "Kasganj", "Kaushambi", "Kheri", "Kushinagar",
    "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mau", "Meerut", "Mirzapur",
    "Moradabad", "Muzaffarnagar", "Pratapgarh", "Raebareli", "Rampur", "Saharanpur",
    "Sambhal", "Sant Kabir Nagar", "Shamli", "Shrawasti", "Siddharthnagar",
    "Unnao", "Varanasi"
  ],
  Uttarakhand: [
    "Almora", "Bageshwar", "Champawat", "Dehradun", "Haridwar", "Nainital",
    "Pithoragarh", "Udham Singh Nagar"
  ],
  Haryana: [
    "Bhiwani", "Charkhi Dadri", "Fatehabad", "Gurugram", "Hisar", "Jhajjar",
    "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal",
    "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"
  ],
  "Himachal Pradesh": [
    "Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul & Spiti", "Mandi",
    "Shimla", "Sirmaur", "Solan", "Una"
  ],
  "Jammu & Kashmir": [
    "Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kathua",
    "Kishtwar", "Kulgam", "Kupwara", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba",
    "Shopian", "Srinagar", "Udhampur"
  ],
};
