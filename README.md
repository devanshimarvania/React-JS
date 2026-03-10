# 🎓 StudentHub — College Student Management System

A beginner-friendly full-stack React application for managing college students. Built with React, Redux, Redux Thunk, React Router, Bootstrap 5, and JSON Server as a mock REST API backend.

---

## 🖥️ Live Preview

> Run locally at **http://localhost:5173**

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| ⚛️ React 18 | UI library |
| 🗂️ Redux + Redux Thunk | Global state management + async actions |
| 🔀 React Router v6 | Client-side routing |
| 🎨 Bootstrap 5 | Responsive styling |
| 🗄️ JSON Server | Mock REST API backend |
| ⚡ Vite | Fast dev server & bundler |

---

## ✨ Features

- 📋 **View Students** — Responsive card grid showing all enrolled students
- ➕ **Add Student** — Form with validation to enroll a new student
- ✏️ **Edit Student** — Inline editing on each student card
- 🗑️ **Delete Student** — Remove a student with confirmation dialog
- 🔍 **Search** — Search students by name or roll number
- 🎓 **Filter by Degree** — Filter by B.Tech, MBA, BCA, MCA, and more
- 📅 **Filter by Year** — Filter by 1st, 2nd, 3rd, or 4th year
- ↕️ **Sort** — Sort by name (A–Z) or roll number
- 🔐 **Authentication** — Login/logout with protected routes
- 💾 **Session Persistence** — Stays logged in after page refresh

---

## 📁 Project Structure

```
student-management/
│
├── 📄 package.json           ← Dependencies & scripts
├── 📄 vite.config.js         ← Vite configuration (port 5173)
├── 📄 index.html             ← Root HTML entry point
├── 📄 db.json                ← JSON Server mock database
│
└── src/
    ├── 📄 main.jsx           ← Entry point — wraps app in Redux Provider
    ├── 📄 App.jsx            ← Route definitions
    │
    ├── components/
    │   ├── 📄 Navbar.jsx         ← Top navigation bar
    │   ├── 📄 PrivateRoute.jsx   ← Auth guard for protected pages
    │   ├── 📄 StudentList.jsx    ← Home page: cards + sort/filter/search
    │   ├── 📄 StudentDetails.jsx ← Single student card with edit & delete
    │   └── 📄 StudentForm.jsx    ← Add new student form
    │
    ├── pages/
    │   └── 📄 LoginPage.jsx      ← Login screen
    │
    └── redux/
        ├── 📄 store.js           ← Redux store setup
        ├── actions/
        │   ├── 📄 actionTypes.js      ← Action type constants
        │   ├── 📄 studentActions.js   ← CRUD thunks for students
        │   └── 📄 authActions.js      ← Login / logout thunks
        └── reducers/
            ├── 📄 studentReducer.js   ← Student state management
            └── 📄 authReducer.js      ← Auth state management
```

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/student-management.git
cd student-management
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run both servers together
```bash
npm run dev
```

This starts:
- ⚛️ **React app** → http://localhost:5173
- 🗄️ **JSON Server** → http://localhost:5000

### Or run separately
```bash
# Terminal 1 — React + Vite
npm start

# Terminal 2 — JSON Server (mock backend)
npm run server
```

---

## 🔑 Login Credentials

| Username | Password |
|----------|----------|
| `admin`  | `admin123` |

---

## 🗄️ API Endpoints (JSON Server)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/students` | Fetch all students |
| `POST` | `/students` | Add a new student |
| `PUT` | `/students/:id` | Update a student |
| `DELETE` | `/students/:id` | Delete a student |

---

## 🎓 Degree Programs Supported

B.Tech Computer Science · B.Tech IT · B.Tech Electronics · B.Tech Mechanical · B.Tech Civil · BCA · BBA · B.Com · B.Sc Physics · B.Sc Chemistry · B.Sc Mathematics · MBA · MCA · M.Tech Computer Science · M.Tech Electronics

---

## 🧠 Key Concepts for Beginners

**Redux Flow:**
```
User Action → dispatch(thunk) → API call → dispatch(action) → reducer → store updated → UI re-renders
```

**PrivateRoute** — Checks if user is logged in. If not, redirects to `/login` automatically.

**Thunk** — A function that returns another function, allowing async API calls before updating the Redux store.

**JSON Server** — Converts `db.json` into a fully working REST API with zero configuration.

---

## 📦 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start React + JSON Server together |
| `npm start` | Start React app only (port 5173) |
| `npm run server` | Start JSON Server only (port 5000) |
| `npm run build` | Build for production |

---

## 📄 License

MIT — free to use and modify.

<img width="1222" height="876" alt="Screenshot 2026-03-10 151831" src="https://github.com/user-attachments/assets/15aaa7d0-d09f-47e3-bbd8-75465eb1703f" />
<img width="1227" height="806" alt="Screenshot 2026-03-10 151853" src="https://github.com/user-attachments/assets/976739a3-a37a-47d0-a82f-e81f9505caa8" />
<img width="1223" height="669" alt="Screenshot 2026-03-10 151908" src="https://github.com/user-attachments/assets/50d6215c-7e2c-4a56-8879-0ab4e980214c" />
<img width="1210" height="649" alt="Screenshot 2026-03-10 151925" src="https://github.com/user-attachments/assets/72f83b96-f4fa-44f0-867c-a707acf2c00d" />
<img width="1209" height="616" alt="Screenshot 2026-03-10 151948" src="https://github.com/user-attachments/assets/7d86c6f8-8614-46d1-8bf2-8ad08c9da745" />
<img width="1212" height="787" alt="Screenshot 2026-03-10 152009" src="https://github.com/user-attachments/assets/dc3da7a1-f711-453c-b60d-0b0b71ce674f" />
<img width="1194" height="784" alt="Screenshot 2026-03-10 152031" src="https://github.com/user-attachments/assets/203ec454-fd7e-4688-9cee-a124d4736325" />
<img width="1186" height="741" alt="Screenshot 2026-03-10 152104" src="https://github.com/user-attachments/assets/0eeaf394-33b4-45c2-bf10-98a5851cb1ee" />
<img width="1209" height="774" alt="Screenshot 2026-03-10 152119" src="https://github.com/user-attachments/assets/e1dafd76-37a7-4cbb-98a9-d6ade944ec01" />
<img width="1234" height="813" alt="Screenshot 2026-03-10 152137" src="https://github.com/user-attachments/assets/2857986f-7920-450b-a425-ded86c3a4deb" />
<img width="1233" height="808" alt="Screenshot 2026-03-10 152148" src="https://github.com/user-attachments/assets/a59efefc-003f-4b1f-8bce-41232a01a97f" />


