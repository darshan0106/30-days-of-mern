# Day 10: User Profile & JWT User Relations

## 🏁 Goal

**Frontend:** Fetch and display user data using a custom useFetch hook.
**Backend:** Create a Post model that references the User ID (One-to-Many).

## 🛠 Tech Stack

- **Frontend:** React, Vite
- **Backend:** Node.js, Express

## 📝 Learning Outcomes

- Built a reusable custom React hook to handle API calls efficiently.
- Managed loading, error, and success states using useState and useEffect.
- Improved code reusability and separation of concerns by isolating data-fetching logic.
- Reduced component complexity by keeping UI logic clean and declarative.
- Designed a One-to-Many relationship using MongoDB and Mongoose.
- Implemented ObjectId references to link Posts with Users.
- Used populate() to fetch relational data efficiently.
- Built RESTful APIs for creating users and associating posts with them.
- Followed a clean MVC-style backend structure in Express.
- Strengthened understanding of real-world backend data modeling.

## 🏃‍♂️ How to Run

**Backend:**

```bash
cd backend
npm install
node server.js
```

**Frontend**

```bash
cd frontend
npm install
npm run dev
```
