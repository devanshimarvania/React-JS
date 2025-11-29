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

### 🖼 UI Example

```
Counter : 3    [Increase] [Decrease]

Timer : 5
```

* **Counter** updates when user clicks buttons.
* **Timer** updates automatically every second.

---

<img width="377" height="244" alt="Screenshot 2025-11-29 185438" src="https://github.com/user-attachments/assets/d36bf1e0-1585-42b6-9379-edaed9accaf0" />
<img width="411" height="254" alt="Screenshot 2025-11-29 185446" src="https://github.com/user-attachments/assets/9b097577-a2e7-4132-a08b-4b822a8536e3" />
<img width="374" height="263" alt="Screenshot 2025-11-29 185454" src="https://github.com/user-attachments/assets/3e76820f-153f-4035-9ec4-e41e659fe6b3" />
