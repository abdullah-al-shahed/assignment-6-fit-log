# 🏋️‍♂️ FitLog — Train With Intent. Log Every Set.

FitLog is a dark-themed, responsive, no-nonsense gym companion app built with Next.js (App Router) and Tailwind CSS. It allows fitness enthusiasts to browse workout libraries, add them to a daily cap of 5 planned lifts, save workouts for later, track key metrics, and log completed sets seamlessly.

---

## 🚀 Live Demo & Repository
- **Live Site:** [https://assignment-6-fit-log-alpha.vercel.app](https://assignment-6-fit-log-alpha.vercel.app)
- **GitHub Repository:** [https://github.com/abdullah-al-shahed/assignment-6-fit-log.git]

---

## ✨ 5 Key Features

1. **Interactive Workout Library & Details:**
   - Browse 12+ targeted lifts fetched dynamically from the FitLog API with filterable stats (Duration, Calories, Rating, Muscle Groups).
   - Detailed view featuring step-by-step exercise instructions and technical specifications.

2. **Daily Plan Cap (Max 5 Lifts) & Saved Workouts:**
   - Restricts daily workout plans to a maximum of 5 exercises for focused training.
   - Separate "Saved" tab to bookmark workouts for future routines.

3. **Live Metrics Summary & Completion Tracking:**
   - Real-time calculator tracking total planned exercises, cumulative workout minutes, and total calorie burn.
   - Interactive "Mark as Done" feature with visual feedback.

4. **Dynamic Sorting & LocalStorage Persistence:**
   - Sort planned/saved lifts dynamically by Duration, Calories, or Rating.
   - Automatic state persistence using `localStorage` so your daily routine survives page reloads.

5. **Toast Notifications & Fully Responsive Design:**
   - Instant feedback using `react-hot-toast` for user actions (adding, removing, or completing lifts).
   - Tailored mobile-first UI with dark aesthetic, active navigation highlights, and custom 404 handling.

---

## 🛠️ Technologies Used

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Notifications:** React Hot Toast
- **Deployment:** Vercel

---

## 📋 Git Commit Guidelines
This repository strictly follows clean commit history practices with clear, descriptive commit messages detailing features, UI refinements, context setups, and bug fixes.