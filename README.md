## ⏱ Counter Component (Functional + Timer Example)

**File:** `Counter.jsx`
**Concepts Covered:** `useState`, `useEffect`, event handling, functional components

### 📌 Overview

The `Counter` component demonstrates **React state management**, **event handling**, and **effects** using hooks. It includes **two independent counters**:

1. **Interactive Counter**

   * Uses `useState` to manage `value`.
   * Two buttons allow the user to **increase** or **decrease** the count.
   * Updates happen instantly using React's re-rendering system.

2. **Timer Counter**

   * Uses `useState` (`timerCount`) and `useEffect` to create an **auto-incrementing timer**.
   * The timer increases every second.
   * `useEffect` cleanup ensures the interval is cleared when the component unmounts to prevent memory leaks.

---

### 🎯 Key Features

* **State Management**: Shows how multiple state variables can be used in a single component.
* **Event Handling**: Button clicks update state dynamically.
* **Side Effects & Cleanup**: Demonstrates `useEffect` for intervals and proper cleanup.
* **Dynamic Rendering**: UI updates immediately on state changes.

---

* **Counter** updates when user clicks buttons.
* **Timer** updates automatically every second.

---

<img width="377" height="244" alt="Screenshot 2025-11-29 185438" src="https://github.com/user-attachments/assets/e703e26e-093f-4492-81df-c0977d4f1222" />
<img width="411" height="254" alt="Screenshot 2025-11-29 185446" src="https://github.com/user-attachments/assets/f739b9be-8db0-4e63-b3b4-806a8a13d441" />
<img width="374" height="263" alt="Screenshot 2025-11-29 185454" src="https://github.com/user-attachments/assets/b4ac3468-7902-4876-a14a-5a41ea10740a" />

