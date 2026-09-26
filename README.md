# 🏋️ FitLog — Train With Intent. Log Every Set.

FitLog is a modern, dark-themed fitness companion app built with Next.js (App Router) and Tailwind CSS. It allows users to browse workout libraries, manage daily routines, track calories and workout durations, and save exercises for later.

🌐 **Live Link:** [https://assignment-6-fit-log-alpha.vercel.app](https://assignment-6-fit-log-alpha.vercel.app) 

---

## 🚀 Technologies Used
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Notifications:** React Hot Toast
- **Deployment:** Vercel

## ✨ Key Features
1. **Live API Workout Library:** Fetches real-time workout lists and individual workout details from an external API.
2. **Interactive Routine Builder (My Plan):** Add exercises to Today's Plan with a limit of 5 lifts per day, view real-time calories/duration summaries.
3. **Sort & Dynamic Filtering:** Filter exercises by duration, calories burned, or rating in the library.
4. **Mark Lifts as Done & Save for Later:** Manage workouts with completion toggles, saved bookmarks, and toast notifications.
5. **Persistent State Management:** Automatically syncs plan and saved lists with `localStorage` so data survives page refreshes.